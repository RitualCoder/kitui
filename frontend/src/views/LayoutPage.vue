<template>
  <v-container fluid class="pa-0">
    <v-card class="mx-auto" max-width="1400" flat color="transparent">
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

      <card-container style="margin-top: 50px">
        <h2>Container</h2>
        <v-row style="width: 100%">
          <v-col cols="12" md="4" class="order-2 order-md-1">
            <div v-for="(value, key) in layoutStore.padding" :key="key" class="mb-6">
              <div class="d-flex justify-space-between align-center mb-2">
                <span class="text-body-1"
                  >Padding {{ key.charAt(0).toUpperCase() + key.slice(1) }}</span
                >
                <span class="text-h6" style="color: #aa9bd1"
                  >{{ layoutStore.padding[key] }} px</span
                >
              </div>
              <v-slider
                v-model="layoutStore.padding[key]"
                :color="colorStore.primaryColor"
                step="1"
                :min="0"
                :max="100"
                hide-details
              />
            </div>

            <p class="px-0 text-body-1">Justify content</p>
            <v-row class="mb-4">
              <v-col cols="4">
                <v-checkbox
                  v-model="layoutStore.justifyContent"
                  label="Start"
                  value="start"
                  :color="colorStore.primaryColor"
                ></v-checkbox>
              </v-col>
              <v-col cols="4">
                <v-checkbox
                  v-model="layoutStore.justifyContent"
                  label="Center"
                  value="center"
                  :color="colorStore.primaryColor"
                ></v-checkbox>
              </v-col>
              <v-col cols="4">
                <v-checkbox
                  v-model="layoutStore.justifyContent"
                  label="End"
                  value="end"
                  :color="colorStore.primaryColor"
                ></v-checkbox>
              </v-col>
            </v-row>

            <p class="px-0 text-body-1">Align items</p>
            <v-row class="mb-4">
              <v-col cols="4">
                <v-checkbox
                  v-model="layoutStore.alignItems"
                  label="Start"
                  value="start"
                  :color="colorStore.primaryColor"
                />
              </v-col>
              <v-col cols="4">
                <v-checkbox
                  v-model="layoutStore.alignItems"
                  label="Center"
                  value="center"
                  :color="colorStore.primaryColor"
                />
              </v-col>
              <v-col cols="4">
                <v-checkbox
                  v-model="layoutStore.alignItems"
                  label="End"
                  value="end"
                  :color="colorStore.primaryColor"
                />
              </v-col>
            </v-row>

            <p class="px-0 text-body-1">Flex direction</p>
            <v-row>
              <v-col cols="6">
                <v-checkbox
                  v-model="layoutStore.flexDirection"
                  label="Row"
                  value="row"
                  :color="colorStore.primaryColor"
                />
              </v-col>
              <v-col cols="6">
                <v-checkbox
                  v-model="layoutStore.flexDirection"
                  label="Column"
                  value="column"
                  :color="colorStore.primaryColor"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            md="8"
            class="order-1 order-md-2"
            style="display: flex; align-items: center; width: 100%; height: 100%"
          >
            <div
              :style="{
                height: '500px',
                width: '100%',
                display: 'flex',
                border: '1px solid rgb(175, 171, 179, 100%)',
                borderRadius: '8px',
                padding: `${layoutStore.padding.top}px ${layoutStore.padding.right}px ${layoutStore.padding.bottom}px ${layoutStore.padding.left}px`,
                justifyContent: layoutStore.justifyContent,
                alignItems: layoutStore.alignItems,
                flexDirection: layoutStore.flexDirection
              }"
            >
              <div
                class="preview-item"
                :style="{ backgroundColor: $vuetify.theme.current.dark ? '#4E4856' : '#ECEFF1' }"
                v-for="n in 3"
                :key="n"
              ></div>
            </div>
          </v-col>
        </v-row>
      </card-container>
      <card-container style="margin-top: 50px">
        <h2>Flex grid</h2>
        <v-row style="width: 100%">
          <v-col
            cols="12"
            md="4"
            style="padding: 30px; display: flex; flex-direction: column; gap: 30px; width: 100%"
          >
            <div>
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  font-family: Euclid-Bold;
                  align-items: center;
                "
              >
                <p>Columns</p>
                <h3 style="color: #aa9bd1">{{ layoutStore.grid.columns }}</h3>
              </div>
              <v-slider
                v-model="layoutStore.grid.columns"
                :color="colorStore.primaryColor"
                step="1"
                :min="1"
                :max="12"
                hide-details
              />
            </div>

            <div>
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  font-family: Euclid-Bold;
                  align-items: center;
                "
              >
                <p>Gutter</p>
                <h3 style="color: #aa9bd1">{{ layoutStore.grid.gutter }}px</h3>
              </div>
              <v-slider
                v-model="layoutStore.grid.gutter"
                :color="colorStore.primaryColor"
                step="1"
                :min="0"
                :max="32"
                hide-details
              />
            </div>
          </v-col>
          <v-col
            v-if="!$vuetify.display.smAndDown"
            cols="12"
            md="8"
            style="display: flex; align-items: center; justify-content: center; padding: 40px"
          >
            <div
              :style="{
                gap: `${layoutStore.grid.gutter}px`,
                display: 'flex',
                width: '100%',
                height: 'auto',
                border: '1px solid gray',
                borderRadius: '8px',
                padding: '10px',
                alignItems: 'center',
                justifyContent: 'center'
              }"
            >
              <div
                v-for="n in layoutStore.grid.columns"
                :key="n"
                style="height: 100px; flex-basis: 0; flex-grow: 1"
                :style="{ backgroundColor: $vuetify.theme.current.dark ? '#4E4856' : '#ECEFF1' }"
              ></div>
            </div>
          </v-col>
        </v-row>
      </card-container>
      <card-container style="margin-top: 50px">
        <h2>Breakpoints</h2>
        <v-row style="width: 100%">
          <v-col
            cols="12"
            md="4"
            sm="12"
            style="
              margin: 30px 0px;
              display: flex;
              flex-direction: column;
              gap: 15px;
              align-items: center;
            "
            :style="{
              padding: $vuetify.display.smAndDown ? '0px' : '0px 50px'
            }"
          >
            <v-icon size="48px" icon="mdi-cellphone" />
            <div style="width: 100%">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  font-family: Euclid-Bold;
                  align-items: center;
                "
              >
                <p>Small</p>
                <h3 style="color: #aa9bd1">{{ layoutStore.breakpoints.sm }}px</h3>
              </div>
              <v-slider
                v-model="layoutStore.breakpoints.sm"
                :color="colorStore.primaryColor"
                step="1"
                :min="350"
                :max="layoutStore.breakpoints.md - 100"
                hide-details
              />
            </div>
          </v-col>
          <v-col
            cols="12"
            md="4"
            sm="12"
            style="
              margin: 30px 0px;
              display: flex;
              flex-direction: column;
              gap: 15px;
              align-items: center;
            "
            :style="{
              padding: $vuetify.display.smAndDown ? '0px' : '0px 50px'
            }"
          >
            <v-icon size="48px" icon="mdi-tablet" />
            <div style="width: 100%">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  font-family: Euclid-Bold;
                  align-items: center;
                "
              >
                <p>Medium</p>
                <h3 style="color: #aa9bd1">{{ layoutStore.breakpoints.md }}px</h3>
              </div>
              <v-slider
                v-model="layoutStore.breakpoints.md"
                :color="colorStore.primaryColor"
                step="1"
                :min="layoutStore.breakpoints.sm + 100"
                :max="layoutStore.breakpoints.lg - 100"
                hide-details
              />
            </div>
          </v-col>
          <v-col
            cols="12"
            md="4"
            sm="12"
            style="
              margin: 30px 0px;
              display: flex;
              flex-direction: column;
              gap: 15px;
              align-items: center;
            "
            :style="{
              padding: $vuetify.display.smAndDown ? '0px' : '0px 50px'
            }"
          >
            <v-icon size="48px" icon="mdi-laptop" />
            <div style="width: 100%">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  font-family: Euclid-Bold;
                  align-items: center;
                "
              >
                <p>Large</p>
                <h3 style="color: #aa9bd1">{{ layoutStore.breakpoints.lg }}px</h3>
              </div>
              <v-slider
                v-model="layoutStore.breakpoints.lg"
                :color="colorStore.primaryColor"
                step="1"
                :min="layoutStore.breakpoints.md + 100"
                :max="1920"
                hide-details
              />
            </div>
          </v-col>
        </v-row>
      </card-container>
    </v-card>
    <!-- footer -->
    <div
      style="width: 100%; display: flex; justify-content: space-between; margin-top: 40px"
      :style="(padding = $vuetify.display.smAndDown ? '0px' : '0 20px')"
    >
      <v-btn
        variant="text"
        :size="!$vuetify.display.smAndDown ? 'x-large' : 'large'"
        :style="{ color: $vuetify.theme.current.dark ? '#ffffff' : '#5438A4' }"
        to="/Typography"
      >
        <i class="fa-solid fa-arrow-left"></i>
        <span style="margin-left: 8px">Typography</span>
      </v-btn>

      <v-btn
        variant="text"
        :size="!$vuetify.display.smAndDown ? 'x-large' : 'large'"
        :style="{ color: $vuetify.theme.current.dark ? '#ffffff' : '#5438A4' }"
        to="/components"
      >
        <span style="margin-right: 8px">Components</span>
        <i class="fa-solid fa-arrow-right"></i>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { useLayoutStore } from '@/stores/layoutStore'
import { useColorStore } from '@/stores/colorStore'
import CardContainer from '@/components/cardContainer.vue'
import { mapStores } from 'pinia'

export default {
  components: {
    CardContainer
  },
  setup() {},
  computed: {
    ...mapStores(useLayoutStore, useColorStore)
  }
}
</script>

<style scoped>
#bordered-container {
  border: 1px solid rgb(175, 171, 179, 100%);
  border-radius: 8px;
}
.preview-container {
  background-color: rgb(47, 43, 51, 100%);
  border-radius: 8px;
}
.preview-item {
  background-color: rgb(78, 72, 86, 100%);
  width: 80%;
  height: 8rem;
  margin: 8px;
  border-radius: 4px;
}
.v-checkbox ::v-deep .v-input--selection-controls__input {
  margin-right: 4px;
}
.v-checkbox ::v-deep .v-label {
  font-size: 16px;
}
.text-h6 {
  font-size: 18px !important;
  font-weight: bold;
}
#container {
  padding: 4rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
}
</style>
