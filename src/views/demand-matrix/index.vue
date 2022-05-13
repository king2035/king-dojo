<template>
  <div class="demand-matrix">
    <div
      class="demand-matrix-item"
      v-for="(item, index) in apiData"
      :key="index"
    >
      <demand-matrix-left :data="item" />
      <demand-matrix-right :data="item" />
    </div>
  </div>
</template>

<script>
import { mockData } from "@/mock/api";
import demandMatrixLeft from "./components/demand-matrix-left.vue";
import demandMatrixRight from "./components/demand-matrix-right.vue";

export default {
  data() {
    const { content } = mockData;

    return {
      apiData: content,
    };
  },
  components: {
    demandMatrixLeft,
    demandMatrixRight,
  },
};
</script>

<style lang="less">
@import "./less/style.less";
</style>
