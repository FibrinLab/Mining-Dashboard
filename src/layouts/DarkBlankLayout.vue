<template>
  <div>
    <Loader />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>
<script>
import Loader from '../components/findash/loader/Loader'
import { findash } from '../config/pluginInit'
import darkLoader from '../assets/images/darkMode/dark-logo.gif'
import loader from '../assets/images/loader.gif'
export default {
  name: 'BlankLayout',
  components: {
    Loader
  },
  mounted () {
    findash.mainIndex()
    let body = document.querySelector('body')
    if (this.$route.meta.dark) {
      body.classList.add('dark')
      body.classList.remove('light')
      this.logo = darkLoader
    } else {
      body.classList.add('light')
      body.classList.remove('dark')
      this.logo = loader
    }
  }
}
</script>
<style>
@import url("../assets/css/custom.css");
.modal-backdrop {
  opacity: 0.5;
}
</style>
