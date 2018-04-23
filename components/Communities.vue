<template lang="pug">
.section.communities-section.center
  .container__inner
    
    h1 {{ $t('home.communities.title') }}
    .communities__container
      div

        a(href="https://github.com/owen-it", target="_BLANK")
          img.partner__image(src="https://avatars0.githubusercontent.com/u/13595876?s=400&v=4")

        a(href="https://github.com/vuejs-br", target="_BLANK")
          img.partner__image(src="https://avatars1.githubusercontent.com/u/13300590?s=200&v=4")
          
        a(href="https://github.com/angular-ui/", target="_BLANK")
          img.partner__image(src="https://avatars0.githubusercontent.com/u/1530011?s=200&v=4")

        a(href="https://github.com/nuxt-community", target="_BLANK")
          img.partner__image(src="https://avatars1.githubusercontent.com/u/29566738?s=200&v=4")

        a(href="https://github.com/buefy", target="_BLANK")
          img.partner__image(src="https://avatars1.githubusercontent.com/u/26799900?s=200&v=4")

    p("v-html"="$t('home.communities.description')")
    a.button(href="https://github.com/anteriovieira") {{ $t('home.communities.button') }}

</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.button
  margin-top: 40px

.communities-section
  background-color: $color-white

  h1
    margin-bottom: 40px
  h2
    margin-top: 40px
    margin-bottom: 40px

.communities-section
  background-color: $color-white

  h1
    margin-bottom: 40px
  h2
    margin-top: 40px
    margin-bottom: 40px

.communities__container
  margin: 60px 0

.partner__image
  display: inline-block
  vertical-align: middle
  max-width: 90%
  width: 100px
  height: auto
  margin: 0 12px 20px 12px

.partner__image--special
  width: 100px
  margin-bottom: 50px
</style>
