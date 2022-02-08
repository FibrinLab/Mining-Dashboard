<template>
  <div></div>
</template>
<script>
import { findash } from '../../config/pluginInit'

export default {
  name: 'VectorMaps',
  mounted () {
    findash.index()
  }
}
</script>
