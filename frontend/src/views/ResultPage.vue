<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <!-- Buttons Container -->
          <v-container>
            <v-row justify="center" align="center" class="mb-6">
              <v-col cols="12" class="d-flex justify-center mb-4">
                <v-btn elevation="0" size="x-large" @click="handleSubmit">
                  <i class="fa-solid fa-download"></i>
                  <span style="margin-left: 8px">Generate CSS</span>
                </v-btn>
              </v-col>
              <v-col cols="12" class="d-flex justify-center">
                <v-btn size="x-large" variant="outlined">
                  <i class="fa-solid fa-terminal"></i>
                  <span style="margin-left: 8px">How to use it</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>

        <v-col cols="12" md="6">
          <v-col
            cols="12"
            md="6"
            class="py-6"
            style="display: flex; flex-direction: row; align-items: start"
          >
            <!-- Card component -->
            <v-col
              cols="12"
              style="display: flex; flex-direction: column; justify-content: center; gap: 40px"
            >
              <div
                :style="{
                  padding: componentStore.card.padding + 'px',
                  backgroundColor: '#4E4856',
                  borderRadius: componentStore.card.borderRadius + 'px'
                }"
              >
                <h2>Title</h2>
                <p>Subtitle</p>
                <div style="display: flex; flex-direction: column; gap: 7px; margin: 10px 0px">
                  <div style="width: 80px" class="subtitle"></div>
                  <div style="width: 100px" class="subtitle"></div>
                  <div style="width: 60px" class="subtitle"></div>
                </div>
              </div>
              <card-container style="width: 100%">
                <v-col>
                  <v-slider
                    v-model="componentStore.card.borderRadius"
                    step="1"
                    :color="colorStore.primary"
                    :min="0"
                    :max="50"
                    hide-details
                  />
                </v-col>
              </card-container>
            </v-col>

            <v-col
              cols="12"
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 2rem;
                gap: 40px;
              "
            >
              <card-container style="width: 100%">
                <button
                  class="button-primary"
                  :style="{
                    border: componentStore.button.border + 'px solid',
                    borderColor: colorStore.primary,
                    borderRadius: componentStore.button.borderRadius + 'px',
                    padding:
                      componentStore.button.padding +
                      'px ' +
                      componentStore.button.padding * 3 +
                      'px',
                    fontSize: componentStore.button.fontSize + 'px'
                  }"
                >
                  Primary
                </button>
                <button
                  class="button-secondary"
                  :style="{
                    border: componentStore.button.border + 'px solid',
                    borderColor: colorStore.primary,
                    borderRadius: componentStore.button.borderRadius + 'px',
                    padding:
                      componentStore.button.padding +
                      'px ' +
                      componentStore.button.padding * 3 +
                      'px',
                    fontSize: componentStore.button.fontSize + 'px'
                  }"
                >
                  Secondary
                </button>
                <button
                  class="button-disabled"
                  :style="{
                    border: componentStore.button.border + 'px solid',
                    borderColor: '#3f3a45',
                    borderRadius: componentStore.button.borderRadius + 'px',
                    padding:
                      componentStore.button.padding +
                      'px ' +
                      componentStore.button.padding * 3 +
                      'px',
                    fontSize: componentStore.button.fontSize + 'px'
                  }"
                >
                  Disabled
                </button>
              </card-container>
            </v-col>
          </v-col>
          <v-container>
            <v-row>
              <v-col cols="12" md="8" class="py-6">
                <!-- Heading elements -->
                <v-row>
                  <card-container>
                    <div
                      class="text-subtitle-1"
                      style="display: flex; align-items: center; justify-content: space-around"
                    >
                      <p
                        style="text-align: center; margin-right: 2rem"
                        :style="{
                          fontSize: `${typoStore.h1.fontSize}px`,
                          fontWeight: `${typoStore.h1.fontWeight}`,
                          fontFamily: typoStore.fontFamily
                        }"
                      >
                        h1
                      </p>

                      <p
                        style="text-align: center; margin-right: 2rem"
                        :style="{
                          fontSize: `${typoStore.h2.fontSize}px`,
                          fontWeight: `${typoStore.h2.fontWeight}`,
                          fontFamily: typoStore.fontFamily
                        }"
                      >
                        h2
                      </p>

                      <p
                        style="text-align: center; margin-right: 2rem"
                        :style="{
                          fontSize: `${typoStore.h3.fontSize}px`,
                          fontWeight: `${typoStore.h3.fontWeight}`,
                          fontFamily: typoStore.fontFamily
                        }"
                      >
                        h3
                      </p>

                      <p
                        style="text-align: center; margin-right: 2rem"
                        :style="{
                          fontSize: `${typoStore.h4.fontSize}px`,
                          fontWeight: `${typoStore.h4.fontWeight}`,
                          fontFamily: typoStore.fontFamily
                        }"
                      >
                        h4
                      </p>
                      <p
                        style="text-align: center; margin-right: 2rem"
                        :style="{
                          fontSize: `${typoStore.h5.fontSize}px`,
                          fontWeight: `${typoStore.h5.fontWeight}`,
                          fontFamily: typoStore.fontFamily
                        }"
                      >
                        h5
                      </p>

                      <p
                        style="text-align: center; margin-right: 2rem"
                        :style="{
                          fontSize: `${typoStore.h6.fontSize}px`,
                          fontWeight: `${typoStore.h6.fontWeight}`,
                          fontFamily: typoStore.fontFamily
                        }"
                      >
                        h6
                      </p>
                    </div>
                  </card-container>
                </v-row>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="6">
                <card-container style="width: 100%">Layout</card-container>
              </v-col>
              <v-col cols="12" md="6">
                <card-container style="width: 100%">
                  <v-col cols="12" class="py-6">
                    <v-row>
                      <v-col cols="12">
                        <input
                          type="text"
                          :class="['input']"
                          placeholder="Placeholder"
                          :style="{
                            borderRadius: '5px',
                            padding: '10px 20px',
                            marginBottom: '20px'
                          }"
                        />
                      </v-col>
                      <v-col cols="12">
                        <input
                          type="text"
                          :class="['input', 'input-success']"
                          placeholder="Placeholder"
                          :style="{
                            borderRadius: '5px',
                            padding: '10px 20px',
                            marginBottom: '20px'
                          }"
                        />
                      </v-col>
                      <v-col cols="12">
                        <input
                          type="text"
                          :class="['input', 'input-error']"
                          placeholder="Placeholder"
                          :style="{
                            borderRadius: '5px',
                            padding: '10px 20px',
                            marginBottom: '20px'
                          }"
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                </card-container>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapStores } from 'pinia'
import { useColorStore } from '@/stores/colorStore'
import { useTypoStore } from '@/stores/typoStore'
import { useComponentStore } from '../stores/componentStore'
import cardContainer from '../components/cardContainer.vue'
import { generateJsonRequest } from '@/lib/functions'

export default {
  name: 'ComponentsPage',
  components: {
    cardContainer
  },
  data() {
    return {
      isMobile: false
    }
  },

  beforeUnmount() {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },

  computed: {
    ...mapStores(useTypoStore, useColorStore, useComponentStore)
  },

  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
    window.scrollTo(0, 0)
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 900
    },
    async handleSubmit() {
      const data = generateJsonRequest(this.typoStore, this.colorStore, this.componentStore)

      const response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
      })

      if (response.ok) {
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'style.css'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        console.log('Error')
      }
    }
  }
}
</script>

<style scoped>
.input {
  border: 1px solid #5438a4;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

input:focus {
  outline: none;
}

.input-error {
  border: 1px solid #ff0000;
}

.input-error::placeholder {
  color: #ff0000;
}

.input-success {
  border: 1px solid #0a5b34;
}

.input-success::placeholder {
  color: #0a5b34;
}

.subtitle {
  background-color: #939097;
  height: 12px;
  border-radius: 5px;
}
.button-secondary {
  color: #5438a4;
  border: 1px solid #5438a4;
  border-radius: 5px;
  cursor: pointer;
}
.button-primary {
  background-color: #5438a4;
  color: white;
  cursor: pointer;
}
</style>
