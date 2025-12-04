<script setup lang="ts">
import { ref } from 'vue'

const year = new Date().getFullYear()

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-container class="fg-white mx-auto d-flex align-center justify-center">
        <v-app-bar-title>Welcome to RevzIT</v-app-bar-title>
        <v-btn to="/"> Home </v-btn>
        <!-- <v-btn to="/about"> About </v-btn>
        <v-btn to="/github"> Github </v-btn> -->
        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Toggle Theme"
          slim
          @click="onClick"
        />
      </v-container>
    </v-app-bar>
    <v-main class="mx-auto d-flex align-center justify-center">
      <router-view />
    </v-main>
    <v-footer class="mx-auto d-flex align-center justify-center">
      Reverendyz© {{ year }}
    </v-footer>
  </v-app>
</template>

<style scoped></style>
