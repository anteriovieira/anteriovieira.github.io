<template>
<div>
  <navbar></navbar>

  <nuxt></nuxt>

  <cookies/>
</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Cookies from '~/components/Cookies'

export default {
  components: { Navbar, Cookies },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  },
}
</script>

<style lang="sass">
@import ~assets/css/style

</style>
