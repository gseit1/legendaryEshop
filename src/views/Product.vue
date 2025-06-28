<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { allProducts } from '../data/products.js'

const route = useRoute()
const selectedSize = ref('')
const quantity = ref(1)
const imageError = ref(false)

const product = computed(() => {
  const productId = parseInt(route.params.id)
  return allProducts.find(p => p.id === productId)
})

const totalPrice = computed(() => {
  return (product.value?.price * quantity.value).toFixed(2)
})

const handleImageError = () => {
  imageError.value = true
}

onMounted(() => {
  if (product.value && product.value.sizes.length > 0) {
    selectedSize.value = product.value.sizes[0]
  }
})

const addToCart = () => {
  if (!selectedSize.value) {
    alert('Please select a size')
    return
  }
  // Cart functionality would be implemented here
  alert(`Added ${quantity.value}x ${product.value.name} (${selectedSize.value}) to cart!`)
}
</script>

<template>
  <div class="product-page" v-if="product">
    <div class="container">
      <div class="row">
        <!-- Product Image -->
        <div class="col-lg-6">
          <div class="product-image-section">
            <div class="main-image">
              <!-- Actual Product Image -->
              <img 
                v-if="!imageError && product.image"
                :src="product.image" 
                :alt="product.name"
                class="main-product-image"
                @error="handleImageError"
              />
              
              <!-- Fallback Placeholder -->
              <div v-else class="product-image-placeholder">
                <i class="bi bi-image display-1 text-muted"></i>
                <p class="text-muted mt-3">{{ product.name }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="col-lg-6">
          <div class="product-details">
            <div class="product-category text-muted text-uppercase mb-2">
              {{ product.category }}
            </div>
            
            <h1 class="product-title display-4 mb-4">{{ product.name }}</h1>
            
            <div class="price-section mb-4">
              <span class="current-price display-5 fw-bold">${{ product.price }}</span>
            </div>
            
            <div class="product-description mb-4">
              <p class="lead">{{ product.description }}</p>
            </div>

            <!-- Size Selection -->
            <div class="size-selection mb-4">
              <h5 class="mb-3">Size</h5>
              <div class="size-options d-flex flex-wrap gap-2">
                <button
                  v-for="size in product.sizes"
                  :key="size"
                  @click="selectedSize = size"
                  class="btn size-btn"
                  :class="{ 'active': selectedSize === size }"
                >
                  {{ size }}
                </button>
              </div>
            </div>

            <!-- Quantity Selection -->
            <div class="quantity-selection mb-4">
              <h5 class="mb-3">Quantity</h5>
              <div class="quantity-controls d-flex align-items-center">
                <button 
                  @click="quantity = Math.max(1, quantity - 1)"
                  class="btn btn-outline-light btn-sm"
                >
                  -
                </button>
                <span class="quantity-display mx-3 fw-bold">{{ quantity }}</span>
                <button 
                  @click="quantity = Math.min(10, quantity + 1)"
                  class="btn btn-outline-light btn-sm"
                >
                  +
                </button>
              </div>
            </div>

            <!-- Total Price -->
            <div class="total-price mb-4">
              <h5>Total: <span class="fw-bold">${{ totalPrice }}</span></h5>
            </div>

            <!-- Add to Cart Button -->
            <div class="cart-actions">
              <button 
                @click="addToCart"
                class="btn btn-primary btn-lg w-100 mb-3"
              >
                ADD TO CART
              </button>
              
              <div class="product-features">
                <div class="feature-item d-flex align-items-center mb-2">
                  <i class="bi bi-truck me-3"></i>
                  <span>Free shipping on orders over $100</span>
                </div>
                <div class="feature-item d-flex align-items-center mb-2">
                  <i class="bi bi-arrow-return-left me-3"></i>
                  <span>30-day return policy</span>
                </div>
                <div class="feature-item d-flex align-items-center">
                  <i class="bi bi-shield-check me-3"></i>
                  <span>Authentic streetwear guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Details Tabs -->
      <div class="row mt-5">
        <div class="col-12">
          <div class="product-tabs">
            <ul class="nav nav-tabs border-0 mb-4" id="productTabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active custom-tab" data-bs-toggle="tab" data-bs-target="#details">
                  Details
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link custom-tab" data-bs-toggle="tab" data-bs-target="#sizing">
                  Sizing
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link custom-tab" data-bs-toggle="tab" data-bs-target="#care">
                  Care
                </button>
              </li>
            </ul>
            
            <div class="tab-content">
              <div class="tab-pane fade show active" id="details">
                <div class="row">
                  <div class="col-md-6">
                    <h5>Product Details</h5>
                    <ul class="list-unstyled">
                      <li><strong>Material:</strong> 100% Premium Cotton</li>
                      <li><strong>Fit:</strong> Oversized/Regular</li>
                      <li><strong>Origin:</strong> Designed in NYC</li>
                      <li><strong>Collection:</strong> June's Drop 2025</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h5>Features</h5>
                    <ul class="list-unstyled">
                      <li>• Premium street-ready design</li>
                      <li>• Reinforced stitching</li>
                      <li>• Fade-resistant colors</li>
                      <li>• Comfortable all-day wear</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="tab-pane fade" id="sizing">
                <h5>Size Guide</h5>
                <p>Please refer to our size chart for the perfect fit. All measurements are in inches.</p>
                <div class="size-chart-placeholder bg-secondary p-4 text-center">
                  <p class="text-muted">Size Chart - Coming Soon</p>
                </div>
              </div>
              
              <div class="tab-pane fade" id="care">
                <h5>Care Instructions</h5>
                <ul class="list-unstyled">
                  <li>• Machine wash cold with like colors</li>
                  <li>• Do not bleach</li>
                  <li>• Tumble dry low</li>
                  <li>• Iron on low heat if needed</li>
                  <li>• Do not dry clean</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Product Not Found -->
  <div v-else class="product-not-found text-center py-5">
    <div class="container">
      <h2>Product Not Found</h2>
      <p class="text-muted">The product you're looking for doesn't exist.</p>
      <router-link to="/shop" class="btn btn-primary">Back to Shop</router-link>
    </div>
  </div>
</template>

<style scoped>
.product-page {
  padding-top: 100px;
  padding-bottom: 50px;
  background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
  min-height: 100vh;
  color: #fff;
}

.product-image-section {
  position: sticky;
  top: 100px;
}

.main-image {
  width: 100%;
  height: 600px;
  background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
  border-radius: 10px;
  overflow: hidden;
}

.main-product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.product-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.product-details {
  padding-left: 2rem;
}

.product-category {
  font-weight: 600;
  letter-spacing: 0.2em;
  font-size: 0.9rem;
  color: #ccc !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.product-title {
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.1;
  color: #fff !important;
  text-shadow: 
    3px 3px 6px rgba(0, 0, 0, 0.9),
    2px 2px 4px rgba(0, 0, 0, 0.7);
}

.current-price {
  color: #fff !important;
  font-weight: 900;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.9),
    1px 1px 2px rgba(0, 0, 0, 0.7);
}

.product-details .lead {
  color: #e0e0e0 !important;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8),
    1px 1px 2px rgba(0, 0, 0, 0.6);
}

.product-details p {
  color: #d0d0d0 !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.product-details h5 {
  color: #fff !important;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8),
    1px 1px 2px rgba(0, 0, 0, 0.6);
}

.size-btn {
  background: transparent;
  border: 2px solid #333;
  color: #fff;
  padding: 0.75rem 1rem;
  min-width: 60px;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s ease;
}

.size-btn:hover {
  border-color: #fff;
  color: #fff;
}

.size-btn.active {
  background: #fff;
  border-color: #fff;
  color: #000;
}

.quantity-controls {
  gap: 1rem;
}

.quantity-display {
  font-size: 1.2rem;
  min-width: 40px;
  text-align: center;
}

.product-features {
  border-top: 1px solid #333;
  padding-top: 1rem;
}

.feature-item {
  color: #e0e0e0 !important;
  font-size: 0.9rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.feature-item i {
  font-size: 1.1rem;
  color: #fff !important;
}

.custom-tab {
  background: transparent;
  border: none;
  color: #ccc;
  padding: 1rem 0;
  margin-right: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  position: relative;
}

.custom-tab::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #fff;
  transition: width 0.3s ease;
}

.custom-tab.active,
.custom-tab:hover {
  color: #fff;
}

.custom-tab.active::after,
.custom-tab:hover::after {
  width: 100%;
}

.tab-content {
  color: #d0d0d0 !important;
}

.tab-content h5 {
  color: #fff !important;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8),
    1px 1px 2px rgba(0, 0, 0, 0.6);
}

.tab-content li, .tab-content p {
  color: #d0d0d0 !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.tab-content strong {
  color: #fff !important;
}

.size-chart-placeholder {
  height: 200px;
  border-radius: 5px;
}

.product-not-found {
  padding-top: 150px;
  background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
  color: #fff;
  min-height: 100vh;
}

/* Mobile responsive */
@media (max-width: 991px) {
  .product-page {
    padding-top: 70px; /* Reduced for smaller mobile navbar */
  }
  
  .product-details {
    padding-left: 0;
    margin-top: 2rem;
  }
  
  .product-image-section {
    position: static;
  }
  
  .main-image {
    height: 400px;
  }
  
  .product-title {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .size-options {
    justify-content: center;
  }
  
  .quantity-controls {
    justify-content: center;
  }
  
  .custom-tab {
    margin-right: 1rem;
    font-size: 0.9rem;
  }
}
</style>
