<template lang="pug">
.section.profile-section.post-section
  .container__inner

    .profile
      .content
        img.content__image(src="https://avatars1.githubusercontent.com/u/1490347?s=460&v=4" alt="Antério Vieira da silva")
        .content__title
          | Antério Vieira da silva
        .content__social
          a.icon.icon--github(href="https://github.com/anteriovieira" target="_blank")
          a.icon.icon--twitter(href="https://twitter.com/anteriovieira" target="_blank")
          a.icon.icon--linkedin(href="https://linkedin.com/in/anteriovieira/" target="_blank")

</template>

<script>
export default {
}
</script>

<style lang="sass">
@import ~assets/css/base/helpers

.profile
  display: flex
  justify-content: space-around
  flex-wrap: wrap

.section.profile-section
  padding-bottom: 0
  background-attachment: fixed
  background-repeat: no-repeat
  background-position: top
  background-image: url('https://pbs.twimg.com/profile_banners/312236206/1479837474/1500x500')

.content
  width: 100%
  margin: 10px 0 40px 0

  @media #{$medium-up}
    width: 50%

  @media #{$large-up}
    width: 25%
    margin: 10px 0

.content__title
  font-size: 24px
  font-weight: 600
  color: $color-text

.content__subtitle
  font-size: 18px
  font-weight: 300
  color: $color-blue

.content__image
  max-width: 202px
  margin-bottom: 15px
  border-radius: 300px

.content__social
  margin-top: 15px

.content__company
  width: 100%
  margin: 10px 0

  @media #{$large-up}
    width: 35%

.profile__logo
  img
    max-width: 233px
    width: 100%

.content__content
  display: inline-block

  @media #{$large-up}
    display: flex
    flex-direction: column
    margin-top: 45px

  .post-section__paragraph
    text-align: center

.profile-more
  margin-top: 60px

.profile-more__text,
.profile-more__button
  margin: 10px 0

  @media #{$large-up}
    display: inline-block
    vertical-align: middle

.profile-more__text
  font-size: 18px
  font-weight: 300
  color: $color-text
  line-height: 1.4
  text-align: left

  a
    font-weight: 600
    text-decoration: none
    color: $color-red

  @media #{$large-up}
    font-size: 20px
    text-align: center

.profile-more__button
  background-color: $color-red

  &:hover
    background-color: lighten($color-red, 10%)
</style>
