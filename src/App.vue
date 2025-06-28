<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #000;
  color: #fff;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  letter-spacing: -0.025em;
}

.display-1 {
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -0.05em;
}

@media (max-width: 768px) {
  .display-1 {
    font-size: 2.5rem;
  }
}

/* Button styles */
.btn-primary {
  background-color: #fff;
  border-color: #fff;
  color: #000;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.75rem 2rem;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #000;
  border-color: #fff;
  color: #fff;
  transform: translateY(-2px);
}

.btn-outline-light {
  border-width: 2px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
}

.btn-outline-light:hover {
  transform: translateY(-2px);
}
</style>
