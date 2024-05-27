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
        <span :style="{ color: primaryColor, fontFamily: 'Alex Brush, cursive', fontSize: '54px' }"
          >T</span
        >
        <span :style="{ color: primaryColor }">ypography</span>
      </h1>
    </div>

    <!-- content -->
    <div style="display: flex; flex-direction: column; gap: 50px; margin-bottom: 30px">
      <div
        style="
          background-color: #2f2b33;
          padding: 30px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          justify-content: center;
          align-items: center;
        "
      >
        <h2 style="text-align: center; font-family: 'Euclid-regular'">Font family</h2>
        <v-select
          style="width: 400px"
          label="Select typography"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          variant="outlined"
        />
        <h1 style="text-align: center">The quick brown fox jumps over the lazy dog.</h1>
      </div>
      <div
        style="
          background-color: #2f2b33;
          padding: 30px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          justify-content: center;
          align-items: center;
        "
      >
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
                    <h3 style="color: #aa9bd1">{{ h1.fontSize }} px</h3>
                  </div>
                  <v-slider
                    v-model="h1.fontSize"
                    step="1"
                    :color="primaryColor"
                    :min="h2.fontSize"
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
                    <h3 style="color: #aa9bd1">{{ h1.fontWeight }}</h3>
                  </div>
                  <v-slider
                    v-model="h1.fontWeight"
                    step="100"
                    :color="primaryColor"
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
                  :style="{ fontSize: `${h1.fontSize}px`, fontWeight: `${h1.fontWeight}` }"
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
                    <h3 style="color: #aa9bd1">{{ h2.fontSize }} px</h3>
                  </div>
                  <v-slider
                    v-model="h2.fontSize"
                    step="1"
                    :color="primaryColor"
                    :min="h3.fontSize"
                    :max="h1.fontSize"
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
                    <h3 style="color: #aa9bd1">{{ h2.fontWeight }}</h3>
                  </div>
                  <v-slider
                    v-model="h2.fontWeight"
                    step="100"
                    :color="primaryColor"
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
                  :style="{ fontSize: `${h2.fontSize}px`, fontWeight: `${h2.fontWeight}` }"
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
                    <h3 style="color: #aa9bd1">{{ h3.fontSize }} px</h3>
                  </div>
                  <v-slider
                    v-model="h3.fontSize"
                    step="1"
                    :color="primaryColor"
                    :min="h4.fontSize"
                    :max="h2.fontSize"
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
                    <h3 style="color: #aa9bd1">{{ h3.fontWeight }}</h3>
                  </div>
                  <v-slider
                    v-model="h3.fontWeight"
                    step="100"
                    :color="primaryColor"
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
                  :style="{ fontSize: `${h3.fontSize}px`, fontWeight: `${h3.fontWeight}` }"
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
                    <h3 style="color: #aa9bd1">{{ h4.fontSize }} px</h3>
                  </div>
                  <v-slider
                    v-model="h4.fontSize"
                    step="1"
                    :color="primaryColor"
                    :min="h5.fontSize"
                    :max="h3.fontSize"
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
                    <h3 style="color: #aa9bd1">{{ h4.fontWeight }}</h3>
                  </div>
                  <v-slider
                    v-model="h4.fontWeight"
                    step="100"
                    :color="primaryColor"
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
                  :style="{ fontSize: `${h4.fontSize}px`, fontWeight: `${h4.fontWeight}` }"
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
                    <h3 style="color: #aa9bd1">{{ h5.fontSize }} px</h3>
                  </div>
                  <v-slider
                    v-model="h5.fontSize"
                    step="1"
                    :color="primaryColor"
                    :min="h6.fontSize"
                    :max="h4.fontSize"
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
                    <h3 style="color: #aa9bd1">{{ h5.fontWeight }}</h3>
                  </div>
                  <v-slider
                    v-model="h5.fontWeight"
                    step="100"
                    :color="primaryColor"
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
                  :style="{ fontSize: `${h5.fontSize}px`, fontWeight: `${h5.fontWeight}` }"
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
                    <h3 style="color: #aa9bd1">{{ h6.fontSize }} px</h3>
                  </div>
                  <v-slider
                    v-model="h6.fontSize"
                    step="1"
                    :color="primaryColor"
                    :min="16"
                    :max="h5.fontSize"
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
                    <h3 style="color: #aa9bd1">{{ h6.fontWeight }}</h3>
                  </div>
                  <v-slider
                    v-model="h6.fontWeight"
                    step="100"
                    :color="primaryColor"
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
                  :style="{ fontSize: `${h6.fontSize}px`, fontWeight: `${h6.fontWeight}` }"
                >
                  h6
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- footer -->
    <div style="width: 100%; display: flex; justify-content: space-between; padding: 0px 30px">
      <app-button variant="text" size="x-large">
        <i class="fa-solid fa-arrow-left"></i>
        <span style="margin-left: 8px">Accent color</span>
      </app-button>
      <app-button variant="text" size="x-large">
        <span style="margin-right: 8px">Layout</span>
        <i class="fa-solid fa-arrow-right"></i>
      </app-button>
    </div>
  </div>
</template>

<script>
import { useColorStore } from '@/stores/colorStore'
import AppButton from '@/components/buttons/AppButton.vue'

import { useTypoStore } from '@/stores/typoStore'

export default {
  name: 'TypographyPage',
  components: {
    AppButton,
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

  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 900
    }
  },
  setup() {
    const typoStore = useTypoStore()
    const colorStore = useColorStore()

    const primaryColor = colorStore.primaryColor

    const h1 = typoStore.h1
    const h2 = typoStore.h2
    const h3 = typoStore.h3
    const h4 = typoStore.h4
    const h5 = typoStore.h5
    const h6 = typoStore.h6

    const updateFontSize = (size, value) => {
      typoStore.changeFontSize(size, value)
    }
    const updateFontWeight = (size, value) => {
      typoStore.changeFontWeight(size, value)
    }

    return {
      updateFontSize,
      updateFontWeight,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      primaryColor
    }
  }
}
</script>

<style scoped></style>
