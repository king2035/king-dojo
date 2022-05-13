<template>
  <div>
      <child :data="apiData" />
  </div>
</template>

<script>
import { mockData } from "@/mock/api";
import child from '@/views/recursion-demo/child.vue';
export default {
  data() {
    const { content } = mockData;
    return {
      apiData: content,
    };
  },
  components: {
      child,
  },
};
</script>

<style lang="less" scoped></style>
