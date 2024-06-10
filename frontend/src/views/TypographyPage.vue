<template>
  <!-- Version mobile -->
  <div v-if="isMobile">
    <h1>Version Mobile</h1>
  </div>

  <div v-else>
    <!-- header -->
    <div style="display: flex; justify-content: center; width: 100%; margin-bottom: 50px">
      <h1>
        Let's customize your
        <span
          :style="{
            color: colorStore.primaryColor,
            fontFamily: 'Alex Brush, cursive',
            fontSize: '54px'
          }"
          >T</span
        >
        <span :style="{ color: colorStore.primaryColor }">ypography</span>
      </h1>
    </div>

    <!-- content -->
    <div style="display: flex; flex-direction: column; gap: 50px; margin-bottom: 30px">
      <card-container>
        <h2 style="text-align: center; font-family: 'Euclid-regular'">Font family</h2>
        <v-select
          style="width: 400px"
          label="Select typography"
          :items="['Inter', 'Poppins', 'Raleway', 'Roboto', 'Montserrat', 'Fira Code']"
          variant="outlined"
          v-model="typoStore.fontFamily"
        />
        <h1 style="text-align: center" :style="{ fontFamily: typoStore.fontFamily }">
          The quick brown fox jumps over the lazy dog.
        </h1>
      </card-container>
      <card-container>
        <h2 style="text-align: center; font-family: 'Euclid-regular'">Headings</h2>
        <v-row style="width: 100%">
          <v-col cols="6">
            <div style="display: flex; width: 100%; justify-content: center">
              <div style="display: flex; flex-direction: column; width: 70%; padding: 0px 30px">
                <div style="margin: 10px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      font-family: Euclid-Bold;
                      align-items: center;
                    "
                  >
                    <p>Font size</p>
                    <h3 style="color: #aa9bd1">{{ typoStore.h1.fontSize }} px</h3>
                  </div>
                  <v-slider
                    v-model="typoStore.h1.fontSize"
                    step="1"
                    :color="colorStore.primaryColor"
                    :min="typoStore.h2.fontSize"
                    hide-details
                    style="width: 100%"
                  />
                </div>
                <div style="margin: 10px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      font-family: Euclid-Bold;
                      align-items: center;
                      margin: 0px 10px;
                    "
                  >
                    <p>Font weight</p>
                    <h3 style="color: #aa9bd1">{{ typoStore.h1.fontWeight }}</h3>
                  </div>
                  <v-slider
                    v-model="typoStore.h1.fontWeight"
                    step="100"
                    :color="colorStore.primaryColor"
                    :max="900"
                    :min="100"
                    hide-details
                    style="width: 100%"
                  />
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; width: 30%">
                <p
                  style="text-align: center"
                  :style="{
                    fontSize: `${typoStore.h1.fontSize}px`,
                    fontWeight: `${typoStore.h1.fontWeight}`
                  }"
                >
                  h1
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="display: flex; width: 100%">
              <div style="display: flex; flex-direction: column; width: 70%; padding: 0px 30px">
                <div style="margin: 10px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      font-family: Euclid-Bold;
                      align-items: center;
                      margin: 0px 10px;
                    "
                  >
                    <p>Font size</p>
                    <h3 style="color: #aa9bd1">{{ typoStore.h2.fontSize }} px</h3>
                  </div>
                  <v-slider
                    v-model="typoStore.h2.fontSize"
                    step="1"
                    :color="colorStore.primaryColor"
                    :min="typoStore.h3.fontSize"
                    :max="typoStore.h1.fontSize"
                    hide-details
                    style="width: 100%"
                  />
                </div>
                <div style="margin: 10px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      font-family: Euclid-Bold;
                      align-items: center;
                      margin: 0px 10px;
                    "
                  >
                    <p>Font weight</p>
                    <h3 style="color: #aa9bd1">{{ typoStore.h2.fontWeight }}</h3>
                  </div>
                  <v-slider
                    v-model="typoStore.h2.fontWeight"
                    step="100"
                    :color="colorStore.primaryColor"
                    :max="900"
                    :min="100"
                    hide-details
                    style="width: 100%"
                  />
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; width: 30%">
                <p
                  style="text-align: center"
                  :style="{
                    fontSize: `${typoStore.h2.fontSize}px`,
                    fontWeight: `${typoStore.h2.fontWeight}`
                  }"
                >
                  h2
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="display: flex; width: 100%">
              <div style="display: flex; flex-direction: column; width: 70%; padding: 0px 30px">
                <div style="margin: 10px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      font-family: Euclid-Bold;
                      align-items: center;
                      margin: 0px 10px;
                    "
                  >
                    <p>Font size</p>
                    <h3 style="color: #aa9bd1">{{ typoStore.h3.fontSize }} px</h3>
                  </div>
                  <v-slider
                    v-model="typoStore.h3.fontSize"
                    step="1"
                    :color="colorStore.primaryColor"
                    :min="typoStore.h4.fontSize"
                    :max="typoStore.h2.fontSize"
                    hide-details
                    style="width: 100%"
                  />
                </div>
                <div style="margin: 10px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      font-family: Euclid-Bold;
                      align-items: center;
                      margin: 0px 10px;
                    "
                  >
                    <p>Font weight</p>
                    <h3 style="color: #aa9bd1">{{ typoStore.h3.fontWeight }}</h3>
                  </div>
                  <v-slider
                    v-model="typoStore.h3.fontWeight"
                    step="100"
                    :color="colorStore.primaryColor"
                    :max="900"
                    :min="100"
                    hide-details
                    style="width: 100%"
                  />
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; width: 30%">
                <p
                  style="text-align: center"
                  :style="{
                    fontSize: `${typoStore.h3.fontSize}px`,
                    fontWeight: `${typoStore.h3.fontWeight}`
                  }"
                >
                  h3
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="display: flex; width: 100%">
              <div style="display: flex; flex-direction: column; width: 70%; padding: 0px 30px">
                <div style="margin: 10px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      font-family: Euclid-Bold;
                      align-items: center;
                      margin: 0px 10px;
                    "
                  >
                    <p>Font size</p>
                    <h3 style="color: #aa9bd1">{{ typoStore.h4.fontSize }} px</h3>
                  </div>
                  <v-slider
                    v-model="typoStore.h4.fontSize"
                    step="1"
                    :color="colorStore.primaryColor"
                    :min="typoStore.h5.fontSize"
                    :max="typoStore.h3.fontSize"
                    hide-details
                    style="width: 100%"
                  />
                </div>
                <div style="margin: 10px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      font-family: Euclid-Bold;
                      align-items: center;
                      margin: 0px 10px;
                    "
                  >
                    <p>Font weight</p>
                    <h3 style="color: #aa9bd1">{{ typoStore.h4.fontWeight }}</h3>
                  </div>
                  <v-slider
                    v-model="typoStore.h4.fontWeight"
                    step="100"
                    :color="colorStore.primaryColor"
                    :max="900"
                    :min="100"
                    hide-details
                    style="width: 100%"
                  />
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; width: 30%">
                <p
                  style="text-align: center"
                  :style="{
                    fontSize: `${typoStore.h4.fontSize}px`,
                    fontWeight: `${typoStore.h4.fontWeight}`
                  }"
                >
                  h4
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="display: flex; width: 100%">
              <div style="display: flex; flex-direction: column; width: 70%; padding: 0px 30px">
                <div style="margin: 10px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      font-family: Euclid-Bold;
                      align-items: center;
                      margin: 0px 10px;
                    "
                  >
                    <p>Font size</p>
                    <h3 style="color: #aa9bd1">{{ typoStore.h5.fontSize }} px</h3>
                  </div>
                  <v-slider
                    v-model="typoStore.h5.fontSize"
                    step="1"
                    :color="colorStore.primaryColor"
                    :min="typoStore.h6.fontSize"
                    :max="typoStore.h4.fontSize"
                    hide-details
                    style="width: 100%"
                  />
                </div>
                <div style="margin: 10px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      font-family: Euclid-Bold;
                      align-items: center;
                      margin: 0px 10px;
                    "
                  >
                    <p>Font weight</p>
                    <h3 style="color: #aa9bd1">{{ typoStore.h5.fontWeight }}</h3>
                  </div>
                  <v-slider
                    v-model="typoStore.h5.fontWeight"
                    step="100"
                    :color="colorStore.primaryColor"
                    :max="900"
                    :min="100"
                    hide-details
                    style="width: 100%"
                  />
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; width: 30%">
                <p
                  style="text-align: center"
                  :style="{
                    fontSize: `${typoStore.h5.fontSize}px`,
                    fontWeight: `${typoStore.h5.fontWeight}`
                  }"
                >
                  h5
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="display: flex; width: 100%">
              <div style="display: flex; flex-direction: column; width: 70%; padding: 0px 30px">
                <div style="margin: 10px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      font-family: Euclid-Bold;
                      align-items: center;
                      margin: 0px 10px;
                    "
                  >
                    <p>Font size</p>
                    <h3 style="color: #aa9bd1">{{ typoStore.h6.fontSize }} px</h3>
                  </div>
                  <v-slider
                    v-model="typoStore.h6.fontSize"
                    step="1"
                    :color="colorStore.primaryColor"
                    :min="16"
                    :max="typoStore.h5.fontSize"
                    hide-details
                    style="width: 100%"
                  />
                </div>
                <div style="margin: 10px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      font-family: Euclid-Bold;
                      align-items: center;
                      margin: 0px 10px;
                    "
                  >
                    <p>Font weight</p>
                    <h3 style="color: #aa9bd1">{{ typoStore.h6.fontWeight }}</h3>
                  </div>
                  <v-slider
                    v-model="typoStore.h6.fontWeight"
                    step="100"
                    :color="colorStore.primaryColor"
                    :max="900"
                    :min="100"
                    hide-details
                    style="width: 100%"
                  />
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; width: 30%">
                <p
                  style="text-align: center"
                  :style="{
                    fontSize: `${typoStore.h6.fontSize}px`,
                    fontWeight: `${typoStore.h6.fontWeight}`
                  }"
                >
                  h6
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </card-container>
    </div>

    <!-- footer -->
    <div style="width: 100%; display: flex; justify-content: space-between; padding: 0px 30px">
      <v-btn variant="text" size="x-large" color="white">
        <i class="fa-solid fa-arrow-left"></i>
        <span style="margin-left: 8px">Accent color</span>
      </v-btn>
      <v-btn variant="text" size="x-large" color="white">
        <span style="margin-right: 8px">Layout</span>
        <i class="fa-solid fa-arrow-right"></i>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useColorStore } from '@/stores/colorStore'
import { useTypoStore } from '@/stores/typoStore'

import CardContainer from '@/components/cardContainer.vue'

export default {
  name: 'TypographyPage',
  components: {
    CardContainer
  },
  data() {
    return {
      isMobile: false,
      ff: null
    }
  },
  beforeUnmount() {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },
  computed: {
    ...mapStores(useTypoStore, useColorStore)
  },

  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 900
    }
  }

  /* setup() {
    const typoStore = useTypoStore()
    const colorStore = useColorStore()

    const primaryColor = colorStore.primaryColor

    const h1 = typoStore.h1
    const h2 = typoStore.h2
    const h3 = typoStore.h3
    const h4 = typoStore.h4
    const h5 = typoStore.h5
    const h6 = typoStore.h6
    const fontFamily = typoStore.fontFamily
    console.log('🚀 ~ setup ~ fontFamily:', fontFamily)

    return {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      fontFamily,
      primaryColor
    }
  } */
}
</script>

<style scoped></style>
