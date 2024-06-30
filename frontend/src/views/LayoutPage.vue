<template>
  <v-container fluid class="pa-0" >
    <v-card class="mx-auto" max-width="1400"  flat color="transparent">
      
      <div
      style="
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
      "
    >
      <h1>
        Let's customize your
        <span :style="{ color: colorStore.primaryColor }">Layout</span>
      </h1>
    </div>

      <v-card-text class="preview-container" id="container">
        <v-row>
          <v-col cols="12" md="4">
            <div v-for="(value, key) in layout.padding" :key="key" class="mb-6">
              <div class="d-flex justify-space-between align-center mb-2">
                <span class="text-body-1"
                  >Padding {{ key.charAt(0).toUpperCase() + key.slice(1) }}</span
                >
                <span class="text-h6" style="color: #AA9BD1;">{{ layout.padding[key] }} px</span>
              </div>
              <v-slider
                v-model="layout.padding[key]"
                :color="colorStore.primaryColor"
                step="1"
                :min="0"
                :max="100"
                hide-details
              />
            </div>

            <v-subheader class="px-0 text-body-1">Justify content</v-subheader>
            <v-row class="mb-4">
              <v-col cols="4">
                <v-checkbox
                  v-model="layout.justifyContent"
                  label="Start"
                  value="start"
                  :color="colorStore.primaryColor"
                ></v-checkbox>
              </v-col>
              <v-col cols="4">
                <v-checkbox
                  v-model="layout.justifyContent"
                  label="Center"
                  value="center"
                  :color="colorStore.primaryColor"
                ></v-checkbox>
              </v-col>
              <v-col cols="4">
                <v-checkbox
                  v-model="layout.justifyContent"
                  label="End"
                  value="end"
                  :color="colorStore.primaryColor"
                ></v-checkbox>
              </v-col>
            </v-row>

            <v-subheader class="px-0 text-body-1">Align items</v-subheader>
            <v-row class="mb-4">
              <v-col cols="4">
                <v-checkbox
                  v-model="layout.alignItems"
                  label="Start"
                  value="start"
                  :color="colorStore.primaryColor"
                ></v-checkbox>
              </v-col>
              <v-col cols="4">
                <v-checkbox
                  v-model="layout.alignItems"
                  label="Center"
                  value="center"
                  :color="colorStore.primaryColor"
                ></v-checkbox>
              </v-col>
              <v-col cols="4">
                <v-checkbox
                  v-model="layout.alignItems"
                  label="End"
                  value="end"
                  :color="colorStore.primaryColor"
                ></v-checkbox>
              </v-col>
            </v-row>

            <v-subheader class="px-0 text-body-1">Flex direction</v-subheader>
            <v-row>
              <v-col cols="6">
                <v-checkbox
                  v-model="layout.flexDirection"
                  label="Row"
                  value="row"
                  :color="colorStore.primaryColor"
                ></v-checkbox>
              </v-col>
              <v-col cols="6">
                <v-checkbox
                  v-model="layout.flexDirection"
                  label="Column"
                  value="column"
                  :color="colorStore.primaryColor"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="8">
            <v-card outlined class="preview-container" id="bordered-container" :style="previewStyle">
              <div class="preview-item" v-for="n in 3" :key="n"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { computed,watch } from 'vue'
import { useLayoutStore } from '@/stores/layoutStore'
import { useColorStore } from '@/stores/colorStore'

const layoutStore = useLayoutStore()
const colorStore = useColorStore()
const layout = layoutStore.$state

const previewStyle = computed(() => ({
  padding: `${layout.padding.top}px ${layout.padding.right}px ${layout.padding.bottom}px ${layout.padding.left}px`,
  display: 'flex',
  justifyContent: layout.justifyContent,
  alignItems: layout.alignItems,
  flexDirection: layout.flexDirection,
  height: '100%'
}))
// Watchers for logging changes
watch(() => layout.padding, (newVal) => {
  console.log('Padding changed:', newVal)
}, { deep: true })

watch(() => layout.justifyContent, (newVal) => {
  console.log('Justify Content changed:', newVal)
})

watch(() => layout.alignItems, (newVal) => {
  console.log('Align Items changed:', newVal)
})

watch(() => layout.flexDirection, (newVal) => {
  console.log('Flex Direction changed:', newVal)
})

watch(() => colorStore.primaryColor, (newVal) => {
  console.log('Primary Color changed:', newVal)
})
</script>

<style scoped>
#bordered-container {
  border: 1px solid rgb(175, 171, 179,100%);
  border-radius: 8px;
}
.preview-container {
  background-color: rgb(47, 43, 51, 100%);
  border-radius: 8px;
}
.preview-item {
  background-color: rgb(78, 72, 86,100%);
  width: 100%;
  height: 8rem;
  margin: 8px;
  border-radius: 4px;
}
.v-checkbox ::v-deep .v-input--selection-controls__input {
  margin-right: 4px;
}
.v-checkbox ::v-deep .v-label {
  font-size: 10px;
}
.text-h6 {
  font-size: 18px !important;
  font-weight: bold;
}
#container {
  padding: 4rem;
  @media screen and (max-width: 768px){
    padding: 1rem;
  }
}
.v-checkbox ::v-deep .v-input--selection-controls__input .v-icon {
  color: white !important;
}

.v-checkbox ::v-deep .v-input--selection-controls__ripple:before {
  background-color: white !important;
}

.v-checkbox ::v-deep .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before {
  transform: scale(1) !important;
}

.v-checkbox ::v-deep .mdi-checkbox-blank-outline,
.v-checkbox ::v-deep .mdi-checkbox-marked {
  border-radius: 0 !important;
  background-color: transparent !important;
  border: 2px solid white !important;
  border-radius: 10px !important;
}

.v-checkbox ::v-deep .mdi-checkbox-marked {
  background-color: white !important;
}
</style>
