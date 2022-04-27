<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <p>{{ counter }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  setup () {
    const counter = ref(0)
    console.log(this)
    console.log('1232', counter.value)
    return {
      counter
    }
  }
})
</script>
