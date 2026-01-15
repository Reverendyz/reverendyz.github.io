<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const experienceData = [
  { key: 'landis', period: 'Oct. 2024 – Current', company: 'Landis+Gyr' },
  { key: 'freelancer', period: 'Oct. 2022 – Current', company: 'Freelancer' },
  { key: 'trimble', period: 'Jul. 2022 – Sep. 2024', company: 'Trimble Inc.' },
  { key: 'arauco2', period: '2021 – 2022', company: 'Arauco Forest Brazil' },
  { key: 'arauco1', period: '2017 – 2021', company: 'Arauco Forest Brazil' },
  { key: 'intern', period: '2015 – 2017', company: 'Arauco do Brazil' },
]

const experienceItems = computed(() =>
  experienceData.map((exp) => ({
    period: exp.period,
    position: t(`curriculum.experience.${exp.key}.position`),
    company: exp.company,
    description: t(`curriculum.experience.${exp.key}.description`),
    highlights: tm(`curriculum.experience.${exp.key}.highlights`) as string[],
  })),
)
</script>

<template>
  <v-container class="my-5">
    <v-row>
      <v-col cols="12" class="text-center mb-4">
        <h1>{{ $t('curriculum.title') }}</h1>
        <p class="text-h6 text-medium-emphasis">{{ $t('curriculum.subtitle') }}</p>
      </v-col>
      <v-col cols="12">
        <v-timeline side="end" align="start" class="custom-timeline">
          <v-timeline-item
            v-for="(item, index) in experienceItems"
            :key="index"
            :dot-color="index === 0 ? 'primary' : 'secondary'"
            size="small"
          >
            <template v-slot:opposite>
              <div class="text-h6 font-weight-bold" :class="index === 0 ? 'text-primary' : ''">
                {{ item.period }}
              </div>
            </template>

            <v-card :elevation="index === 0 ? 8 : 2" :class="index === 0 ? 'border-primary' : ''">
              <v-card-title class="d-flex align-center flex-wrap">
                <span class="text-h5 mr-2">{{ item.position }}</span>
                <v-chip v-if="index === 0" color="success" size="small" class="ml-2">
                  {{ $t('curriculum.current') }}
                </v-chip>
              </v-card-title>
              <v-card-subtitle class="text-h6 mt-1">
                {{ item.company }}
              </v-card-subtitle>
              <v-card-text>
                <p class="mb-3">{{ item.description }}</p>
                <v-list density="compact" class="bg-transparent">
                  <v-list-item
                    v-for="(highlight, hIndex) in item.highlights"
                    :key="hIndex"
                    class="px-0"
                  >
                    <template v-slot:prepend>
                      <v-icon color="primary" size="small">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title class="text-wrap">{{ highlight }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.custom-timeline {
  margin-left: 0;
}

.border-primary {
  border: 2px solid rgb(var(--v-theme-primary));
}
</style>
