<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'

const theme = useTheme()
const { locale } = useI18n()
const drawer = ref(false)

const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'pt' : 'en'
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}
</script>

<template>
  <v-app-bar>
    <v-container class="fg-white mx-auto d-flex align-center justify-space-between pa-2">
      <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = !drawer" />

      <v-app-bar-title class="text-h6 text-sm-h5">
        <a href="/" class="text-decoration-none text-white">RevzIT</a>
      </v-app-bar-title>

      <div class="d-none d-md-flex align-center">
        <v-btn to="/" size="small" class="mx-1">{{ $t('nav.home') }}</v-btn>
        <v-btn to="/curriculum" size="small" class="mx-1">{{ $t('nav.curriculum') }}</v-btn>
        <v-btn to="/projects" size="small" class="mx-1">{{ $t('nav.projects') }}</v-btn>
        <v-btn to="/about" size="small" class="mx-1">{{ $t('nav.about') }}</v-btn>
        <v-btn variant="outlined" size="small" class="mx-1" @click="toggleLanguage">
          {{ locale === 'en' ? 'PT-BR' : 'EN-US' }}
          <v-icon end>mdi-translate</v-icon>
        </v-btn>
        <v-btn
          :prepend-icon="
            theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'
          "
          size="small"
          variant="text"
          class="mx-1"
          @click="theme.toggle()"
        >
          {{ $t('nav.theme') }}
        </v-btn>
      </div>

      <div class="d-flex d-md-none align-center">
        <v-btn variant="outlined" size="small" class="mx-1" @click="toggleLanguage">
          <v-icon>mdi-translate</v-icon>
        </v-btn>
        <v-btn
          :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          size="small"
          variant="text"
          @click="theme.toggle()"
        />
      </div>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-home"
        :title="$t('nav.home')"
        to="/"
        @click="drawer = false"
      />
      <v-list-item
        prepend-icon="mdi-file-account"
        :title="$t('nav.curriculum')"
        to="/curriculum"
        @click="drawer = false"
      />
      <v-list-item
        prepend-icon="mdi-code-braces"
        :title="$t('nav.projects')"
        to="/projects"
        @click="drawer = false"
      />
      <v-list-item
        prepend-icon="mdi-information"
        :title="$t('nav.about')"
        to="/about"
        @click="drawer = false"
      />
    </v-list>
  </v-navigation-drawer>
</template>
