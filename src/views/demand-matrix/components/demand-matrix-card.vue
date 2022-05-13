<template>
  <div class="matrix-card">
      <div class="matrix-card-header">
          <bk-tag theme="info" type="filled">
            {{ cardData.priority.displayValue }}
          </bk-tag>
          <bk-tag theme="success" type="filled">
            {{ cardData.modelTypeId.displayValue }}
          </bk-tag>
          <bk-tag type="filled">
            {{ cardData.number.displayValue }}
          </bk-tag>
          <bk-tag theme="info" type="filled">
            {{ cardData.state.displayValue }}
          </bk-tag>
      </div>
      <div class="matrix-card-content">
        {{ cardData.title.displayValue }}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      default: () => {}
    },
  },
  mounted () {
    console.log(this.cardData);
  },
};
</script>

<style lang="less" scoped></style>
