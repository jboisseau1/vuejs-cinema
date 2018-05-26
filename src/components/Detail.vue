<template>
  <div id="detail">
    <movie-item v-bind:movie="movie"></movie-item>

  </div>
</template>

<script>
export default {
  props: ['movies'],
  computed: {
    movie() {
      this.movies.find(movie => movie.id === this.$route.params.id);
    }
  },
  created() {
    console.log(this.$route);
  }
};
</script>

<style>
</style>
