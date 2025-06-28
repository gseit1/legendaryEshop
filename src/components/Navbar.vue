<script setup>
import { ref, onMounted } from 'vue'

const isMenuOpen = ref(false)
const navbarCollapseRef = ref(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Close menu when clicking outside on mobile
onMounted(() => {
  const handleClickOutside = (event) => {
    if (window.innerWidth <= 991 && isMenuOpen.value) {
      const navbar = document.querySelector('.custom-navbar')
      if (navbar && !navbar.contains(event.target)) {
        closeMenu()
      }
    }
  }

  document.addEventListener('click', handleClickOutside)
  
  // Close menu on route change
  const handleRouteChange = () => {
    closeMenu()
  }
  
  // Listen for route changes
  window.addEventListener('popstate', handleRouteChange)
  
  return () => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('popstate', handleRouteChange)
  }
})
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/" @click="closeMenu">
        SUPREME LEGENDARY
      </router-link>
      
      <button 
        class="navbar-toggler border-0" 
        type="button" 
        @click="toggleMenu"
        aria-label="Toggle navigation"
        :aria-expanded="isMenuOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div 
        ref="navbarCollapseRef"
        class="navbar-collapse collapse" 
        :class="{ 'show': isMenuOpen }"
      >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click="closeMenu">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shop" @click="closeMenu">Shop</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="closeMenu">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="closeMenu">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  padding: 1rem 0;
  z-index: 1000;
}

.navbar-brand {
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.nav-link {
  color: #fff !important;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.navbar-toggler {
  padding: 0.25rem 0.5rem;
  border: none;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-collapse {
  transition: all 0.3s ease;
}

/* Mobile specific styles */
@media (max-width: 991px) {
  .custom-navbar {
    padding: 0.5rem 0; /* Reduced padding on mobile */
  }
  
  .navbar-brand {
    font-size: 1.1rem; /* Smaller brand text on mobile */
    letter-spacing: 0.1em;
  }
  
  .navbar-toggler {
    padding: 0.2rem 0.4rem; /* Smaller toggler */
    font-size: 0.9rem;
  }
  
  .navbar-collapse {
    background: rgba(0, 0, 0, 0.98);
    border-radius: 8px; /* Smaller border radius */
    margin-top: 0.5rem; /* Reduced margin */
    padding: 0.75rem; /* Reduced padding */
    position: absolute;
    top: 100%;
    left: 15px;
    right: 15px;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transform: translateY(-10px);
  }
  
  .navbar-collapse.show {
    max-height: 250px; /* Reduced max height */
    opacity: 1;
    transform: translateY(0);
  }
  
  .nav-link {
    padding: 0.5rem 0; /* Reduced link padding */
    margin: 0;
    display: block;
    text-align: center;
    font-size: 0.9rem; /* Smaller font size */
    letter-spacing: 0.05em;
  }
  
  .nav-link::after {
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: none;
  }
  
  .navbar-nav {
    margin: 0;
  }
  
  .nav-item + .nav-item {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
}

/* Desktop styles */
@media (min-width: 992px) {
  .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
}
</style>
