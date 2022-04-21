<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404" class="text-center text-h2 font-weight-regular my-10">
      {{ pageNotFound }}
    </h1>
    <h1 v-else class="text-center text-h2 font-weight-regular my-10">
      {{ otherError }}
    </h1>
    <NuxtLink to="/" class="text-center text-h4 font-weight-regular">
      Вернуться на главную
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Ошибка 404',
      otherError: 'Неизвестная ошибка'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>

</style>
