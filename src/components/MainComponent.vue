<template>
  <main>
    <MembersList />

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  MembersList  from '../components/MembersList.vue';

export default defineComponent({
  components: {
    MembersList
  }
})
</script>

<style>
    main {
        flex-grow: 1;
        width: 80%;
        margin: 0 auto;
    }
</style>
