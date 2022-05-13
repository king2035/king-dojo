<template>
  <div>
    <div
      v-for="item in data"
      :key="item.property.id.displayValue"
    >
        <demand-matrix-card
            v-for="ele in item.children"
            :key="ele.property.id.displayValue"
            :card-data="item.property"
        />
    </div>
  </div>
</template>

<script>
import demandMatrixCard from "./demand-matrix-card.vue";

export default {
  name: "DemandMatrixColItem",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    demandMatrixCard,
  },
};
</script>

<style lang="less" scoped></style>
