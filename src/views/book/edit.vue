<template>
  <div class="upload-page">
    <!-- <article-detail :is-edit></article-detail> -->
    <Detail :is-edit="true" />
  </div>
</template>

<script>
import Detail from './components/detail.vue'
export default {
  name: 'EditBook',
  components: {
    Detail
  }
}
</script>

<style>

</style>
