<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  data () {
    return {
      msg: 'Page Not Found :(-'
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
