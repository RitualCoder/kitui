<template>
  <v-container fluid style="background-color: transparent">
    <v-row>
      <v-col cols="12">
        <h1>
          First of all select an
          <span :style="{ color: accentColor }"> accent </span>
          color
        </h1>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h2>Choose your own color</h2>
      </v-col>
      <v-col cols="12">
        <div class="color-picker-container">
          <v-btn
            color="default"
            size="x-large"
            @click="showColorPicker = !showColorPicker"
            elevation="0"
            v-click-outside="closeColorPicker"
          >
            <div :style="{ backgroundColor: accentColor }" class="color-circle"></div>
            {{ accentColor }}
          </v-btn>
          <v-color-picker
            hide-inputs
            v-if="showColorPicker"
            v-model="accentColor"
            flat
            @change="saveColor"
            class="color-picker"
          ></v-color-picker>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" style="margin-bottom: 2rem">
      <v-col cols="12">
        <h3>Bright, energizing colors</h3>
      </v-col>
      <v-col cols="auto" v-for="color in brightColors" :key="color.name">
        <div
          class="color-option"
          :style="selectedColor === color.value ? { borderColor: color.value } : {}"
        >
          <v-btn size="x-large" color="default" @click="selectColor(color.value)" elevation="0">
            <div :style="{ backgroundColor: color.value }" class="color-circle"></div>
            {{ color.name }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" style="margin-bottom: 2rem">
      <v-col cols="12">
        <h3>Neutral, soothing colors</h3>
      </v-col>
      <v-col cols="auto" v-for="color in neutralColors" :key="color.name">
        <div
          class="color-option"
          :style="selectedColor === color.value ? { borderColor: color.value } : {}"
        >
          <v-btn color="default" size="x-large" @click="selectColor(color.value)" elevation="0">
            <div :style="{ backgroundColor: color.value }" class="color-circle"></div>
            {{ color.name }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" style="margin-bottom: 2rem">
      <v-col cols="12">
        <h3>Toned, modern colors</h3>
      </v-col>
      <v-col cols="auto" v-for="color in modernColors" :key="color.name">
        <div
          class="color-option"
          :style="selectedColor === color.value ? { borderColor: color.value } : {}"
        >
          <v-btn color="default" size="x-large" @click="selectColor(color.value)" elevation="0">
            <div :style="{ backgroundColor: color.value }" class="color-circle"></div>
            {{ color.name }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h3>Soft, pastel colors</h3>
      </v-col>
      <v-col cols="auto" v-for="color in pastelColors" :key="color.name">
        <div
          class="color-option"
          :style="selectedColor === color.value ? { borderColor: color.value } : {}"
        >
          <v-btn color="default" size="x-large" @click="selectColor(color.value)" elevation="0">
            <div :style="{ backgroundColor: color.value }" class="color-circle"></div>
            {{ color.name }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <div
      style="
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0px 30px;
        margin: 80px 0px 0px 0px;
      "
    >
      <router-link to="/">
        <v-btn color="white" variant="text" size="x-large">
          <i class="fa-solid fa-arrow-left"></i>
          <span style="margin-left: 8px">Home</span>
        </v-btn>
      </router-link>

      <router-link to="/typography">
        <v-btn color="white" variant="text" size="x-large">
          <span style="margin-right: 8px">Typography</span>
          <i class="fa-solid fa-arrow-right"></i>
        </v-btn>
      </router-link>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showColorPicker: false,
      accentColor: localStorage.getItem('accentColor') || '#5438A4',
      selectedColor: localStorage.getItem('accentColor') || 'null',
      brightColors: [
        { name: 'Ultramarine Blue', value: '#007BFF' },
        { name: 'Purple', value: '#8000FF' },
        { name: 'Orange', value: '#FFA500' },
        { name: 'Red', value: '#FF0000' },
        { name: 'Lime Green', value: '#00DC00' }
      ],
      neutralColors: [
        { name: 'Sky Blue', value: '#539EB8' },
        { name: 'Ultra Violet', value: '#6E5B98' },
        { name: 'Peach Orange', value: '#F08040' },
        { name: 'Rust', value: '#E63946' },
        { name: 'Mint Green', value: '#98FF98' }
      ],
      modernColors: [
        { name: 'Scuba Blue', value: '#00A2B4' },
        { name: 'Limelight', value: '#EADA24' },
        { name: 'Living Coral', value: '#FF6347' },
        { name: 'Aurora Red', value: '#B83A4B' },
        { name: 'Green Flash', value: '#76B041' }
      ],
      pastelColors: [
        { name: 'Serenity', value: '#91A8D0' },
        { name: 'Rose Quartz', value: '#F7CAC9' },
        { name: 'Pale Dogwood', value: '#EDD1D8' },
        { name: 'Iced Coffee', value: '#B18F6A' },
        { name: 'Peach Cream', value: '#FFEFD5' }
      ]
    }
  },
  methods: {
    selectColor(color) {
      this.accentColor = color
      this.selectedColor = color
      this.saveColor()
    },
    closeColorPicker() {
      this.showColorPicker = false
    },
    saveColor() {
      localStorage.setItem('accentColor', this.accentColor)
    }
  }
}
</script>

<style scoped>
.v-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.v-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.color-option {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid transparent;
  border-radius: 12px;
}

.color-circle {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  margin-right: 10px;
}

.color-picker-container {
  position: relative;
  margin-bottom: 50px;
}

.color-picker {
  position: absolute;
  right: 80%;
  top: 50%;
  transform: translateY(-50%);
}

.color-category {
  margin-top: 2rem; /* Add spacing between categories */
}
</style>
