<template>
  <div
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      min-width: 350px;
    "
  >
    <div style="width: 50%; background-color: #141115; height: 100%; padding: 100px 0px">
      <h1 v-if="$vuetify.display.smAndUp" style="text-align: right; color: #f2f5f9">
        Let's customi
      </h1>
      <h2 v-else style="text-align: right; color: #f2f5f9">Let's customi</h2>
      <h2 style="color: #f2f5f9; text-align: center; margin-top: 40px">Dark</h2>
      <div
        :style="{
          display: 'flex',
          flexDirection: $vuetify.display.smAndUp ? 'row' : 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: $vuetify.display.smAndUp ? '80px' : '40px',
          marginTop: $vuetify.display.smAndUp ? '100px' : '40px'
        }"
      >
        <div>
          <div
            :style="{
              borderRadius: '12px',
              backgroundColor: colorStore.darkVariant1,
              width: $vuetify.display.smAndUp ? '120px' : '100px',
              height: $vuetify.display.smAndUp ? '120px' : '100px'
            }"
          ></div>
          <h2
            v-if="$vuetify.display.smAndUp"
            style="text-align: center; margin-top: 10px; color: #f2f5f9"
          >
            {{ colorStore.darkVariant1.toUpperCase() }}
          </h2>
          <h4 v-else style="text-align: center; margin-top: 10px; color: #f2f5f9">
            {{ colorStore.darkVariant1.toUpperCase() }}
          </h4>
        </div>

        <div>
          <div
            :style="{
              borderRadius: '12px',
              backgroundColor: colorStore.darkVariant2,
              width: $vuetify.display.smAndUp ? '120px' : '100px',
              height: $vuetify.display.smAndUp ? '120px' : '100px'
            }"
          ></div>
          <h2
            v-if="$vuetify.display.smAndUp"
            style="text-align: center; margin-top: 10px; color: #f2f5f9"
          >
            {{ colorStore.darkVariant2.toUpperCase() }}
          </h2>
          <h4 v-else style="text-align: center; margin-top: 10px; color: #f2f5f9">
            {{ colorStore.darkVariant2.toUpperCase() }}
          </h4>
        </div>
      </div>
      <v-btn
        variant="text"
        :size="$vuetify.display.smAndUp ? 'x-large' : 'large'"
        to="/accent-colors"
        style="color: white; position: absolute; bottom: 0; left: 0; margin: 20px"
        :style="{
          marginLeft: $vuetify.display.smAndUp ? '70px' : '20px'
        }"
      >
        <i class="fa-solid fa-arrow-left" style="color: #f2f5f9"></i>
        <span style="margin-left: 8px; color: #f2f5f9">Accent colors</span>
      </v-btn>
    </div>
    <div style="width: 50%; background-color: #f2f5f9; height: 100%; padding: 100px 0px">
      <h1 v-if="$vuetify.display.smAndUp" style="color: #141115">ze your colors</h1>
      <h2 v-else style="color: #141115">ze your colors</h2>
      <h2 style="color: #141115; text-align: center; margin-top: 40px">Light</h2>
      <div
        :style="{
          display: 'flex',
          flexDirection: $vuetify.display.smAndUp ? 'row' : 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: $vuetify.display.smAndUp ? '80px' : '40px',
          marginTop: $vuetify.display.smAndUp ? '100px' : '40px'
        }"
      >
        <div>
          <div
            :style="{
              borderRadius: '12px',
              backgroundColor: colorStore.lightVariant1,
              width: $vuetify.display.smAndUp ? '120px' : '100px',
              height: $vuetify.display.smAndUp ? '120px' : '100px'
            }"
          ></div>
          <h2 style="text-align: center; margin-top: 10px; color: #141115">
            {{ colorStore.lightVariant1.toUpperCase() }}
          </h2>
        </div>

        <div>
          <div
            :style="{
              borderRadius: '12px',
              backgroundColor: colorStore.lightVariant2,
              width: $vuetify.display.smAndUp ? '120px' : '100px',
              height: $vuetify.display.smAndUp ? '120px' : '100px'
            }"
          ></div>
          <h2 style="text-align: center; margin-top: 10px; color: #141115">
            {{ colorStore.lightVariant2.toUpperCase() }}
          </h2>
        </div>
      </div>
      <v-btn
        variant="text"
        :size="$vuetify.display.smAndUp ? 'x-large' : 'large'"
        to="/typography"
        style="color: black; position: absolute; bottom: 0; right: 0; margin: 20px"
        :style="{
          marginRight: $vuetify.display.smAndUp ? '70px' : '20px'
        }"
      >
        <span style="margin-right: 8px">Typography</span>
        <i class="fa-solid fa-arrow-right"></i>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { generateColorVariants } from '@/lib/functions'
import { useColorStore } from '@/stores/colorStore'

export default {
  name: 'ColorsPage',
  data() {
    return {}
  },
  computed: {
    ...mapStores(useColorStore)
  },
  mounted() {
    window.scrollTo(0, 0)
    const variants = generateColorVariants(this.colorStore.primary)
    this.colorStore.dark = variants.dark
    this.colorStore.light = variants.light
    this.colorStore.lightVariant1 = variants.lightVariant1
    this.colorStore.lightVariant2 = variants.lightVariant2
    this.colorStore.darkVariant1 = variants.darkVariant1
    this.colorStore.darkVariant2 = variants.darkVariant2
  },
  methods: {}
}
</script>

<style scoped></style>
