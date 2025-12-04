import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { en, pt } from 'vuetify/locale'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'pt',
    fallback: 'en',
    messages: { pt, en },
  },
})

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
