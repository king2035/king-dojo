<template>
  <div class="demand-matrix-left">
    <div class="demand-matrix-left-container">
        <div class="col-item">
            <demand-matrix-card :card-data="data.property" />
        </div>
        <demand-matrix-col-item :data="data.children" />
    </div>
  </div>
</template>

<script>
import demandMatrixCard from './demand-matrix-card.vue'
import demandMatrixColItem from './demand-matrix-col-item.vue'

export default {
    props: {
        data: {
            type: Object,
            default: () => {}
        },
    },
    components: {
        demandMatrixCard,
        demandMatrixColItem
    }
};
</script>

<style lang="less" scoped></style>
