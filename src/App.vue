<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
  <v-app>
    <nav-bar />
    <v-main>
      <router-view />
    </v-main>
    <page-footer />
  </v-app>
</template>

<style scoped></style>
