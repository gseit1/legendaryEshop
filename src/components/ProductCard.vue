<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}
</script>

<template>
  <div class="product-card">
    <router-link :to="`/product/${product.id}`" class="text-decoration-none">
      <div class="card bg-dark border-0 h-100 product-card-inner">
        <div class="card-img-wrapper position-relative">
          <!-- Actual Product Image -->
          <img 
            v-if="!imageError && product.image"
            :src="product.image" 
            :alt="product.name"
            class="product-image"
            @error="handleImageError"
            loading="lazy"
          />
          
          <!-- Fallback Placeholder -->
          <div v-else class="product-image-placeholder">
            <i class="bi bi-image display-4 text-muted"></i>
            <p class="text-muted mt-2 small">{{ product.name }}</p>
          </div>
          
          <div class="product-overlay">
            <div class="overlay-content">
              <span class="btn btn-outline-light btn-sm">VIEW PRODUCT</span>
            </div>
          </div>
        </div>
        
        <div class="card-body d-flex flex-column">
          <div class="product-category text-muted small text-uppercase mb-1">
            {{ product.category }}
          </div>
          <h5 class="card-title text-white mb-2">{{ product.name }}</h5>
          <p class="card-text text-muted small flex-grow-1">
            {{ product.description }}
          </p>
          <div class="product-footer d-flex justify-content-between align-items-center mt-3">
            <span class="price text-white fw-bold fs-5">${{ product.price }}</span>
            <span class="badge bg-light text-dark" v-if="product.featured">Featured</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.product-card {
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
}

.product-card-inner {
  background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
  border: 1px solid #333;
  transition: all 0.3s ease;
  overflow: hidden;
}

.product-card:hover .product-card-inner {
  border-color: #fff;
  box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
}

.card-img-wrapper {
  height: 250px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.overlay-content .btn {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.product-category {
  font-weight: 600;
  letter-spacing: 0.1em;
}

.price {
  font-size: 1.3rem;
  font-weight: 900;
}

.badge {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .card-img-wrapper {
    height: 200px;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .card-title {
    font-size: 1rem;
  }
  
  .price {
    font-size: 1.1rem;
  }
}
</style>
