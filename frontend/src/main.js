import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { theme } from './lib/vuetify-theme'

// Pinia
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'

const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives,
  theme
})

const app = createApp(App)

app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app')
