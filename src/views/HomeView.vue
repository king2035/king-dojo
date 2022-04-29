<template>
  <div class="home-1">
    <h1>十里平湖霜满天</h1>
  </div>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <p>{{ counter }}</p>
    <ul>
      <li>{{ users }}</li>
      <li v-for="item in test" :key="item">{{ item }}</li>
    </ul>
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, Ref, reactive } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data () {
    return {
      name: 'Super Man'
    }
  },
  setup () {
    interface Book {
      title: string,
      year?: number
    }
    const counter = ref(0)
    const users = ref('')
    const test: Ref<Array<string>> = ref([])
    const book: Book = reactive({ title: 'Vue3 指引' })

    const getUsers = () => {
      users.value = 'hello world!!!'
      test.value = [
        'Tom',
        'jerry'
      ]
    }

    onMounted(getUsers)

    return {
      counter,
      users,
      test,
      book,
      getUsers
    }
  },

  mounted () {
    console.log('users => ', this.users)
    console.log('test :>> ', this.test)
    console.log('book :>> ', this.book)
  }
})
</script>
