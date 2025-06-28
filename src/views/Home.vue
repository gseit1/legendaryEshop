<script setup>
import { onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { featuredProducts } from '../data/products.js'

// Simulate video loading
onMounted(() => {
  const video = document.querySelector('.hero-video')
  if (video) {
    video.play().catch(e => console.log('Video autoplay failed:', e))
  }
})
</script>

<template>
  <div class="home">
    <!-- Hero Section with Background Video -->
    <section class="hero-section position-relative">
      <div class="video-background">
        <video 
          class="hero-video w-100 h-100 object-fit-cover"
          autoplay 
          muted 
          loop 
          playsinline
        >
          <source src="/videos/streetVideo.mp4" type="video/mp4">
          <!-- Fallback background -->
        </video>
        <div class="video-overlay"></div>
      </div>
      
      <div class="hero-content position-absolute top-50 start-50 translate-middle text-center">
        <div class="container">
          <h1 class="display-1 mb-4 hero-title">
            STREET
            <br>
            <span class="text-outline">CULTURE</span>
          </h1>
          <p class="lead mb-5 hero-subtitle">
            Redefining Urban Fashion with Supreme Quality
          </p>
          <router-link to="/shop" class="btn btn-primary btn-lg cta-button">
            SHOP NOW
          </router-link>
        </div>
      </div>
    </section>

    <!-- June's Drop Section -->
    <section class="junes-drop py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="section-title display-2 mb-3">JUNE'S DROP</h2>
            <p class="section-subtitle">Latest streetwear essentials for the modern urban explorer</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div 
            v-for="product in featuredProducts" 
            :key="product.id"
            class="col-md-6 col-lg-4"
          >
            <ProductCard :product="product" />
          </div>
        </div>
        
        <div class="text-center mt-5">
          <router-link to="/shop" class="btn btn-outline-light btn-lg">
            VIEW ALL PRODUCTS
          </router-link>
        </div>
      </div>
    </section>

    <!-- Brand Story Section -->
    <section class="brand-story py-5 bg-white text-dark">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h3 class="display-4 mb-4">LEGENDARY QUALITY</h3>
            <p class="lead mb-4">
              Born from the streets, crafted for legends. Our commitment to quality 
              and authentic street culture drives everything we create.
            </p>
            <p class="mb-4">
              Each piece is designed with the urban warrior in mind - those who live 
              boldly, express freely, and never compromise on style.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="brand-image-placeholder">
              <div class="placeholder-content">
                <i class="bi bi-image display-1"></i>
                <p class="mt-3">Brand Story Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-video {
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.hero-content {
  z-index: 2;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 900;
  line-height: 0.8;
  text-shadow: 
    4px 4px 8px rgba(0, 0, 0, 0.9),
    2px 2px 4px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(0, 0, 0, 0.7);
  position: relative;
}

.hero-title::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, transparent 70%);
  z-index: -1;
  border-radius: 20px;
}

.text-outline {
  -webkit-text-stroke: 3px #fff;
  -webkit-text-fill-color: transparent;
  color: transparent;
  text-shadow: 
    4px 4px 8px rgba(0, 0, 0, 1),
    2px 2px 4px rgba(0, 0, 0, 0.9),
    0 0 20px rgba(0, 0, 0, 0.8);
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 300;
  letter-spacing: 0.1em;
  text-shadow: 
    3px 3px 6px rgba(0, 0, 0, 0.9),
    1px 1px 3px rgba(0, 0, 0, 0.8),
    0 0 15px rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  backdrop-filter: blur(5px);
}

.cta-button {
  font-size: 1.2rem;
  padding: 1rem 3rem;
  box-shadow: 
    0 10px 30px rgba(255, 255, 255, 0.3),
    0 4px 15px rgba(0, 0, 0, 0.5);
  border: 2px solid #fff;
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: rgba(255, 255, 255, 0.1);
  z-index: -1;
  border-radius: inherit;
}

.junes-drop {
  background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
  min-height: 80vh;
}

.section-title {
  font-weight: 900;
  letter-spacing: 0.1em;
  background: linear-gradient(45deg, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
}

.brand-story {
  position: relative;
}

.brand-image-placeholder {
  height: 400px;
  background-color: #f8f9fa;
  border: 2px dashed #dee2e6;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
}

.placeholder-content {
  color: #6c757d;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .hero-section {
    height: 70vh;
  }
  
  .hero-title {
    margin-bottom: 2rem !important;
  }
  
  .hero-subtitle {
    margin-bottom: 3rem !important;
  }
  
  .cta-button {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
  
  .junes-drop {
    padding: 3rem 0;
  }
  
  .brand-image-placeholder {
    height: 250px;
    margin-top: 2rem;
  }
}

/* Video fallback for mobile */
@media (max-width: 768px) {
  .video-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #000 0%, #333 100%);
    z-index: -1;
  }
}
</style>
