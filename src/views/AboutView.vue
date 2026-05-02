<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const hobbies = [
  { icon: 'mdi-code-braces', label: t('about.hobbies.0') },
  { icon: 'mdi-music', label: t('about.hobbies.1') },
  { icon: 'mdi-hiking', label: t('about.hobbies.2') },
  { icon: 'mdi-bike-fast', label: t('about.hobbies.3') },
  { icon: 'mdi-dumbbell', label: t('about.hobbies.4') },
  { icon: 'mdi-gamepad-variant', label: t('about.hobbies.5') },
]
const degrees = [
  { icon: 'mdi-laptop', label: t('about.degrees.0') },
  { icon: 'mdi-security', label: t('about.degrees.1') },
]
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center mb-4 mb-sm-8 px-2 px-sm-4">
        <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-black mb-3 mb-sm-4">
          {{ $t('about.title') }}
        </h1>
        <div class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 font-weight-medium">
          {{ $t('about.content') }}
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="4" class="mt-4">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title class="text-orange">
              <span class="text-h5 text-sm-h4 text-md-h3">Hobbies</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-list density="compact" class="bg-transparent">
                <v-list-item
                  v-for="hobby in hobbies"
                  :key="hobby.label"
                  :prepend-icon="hobby.icon"
                  class="text-subtitle-1"
                >
                  {{ hobby.label }}
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" sm="6" md="4" class="mt-4">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title class="text-orange">
              <span class="text-h5 text-sm-h4 text-md-h3">{{ $t('about.revz.title') }}</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-subtitle-1">
              {{ $t('about.revz.content') }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" sm="12" md="4" class="mt-4">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title class="text-orange">
              <span class="text-h5 text-sm-h4 text-md-h3">Education</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-list density="compact" class="bg-transparent">
                <v-list-item
                  v-for="degree in degrees"
                  :key="degree.label"
                  :prepend-icon="degree.icon"
                  class="text-subtitle-1"
                >
                  {{ degree.label }}
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>
