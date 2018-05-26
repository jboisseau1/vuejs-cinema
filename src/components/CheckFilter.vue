<template>
  <div v-bind:class="{'check-filter': true, active: checked}" v-on:click="checkFilter">
    <span class="checkbox"></span>
    <span class="check-filter-title"> {{title}} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  props: ['title', 'catagory'],
  methods: {
    checkFilter() {
      this.checked = !this.checked;
      this.$bus.$emit('check-filter', this.catagory, this.title, this.checked);
    }
  }
};
</script>
