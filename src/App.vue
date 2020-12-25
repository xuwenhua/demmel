<template>
  <div id="app">
    <router-view />
    <div class="footer-wrapper">
      <Footer />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: { Footer },
}
</script>

<style>
@import url('styles/normalize.css');
html,
body {
  height: 100%;
  font-family: 'Fira Sans', sans-serif;
}
#app {
  height: 100%;
  min-width: 1290px;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
}
/* swiper */
.swiper-pagination-bullet {
  background: #fff;
  opacity: 1;
  width: 7px;
  height: 7px;
}
.swiper-pagination-bullet-active {
  background: #00789e !important;
  width: 8px;
  height: 8px;
}
.footer-wrapper {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
</style>
