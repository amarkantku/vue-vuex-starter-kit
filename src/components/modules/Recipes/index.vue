<template>
  <div class="recipes-wrapper-div">
    <router-view class="view recipes"></router-view>
  </div>
</template>

<script>
export default {
  name: 'RecipesIndex',
  beforeRouteEnter (to, from, next) {
    // this is not available here 
    // you can do user permission check and fetch data before showing on the page.
    alert('Fetching data before enter route...');
    next();
    // getPost(to.params.id, (err, post) => {
    //   next(vm => vm.setData(err, post))
    // })
  },
  beforeRouteUpdate (to, from, next) {
    alert('Fetching data on route update...');
    next();
    // this.post = null
    // getPost(to.params.id, (err, post) => {
    //   this.setData(err, post)
    //   next()
    // })
  },
  methods: {
    setData (err, post) {
      console.log('set data');
    }
  }
}
</script>

<style scoped>
</style>
