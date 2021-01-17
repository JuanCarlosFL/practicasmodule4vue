<template>
  <ul>
      <li v-for="member in members" :key="member.id">
          {{ member.name }}
      </li>
  </ul>
</template>

<script lang="ts">
import { memberService } from '@/services/memberService';
import { defineComponent } from 'vue'
import { Member } from '../models/member';

export default defineComponent({
    data() {
        return {
            members: [] as Member[]
        }
    },
    created() {
        this.members = memberService.get();
    }
})
</script>

<style></style>
