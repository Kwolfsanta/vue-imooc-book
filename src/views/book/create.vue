<template>
  <div class="book-create-page">
    <Detail :is-edit="false" />
    <div class="container">
      queshi
    </div>
  </div>
</template>

<script>
import Detail from './components/detail.vue'
export default {
  name: 'CreateBook',
  components: {
    Detail
  }
}
</script>

<style scoped>
  .container {
    height: 1200px;
  }
</style>
