<template>
  <v-container fluid class="pa-0">
    <v-card class="mx-auto" max-width="1200" flat color="transparent">
      <v-card-title class="text-h4 font-weight-bold">
        Let's customize your <span class="text-purple">layout</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <div v-for="(value, key) in layout.padding" :key="key" class="mb-6">
              <div class="d-flex justify-space-between align-center mb-2">
                <span class="text-body-1">Padding {{ key.charAt(0).toUpperCase() + key.slice(1) }}</span>
                <span class="text-h6 purple--text">{{ layout.padding[key] }} px</span>
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
            <v-btn-toggle v-model="layout.justifyContent" mandatory class="toggle-buttons mb-4">
              <v-btn value="start">Start</v-btn>
              <v-btn value="center">Center</v-btn>
              <v-btn value="end">End</v-btn>
            </v-btn-toggle>

            <v-subheader class="px-0 text-body-1">Align items</v-subheader>
            <v-btn-toggle v-model="layout.alignItems" mandatory class="toggle-buttons mb-4">
              <v-btn value="start">Start</v-btn>
              <v-btn value="center">Center</v-btn>
              <v-btn value="end">End</v-btn>
            </v-btn-toggle>

            <v-subheader class="px-0 text-body-1">Flex direction</v-subheader>
            <v-btn-toggle v-model="layout.flexDirection" mandatory class="toggle-buttons">
              <v-btn value="row">Row</v-btn>
              <v-btn value="column">Column</v-btn>
            </v-btn-toggle>
          </v-col>
          <v-col cols="12" md="8">
            <v-card outlined class="preview-container" :style="previewStyle">
              <div class="preview-item" v-for="n in 3" :key="n"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useLayoutStore } from '@/stores/layoutStore';
import { useColorStore } from '@/stores/colorStore';

const layoutStore = useLayoutStore();
const colorStore = useColorStore();
const layout = layoutStore.$state;

const previewStyle = computed(() => ({
  padding: `${layout.padding.top}px ${layout.padding.right}px ${layout.padding.bottom}px ${layout.padding.left}px`,
  display: 'flex',
  justifyContent: layout.justifyContent,
  alignItems: layout.alignItems,
  flexDirection: layout.flexDirection,
  height: '400px',
}));
</script>

<style scoped>
.preview-container {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}
.preview-item {
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 80px;
  margin: 8px 0;
  border-radius: 4px;
}
.toggle-buttons .v-btn {
  border-radius: 4px;
  min-width: 100px;
}
.text-h6 {
  font-size: 18px !important;
  font-weight: normal;
}
</style>
