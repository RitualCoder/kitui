<template>
  <!-- Version mobile -->
  <div v-if="isMobile">
    <h2 style="text-align: center; margin-bottom: 40px">
      Let's customize your <span :style="{ color: colorStore.primary }">components</span>
    </h2>
    <card-container style="width: 100%">
      <h2 style="text-align: center; font-family: 'Euclid-regular'">Buttons</h2>
      <div style="display: flex; flex-direction: column; width: 100%; gap: 25px">
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
            gap: 20px;
          "
        >
          <button
            :style="{
              border: componentStore.button.border + 'px solid',
              borderColor: colorStore.primary,
              borderRadius: componentStore.button.borderRadius + 'px',
              padding:
                componentStore.button.padding + 'px ' + componentStore.button.padding * 3 + 'px',
              fontSize: componentStore.button.fontSize + 'px'
            }"
          >
            Primary
          </button>
          <button
            :style="{
              border: componentStore.button.border + 'px solid',
              borderColor: colorStore.primary,
              borderRadius: componentStore.button.borderRadius + 'px',
              padding:
                componentStore.button.padding + 'px ' + componentStore.button.padding * 3 + 'px',
              fontSize: componentStore.button.fontSize + 'px',
              color: colorStore.primary
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
                componentStore.button.padding + 'px ' + componentStore.button.padding * 3 + 'px',
              fontSize: componentStore.button.fontSize + 'px'
            }"
          >
            Disabled
          </button>
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
            <p>Border</p>
            <h3 :style="{ color: colorStore.lightVariant1 }">
              {{ componentStore.button.border }} px
            </h3>
          </div>
          <v-slider
            v-model="componentStore.button.border"
            step="1"
            :color="colorStore.primary"
            :min="0"
            :max="10"
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
            <p>Border radius</p>
            <h3 :style="{ color: colorStore.lightVariant1 }">
              {{ componentStore.button.borderRadius }} px
            </h3>
          </div>
          <v-slider
            v-model="componentStore.button.borderRadius"
            step="1"
            :color="colorStore.primary"
            :min="0"
            :max="50"
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
            <p>Padding</p>
            <h3 :style="{ color: colorStore.lightVariant1 }">
              {{ componentStore.button.padding }} px
            </h3>
          </div>
          <v-slider
            v-model="componentStore.button.padding"
            step="1"
            :color="colorStore.primary"
            :min="0"
            :max="20"
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
            <p>Font size</p>
            <h3 :style="{ color: colorStore.lightVariant1 }">
              {{ componentStore.button.fontSize }} px
            </h3>
          </div>
          <v-slider
            v-model="componentStore.button.fontSize"
            step="1"
            :color="colorStore.primary"
            :min="8"
            :max="30"
            hide-details
          />
        </div>
      </div>
    </card-container>
    <card-container style="margin-top: 80px; width: 100%">
      <h2 style="text-align: center; font-family: 'Euclid-regular'">Text inputs</h2>
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        "
      >
        <input
          type="text"
          :class="['input']"
          placeholder="Placeholder"
          :style="{
            color: colorStore.primary,
            borderRadius: componentStore.input.borderRadius + 'px',
            padding: componentStore.input.padding + 'px',
            borderColor: colorStore.primary
          }"
        />
        <input
          type="text"
          :class="['input', 'input-success']"
          placeholder="Placeholder"
          :style="{
            borderRadius: componentStore.input.borderRadius + 'px',
            padding: componentStore.input.padding + 'px'
          }"
        />
        <input
          type="text"
          :class="['input', 'input-error']"
          placeholder="Placeholder"
          :style="{
            borderRadius: componentStore.input.borderRadius + 'px',
            padding: componentStore.input.padding + 'px'
          }"
        />
      </div>
      <div style="width: 100%">
        <div
          style="
            display: flex;
            justify-content: space-between;
            font-family: Euclid-Bold;
            align-items: center;
          "
        >
          <p>Border radius</p>
          <h3 :style="{ color: colorStore.lightVariant1 }">
            {{ componentStore.input.borderRadius }} px
          </h3>
        </div>
        <v-slider
          v-model="componentStore.input.borderRadius"
          step="1"
          :color="colorStore.primary"
          :min="0"
          :max="50"
          hide-details
        />
      </div>
      <div style="width: 100%">
        <div
          style="
            display: flex;
            justify-content: space-between;
            font-family: Euclid-Bold;
            align-items: center;
          "
        >
          <p>Padding</p>
          <h3 :style="{ color: colorStore.lightVariant1 }">
            {{ componentStore.input.padding }} px
          </h3>
        </div>
        <v-slider
          v-model="componentStore.input.padding"
          step="1"
          :color="colorStore.primary"
          :min="0"
          :max="10"
          hide-details
        />
      </div>
    </card-container>
    <card-container style="margin-top: 80px; width: 100%">
      <h2 style="text-align: center; font-family: 'Euclid-regular'">Cards</h2>
      <div
        :style="{
          padding: componentStore.card.padding + 'px',
          backgroundColor: $vuetify.theme.current.dark ? '#4E4856' : '#F2F5F9',
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
      <div style="width: 100%">
        <div
          style="
            display: flex;
            justify-content: space-between;
            font-family: Euclid-Bold;
            align-items: center;
          "
        >
          <p>Border radius</p>
          <h3 :style="{ color: colorStore.lightVariant1 }">
            {{ componentStore.card.borderRadius }} px
          </h3>
        </div>
        <v-slider
          v-model="componentStore.card.borderRadius"
          step="1"
          :color="colorStore.primary"
          :min="0"
          :max="50"
          hide-details
        />
      </div>
      <div style="width: 100%">
        <div
          style="
            display: flex;
            justify-content: space-between;
            font-family: Euclid-Bold;
            align-items: center;
          "
        >
          <p>Padding</p>
          <h3 :style="{ color: colorStore.lightVariant1 }">{{ componentStore.card.padding }} px</h3>
        </div>
        <v-slider
          v-model="componentStore.card.padding"
          step="1"
          :color="colorStore.primary"
          :min="0"
          :max="50"
          hide-details
        />
      </div>
    </card-container>
    <!-- footer -->
    <div style="width: 100%; display: flex; justify-content: space-between; margin-top: 20px">
      <v-btn
        to="/layout"
        variant="text"
        :style="{ color: $vuetify.theme.current.dark ? '#ffffff' : '#5438A4' }"
      >
        <i class="fa-solid fa-arrow-left"></i>
        <span style="margin-left: 8px">Layout</span>
      </v-btn>

      <v-btn
        to="/results"
        variant="text"
        :style="{ color: $vuetify.theme.current.dark ? '#ffffff' : '#5438A4' }"
      >
        <span style="margin-right: 8px">Result</span>
        <i class="fa-solid fa-arrow-right"></i>
      </v-btn>
    </div>
  </div>

  <!-- DESKTOP -->
  <div v-else style="display: flex; align-items: center; flex-direction: column">
    <h2>Let's customize your <span :style="{ color: colorStore.primary }">components</span></h2>
    <card-container style="margin-top: 80px; width: 100%">
      <h2 style="text-align: center; font-family: 'Euclid-regular'">Buttons</h2>
      <v-row style="width: 100%">
        <v-col cols="8" style="display: flex; flex-wrap: wrap">
          <div style="width: 50%; padding: 50px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                font-family: Euclid-Bold;
                align-items: center;
              "
            >
              <p>Border</p>
              <h3 :style="{ color: colorStore.lightVariant1 }">
                {{ componentStore.button.border }} px
              </h3>
            </div>
            <v-slider
              v-model="componentStore.button.border"
              step="1"
              :color="colorStore.primary"
              :min="0"
              :max="10"
              hide-details
            />
          </div>
          <div style="width: 50%; padding: 50px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                font-family: Euclid-Bold;
                align-items: center;
              "
            >
              <p>Border radius</p>
              <h3 :style="{ color: colorStore.lightVariant1 }">
                {{ componentStore.button.borderRadius }} px
              </h3>
            </div>
            <v-slider
              v-model="componentStore.button.borderRadius"
              step="1"
              :color="colorStore.primary"
              :min="0"
              :max="50"
              hide-details
            />
          </div>
          <div style="width: 50%; padding: 50px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                font-family: Euclid-Bold;
                align-items: center;
              "
            >
              <p>Padding</p>
              <h3 :style="{ color: colorStore.lightVariant1 }">
                {{ componentStore.button.padding }} px
              </h3>
            </div>
            <v-slider
              v-model="componentStore.button.padding"
              step="1"
              :color="colorStore.primary"
              :min="0"
              :max="20"
              hide-details
            />
          </div>
          <div style="width: 50%; padding: 50px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                font-family: Euclid-Bold;
                align-items: center;
              "
            >
              <p>Font size</p>
              <h3 :style="{ color: colorStore.lightVariant1 }">
                {{ componentStore.button.fontSize }} px
              </h3>
            </div>
            <v-slider
              v-model="componentStore.button.fontSize"
              step="1"
              :color="colorStore.primary"
              :min="8"
              :max="30"
              hide-details
            />
          </div>
        </v-col>
        <v-col
          cols="4"
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            gap: 40px;
          "
        >
          <button
            :style="{
              border: componentStore.button.border + 'px solid',
              borderColor: colorStore.primary,
              borderRadius: componentStore.button.borderRadius + 'px',
              padding:
                componentStore.button.padding + 'px ' + componentStore.button.padding * 3 + 'px',
              fontSize: componentStore.button.fontSize + 'px',
              backgroundColor: colorStore.primary
            }"
          >
            Primary
          </button>
          <button
            :style="{
              border: componentStore.button.border + 'px solid',
              borderColor: colorStore.primary,
              borderRadius: componentStore.button.borderRadius + 'px',
              padding:
                componentStore.button.padding + 'px ' + componentStore.button.padding * 3 + 'px',
              fontSize: componentStore.button.fontSize + 'px',
              color: colorStore.primary
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
                componentStore.button.padding + 'px ' + componentStore.button.padding * 3 + 'px',
              fontSize: componentStore.button.fontSize + 'px',
              c
            }"
          >
            Disabled
          </button>
        </v-col>
      </v-row>
    </card-container>
    <card-container style="margin-top: 80px; width: 100%">
      <h2 style="text-align: center; font-family: 'Euclid-regular'">Text inputs</h2>
      <v-row style="width: 100%">
        <v-col cols="8" style="display: flex; align-items: center">
          <div style="width: 50%; padding: 50px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                font-family: Euclid-Bold;
                align-items: center;
              "
            >
              <p>Border radius</p>
              <h3 :style="{ color: colorStore.lightVariant1 }">
                {{ componentStore.input.borderRadius }} px
              </h3>
            </div>
            <v-slider
              v-model="componentStore.input.borderRadius"
              step="1"
              :color="colorStore.primary"
              :min="0"
              :max="50"
              hide-details
            />
          </div>
          <div style="width: 50%; padding: 50px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                font-family: Euclid-Bold;
                align-items: center;
              "
            >
              <p>Padding</p>
              <h3 :style="{ color: colorStore.lightVariant1 }">
                {{ componentStore.input.padding }} px
              </h3>
            </div>
            <v-slider
              v-model="componentStore.input.padding"
              step="1"
              :color="colorStore.primary"
              :min="0"
              :max="10"
              hide-details
            />
          </div>
        </v-col>
        <v-col
          cols="4"
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            gap: 40px;
            height: 250px;
          "
        >
          <input
            type="text"
            :class="['input']"
            placeholder="Placeholder"
            :style="{
              color: colorStore.primary,
              borderRadius: componentStore.input.borderRadius + 'px',
              padding: componentStore.input.padding + 'px',
              borderColor: colorStore.primary
            }"
          />
          <input
            type="text"
            :class="['input', 'input-success']"
            placeholder="Placeholder"
            :style="{
              borderRadius: componentStore.input.borderRadius + 'px',
              padding: componentStore.input.padding + 'px'
            }"
          />
          <input
            type="text"
            :class="['input', 'input-error']"
            placeholder="Placeholder"
            :style="{
              borderRadius: componentStore.input.borderRadius + 'px',
              padding: componentStore.input.padding + 'px'
            }"
          />
        </v-col>
      </v-row>
    </card-container>
    <card-container style="margin-top: 80px; width: 100%">
      <h2 style="text-align: center; font-family: 'Euclid-regular'">Cards</h2>
      <v-row style="width: 100%">
        <v-col cols="8" style="display: flex; align-items: center">
          <div style="width: 50%; padding: 50px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                font-family: Euclid-Bold;
                align-items: center;
              "
            >
              <p>Border radius</p>
              <h3 :style="{ color: colorStore.lightVariant1 }">
                {{ componentStore.card.borderRadius }} px
              </h3>
            </div>
            <v-slider
              v-model="componentStore.card.borderRadius"
              step="1"
              :color="colorStore.primary"
              :min="0"
              :max="50"
              hide-details
            />
          </div>
          <div style="width: 50%; padding: 50px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                font-family: Euclid-Bold;
                align-items: center;
              "
            >
              <p>Padding</p>
              <h3 :style="{ color: colorStore.lightVariant1 }">
                {{ componentStore.card.padding }} px
              </h3>
            </div>
            <v-slider
              v-model="componentStore.card.padding"
              step="1"
              :color="colorStore.primary"
              :min="0"
              :max="50"
              hide-details
            />
          </div>
        </v-col>
        <v-col
          cols="4"
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            gap: 40px;
            height: 250px;
          "
        >
          <div
            :style="{
              padding: componentStore.card.padding + 'px',
              backgroundColor: $vuetify.theme.current.dark ? '#4E4856' : '#F2F5F9',
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
        </v-col>
      </v-row>
    </card-container>
    <!-- footer -->
    <div
      style="
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0px 30px;
        margin-top: 40px;
      "
    >
      <v-btn
        to="/layout"
        variant="text"
        size="x-large"
        :style="{ color: $vuetify.theme.current.dark ? '#ffffff' : '#5438A4' }"
      >
        <i class="fa-solid fa-arrow-left"></i>
        <span style="margin-left: 8px">Layout</span>
      </v-btn>

      <v-btn
        to="/results"
        variant="text"
        size="x-large"
        :style="{ color: $vuetify.theme.current.dark ? '#ffffff' : '#5438A4' }"
      >
        <span style="margin-right: 8px">Result</span>
        <i class="fa-solid fa-arrow-right"></i>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useColorStore } from '@/stores/colorStore'
import { useTypoStore } from '@/stores/typoStore'
import { useComponentStore } from '@/stores/componentStore'
import cardContainer from '@/components/cardContainer.vue'

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
    }
  }
}
</script>

<style scoped>
.button-disabled {
  background-color: #3f3a45;
  color: #afabb3;
  cursor: not-allowed;
}

.input {
  border: 1px solid #5438a4;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

input:focus,
button:focus {
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
</style>
