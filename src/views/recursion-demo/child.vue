<template>
  <div style="border: 1px solid red; margin-bottom: 10px;">
    <div v-for="(item, index) in data" :key="index">
      <p>{{ item.property.title.displayValue }}</p>
      <child v-if="item.children.length" :data="item.children"></child>
    </div>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped></style>
