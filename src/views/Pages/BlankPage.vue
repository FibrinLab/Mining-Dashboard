<template>
  <b-row>
    <b-col lg="12">Here Add Your HTML Content.....</b-col>
  </b-row>
</template>
<script>
import { findash } from '../../config/pluginInit'

export default {
  name: 'BlankPage',
  mounted () {
    findash.index()
  }
}
</script>
