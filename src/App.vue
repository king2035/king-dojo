<template>
  <div id="app">
    <!-- <demand-matrix></demand-matrix> -->
    <!-- <recursionDemo /> -->
    <demand-matrix-table />
  </div>
</template>

<script>

// import recursionDemo from '@/views/recursion-demo'
// import demandMatrix from '@/views/demand-matrix'
import demandMatrixTable from '@/views/demand-matrix-table'
export default {
  name: 'App',
  components: {
    // demandMatrix
    // recursionDemo
    demandMatrixTable
  }
}
</script>

<style>
@import './assets/less/reset.less';
</style>
