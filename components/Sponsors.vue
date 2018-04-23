<template lang="pug">
.section.sponsors-section.center
  .container__inner
    h1 {{ $t('home.sponsors.title') }}
    .sponsors__container
      .div
        a(href="http://edulivre.org.br/", target="_BLANK")
          img.partner__image(src="https://pbs.twimg.com/media/DA_b9WoXkAA3qp8.jpg")

    p("v-html"="$t('home.sponsors.description')")
    a.button.patreon(href="https://www.patreon.com/anteriovieira") {{ $t('home.sponsors.button') }}
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.button
  margin-top: 40px
  &.patreon
    background-color: rgb(249, 104, 84)
    border-radius: 0

.sponsors-section
  background-color: $color-white

  h1
    margin-bottom: 40px
  h2
    margin-top: 40px
    margin-bottom: 40px

.sponsor__image
  max-width: 90%
  width: 280px
  height: auto
  max-height: 100px
  margin: 0 20px 20px 20px
  vertical-align: middle
  display: inline-block

.partner__image
  display: inline-block
  vertical-align: middle
  max-width: 60%
  width: 180px
  margin: 0 12px 20px 12px

.partner__image--special
  width: 100px108px
  margin-bottom: 50px
</style>
