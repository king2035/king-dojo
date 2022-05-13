<template>
  <div id="app">
    <demand-matrix></demand-matrix>
    <!-- <recursionDemo /> -->
  </div>
</template>

<script>

// import recursionDemo from '@/views/recursion-demo'
import demandMatrix from '@/views/demand-matrix'
export default {
  name: 'App',
  components: {
    demandMatrix
    // recursionDemo
  }
}
</script>

<style>
@import './assets/less/reset.less';
</style>
