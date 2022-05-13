<template>
  <div class="demand-matrix-right">
    <div class="demand-matrix-right-container">
      <!-- <div class="col-item" v-for="(item, index) in data.children" :key="index">
        <template v-for="(ele, index) in item.relational">
          <demand-matrix-card :card-data="ele" :key="index" />
        </template>
      </div> -->
      <demand-matrix-col-item :data="data.children" />
    </div>
  </div>
</template>

<script>
import demandMatrixColItem from './demand-matrix-col-item.vue'

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
  },
  components: {
    demandMatrixColItem
  }
};
</script>

<style lang="less" scoped></style>
