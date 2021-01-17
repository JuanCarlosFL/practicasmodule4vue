<template>
  <div class="home">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from '@/components/HeaderComponent.vue';
import MainComponent from '@/components/MainComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent({
  
  name: "Home",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  }
});
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
