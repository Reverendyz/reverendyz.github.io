<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const experienceData = [
  { key: 'vwb', period: 'Feb. 2026 – Current', company: 'Volkswagen Tech Brazil' },
  { key: 'freelancer', period: 'Oct. 2022 – Current', company: 'Freelancer' },
  { key: 'landis', period: 'Oct. 2024 – Feb. 2026', company: 'Landis+Gyr' },
  { key: 'trimble', period: 'Jul. 2022 – Sep. 2024', company: 'Trimble Inc.' },
  { key: 'arauco2', period: '2021 – 2022', company: 'Arauco Forest Brazil' },
  { key: 'arauco1', period: '2017 – 2021', company: 'Arauco Forest Brazil' },
  { key: 'intern', period: '2015 – 2017', company: 'Arauco do Brazil' },
]

const experienceItems = computed(() =>
  experienceData.map((exp) => ({
    period: exp.period,
    isCurrent: exp.period.includes('Current'),
    position: t(`curriculum.experience.${exp.key}.position`),
    company: exp.company,
    description: t(`curriculum.experience.${exp.key}.description`),
    highlights: tm(`curriculum.experience.${exp.key}.highlights`) as string[],
  })),
)

const calculateAge = computed(() => {
  const birthDate = new Date('1997-06-06')
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
})
</script>

<template>
  <v-container class="my-5">
    <v-row>
      <v-col cols="12" md="5" xs="12" class="text-center text-md-right mb-4">
        <v-avatar image="profile.jpeg" size="200" />
      </v-col>
      <v-col cols="12" md="7" xs="12" class="text-center text-md-left align-self-center mb-4">
        <h1>{{ $t('curriculum.title') }}</h1>
        <p class="text-h6 text-medium-emphasis">Felipe Santos - {{ calculateAge }}y</p>
        <p class="text-body-1 mt-3">
          {{ $t('curriculum.summary') }}
        </p>
        <p class="text-caption mt-3">
          <v-icon>mdi-email-outline </v-icon>
          <a href="mailto:fmsantos1997@hotmail.com">fmsantos1997@hotmail.com </a>
          <v-icon>mdi-linkedin </v-icon>
          <a href="https://www.linkedin.com/in/06-fmsantos/">LinkedIn Profile</a>
        </p>
      </v-col>
      <v-col cols="9">
        <v-timeline side="end" align="start" class="custom-timeline">
          <v-timeline-item
            v-for="(item, index) in experienceItems"
            :key="index"
            :dot-color="item.isCurrent ? 'primary' : 'secondary'"
            size="small"
          >
            <template v-slot:opposite>
              <div class="text-h6 font-weight-bold" :class="item.isCurrent ? 'text-primary' : ''">
                {{ item.period }}
              </div>
            </template>

            <v-card
              :elevation="item.isCurrent ? 8 : 2"
              :class="item.isCurrent ? 'border-primary equal-height-card' : 'equal-height-card'"
              class="d-flex flex-column"
              max-width="900"
            >
              <v-card-title class="d-flex align-center flex-wrap">
                <span class="text-h5 mr-2">{{ item.position }}</span>
                <v-chip v-if="item.isCurrent" color="success" size="small" class="ml-2">
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
      <v-col md="3" sm="12" xs="12" class="text-center align-center mt-8">
        <h3 class="text-h6 mb-4">{{ $t('curriculum.stack') }}</h3>
        <div class="d-flex flex-column align-center ga-2">
          Tools
          <v-chip prepend-icon="mdi-docker" variant="tonal" size="small" class="tech-chip">
            Docker
          </v-chip>
          <v-chip prepend-icon="mdi-kubernetes" variant="tonal" size="small" class="tech-chip">
            Kubernetes
          </v-chip>
          <v-chip prepend-icon="mdi-kubernetes" variant="tonal" size="small" class="tech-chip">
            Helm
          </v-chip>
          <v-chip prepend-icon="mdi-terraform" variant="tonal" size="small" class="tech-chip">
            Terraform
          </v-chip>
          <v-chip prepend-icon="mdi-ansible" variant="tonal" size="small" class="tech-chip">
            Ansible
          </v-chip>
          <v-chip prepend-icon="mdi-git" variant="tonal" size="small" class="tech-chip">
            Git
          </v-chip>
          <v-chip prepend-icon="mdi-microsoft-azure" variant="tonal" size="small" class="tech-chip">
            Azure Pipelines
          </v-chip>
          <v-chip prepend-icon="mdi-github" variant="tonal" size="small" class="tech-chip">
            Github Actions
          </v-chip>
          <v-chip prepend-icon="mdi-gitlab" variant="tonal" size="small" class="tech-chip">
            Buildkite
          </v-chip>
          <v-chip
            prepend-icon="mdi-arrow-decision-auto-outline"
            variant="tonal"
            size="small"
            class="tech-chip"
          >
            Jenkins
          </v-chip>
          <v-chip prepend-icon="mdi-google-cloud" variant="tonal" size="small" class="tech-chip">
            Google Cloud Platform
          </v-chip>
          <v-chip prepend-icon="mdi-microsoft-azure" variant="tonal" size="small" class="tech-chip">
            Azure
          </v-chip>
          <v-chip prepend-icon="mdi-aws" variant="tonal" size="small" class="tech-chip">
            Amazon Web Services
          </v-chip>
          <v-chip prepend-icon="mdi-monitor-eye" variant="tonal" size="small" class="tech-chip">
            Grafana
          </v-chip>
          <v-chip prepend-icon="mdi-apache-kafka" variant="tonal" size="small" class="tech-chip">
            Kafka
          </v-chip>
          <v-chip prepend-icon="mdi-rabbit" variant="tonal" size="small" class="tech-chip">
            RabbitMQ
          </v-chip>
          <v-chip
            prepend-icon="mdi-arrow-decision-outline"
            variant="tonal"
            size="small"
            class="tech-chip"
          >
            NGINX
          </v-chip>
          Languages
          <v-chip prepend-icon="mdi-language-go" variant="tonal" size="small" class="tech-chip">
            Golang
          </v-chip>
          <v-chip prepend-icon="mdi-language-python" variant="tonal" size="small" class="tech-chip">
            Python
          </v-chip>
          <v-chip
            prepend-icon="mdi-language-typescript"
            variant="tonal"
            size="small"
            class="tech-chip"
          >
            TypeScript
          </v-chip>
          <v-chip prepend-icon="mdi-language-java" variant="tonal" size="small" class="tech-chip">
            Java
          </v-chip>
          <v-chip prepend-icon="mdi-language-c" variant="tonal" size="small" class="tech-chip">
            C
          </v-chip>
          Scripting
          <v-chip prepend-icon="mdi-bash" variant="tonal" size="small" class="tech-chip">
            Bash
          </v-chip>
          <v-chip prepend-icon="mdi-language-python" variant="tonal" size="small" class="tech-chip">
            Python
          </v-chip>
          Misc
          <v-chip prepend-icon="mdi-vuejs" variant="tonal" size="small" class="tech-chip">
            VueJS
          </v-chip>
          <v-chip prepend-icon="mdi-react" variant="tonal" size="small" class="tech-chip">
            React
          </v-chip>
          <v-chip prepend-icon="mdi-language-java" variant="tonal" size="small" class="tech-chip">
            SpringBoot
          </v-chip>
          <v-chip prepend-icon="mdi-material-design" variant="tonal" size="small" class="tech-chip">
            Material UI
          </v-chip>
        </div>
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

.tech-chip {
  width: 200px;
}
</style>
