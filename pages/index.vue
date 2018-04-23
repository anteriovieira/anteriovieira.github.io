<template lang="pug">
div

  .container
    profile-section
    sponsors-section
    communities-section

</template>

<script>
import SponsorsSection from '~/components/Sponsors'
import CommunitiesSection from '~/components/Communities'
import ProfileSection from '~/components/Profile'

export default {
  components: {
    ProfileSection,
    SponsorsSection,
    CommunitiesSection,
  },
  head: {
    title: 'Antério Vieira'
  },
}
</script>

<style lang="sass" scoped>
  @import ~assets/css/base/helpers

  .speaker-button
    margin: 40px 0 10px

  .container
    padding-top: 50px

  .center
    margin-top: 20px

  h3
    margin: 50px 0 0
    font-size: 24px
    font-family: "Source Sans Pro", sans-serif
    font-weight: 300
    color: #35485E

    @media #{$medium-up}
      font-size: 32px
</style>
