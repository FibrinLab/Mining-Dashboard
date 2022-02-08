<template>
  <div class="container p-0">
    <div class="row no-gutters">
      <div class="col-sm-12 text-center">
        <div class="iq-error position-relative mt-5">
          <img
            :src="image404"
            class="img-fluid iq-error-img"
            alt="404"
            v-if="$route.params.code === '404'"
          />
          <img :src="image500" class="img-fluid iq-error-img" alt="500" v-else />
          <h1 class="text-in-box" v-if="$route.params.code === '500'">500</h1>
          <h2
            class="mb-0"
            :class="$route.params.code === '404' ? 'mt-4' : ''"
          >Oops! This Page is Not Working.</h2>
          <p>The requested is Internal Server Error.</p>
          <button @click="$router.go(-1)" class="btn btn-primary mt-3">
            <i class="ri-home-4-line"></i>Back to Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { findash } from '../../config/pluginInit'

export default {
  name: 'ErrorPage',
  mounted () {
    findash.index()
  },
  data () {
    return {
      image404: require('../../assets/images/error/404.png'),
      image500: require('../../assets/images/error/500.png')
    }
  }
}
</script>
