<script setup>
import { ref, computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { allProducts } from '../data/products.js'

const selectedCategory = ref('all')
const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'T-Shirts', label: 'T-Shirts' },
  { value: 'Cargo', label: 'Cargo Pants' }
]

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return allProducts
  }
  return allProducts.filter(product => product.category === selectedCategory.value)
})
</script>

<template>
  <div class="shop">
    <!-- Hero Section -->
    <section class="shop-hero py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="display-2 mb-4">SHOP COLLECTION</h1>
            <p class="lead">Discover our premium streetwear essentials</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section py-4 border-bottom border-secondary">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="filter-wrapper d-flex flex-wrap gap-3 justify-content-center">
              <button
                v-for="category in categories"
                :key="category.value"
                @click="selectedCategory = category.value"
                class="btn filter-btn"
                :class="{ 'active': selectedCategory === category.value }"
              >
                {{ category.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="products-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-4">
            <div class="d-flex justify-content-between align-items-center">
              <h3 class="text-white">
                {{ selectedCategory === 'all' ? 'All Products' : selectedCategory }}
              </h3>
              <span class="text-muted">{{ filteredProducts.length }} items</span>
            </div>
          </div>
        </div>
        
        <div class="row g-4">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id"
            class="col-md-6 col-lg-4"
          >
            <ProductCard :product="product" />
          </div>
        </div>
        
        <div v-if="filteredProducts.length === 0" class="text-center mt-5">
          <p class="text-muted lead">No products found in this category.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.shop {
  padding-top: 80px; /* Account for fixed navbar */
  min-height: 100vh;
  background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
}

.shop-hero {
  background: linear-gradient(135deg, #000 0%, #2a2a2a 100%);
  border-bottom: 1px solid #333;
}

.shop-hero h1 {
  font-weight: 900;
  letter-spacing: 0.1em;
  background: linear-gradient(45deg, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.filter-section {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.filter-btn {
  background: transparent;
  border: 2px solid #333;
  color: #fff;
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  transition: all 0.3s ease;
  border-radius: 0;
}

.filter-btn:hover {
  border-color: #fff;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.filter-btn.active {
  background: #fff;
  border-color: #fff;
  color: #000;
}

.products-section {
  background: #000;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .shop {
    padding-top: 50px; /* Reduced for smaller mobile navbar */
  }
  
  .shop-hero h1 {
    font-size: 2.5rem;
  }
  
  .filter-wrapper {
    flex-direction: column;
    align-items: center;
  }
  
  .filter-btn {
    width: 100%;
    max-width: 200px;
  }
}
</style>
