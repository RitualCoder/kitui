<template>
    <v-app>
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <h1>First of all select an accent color</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-color-picker v-model="accentColor" flat></v-color-picker>
              <p>Choose your own color: {{ accentColor }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h2>Bright, energizing colors</h2>
            </v-col>
            <v-col cols="auto" v-for="color in brightColors" :key="color.name">
              <v-btn :color="color.value" @click="accentColor = color.value">{{ color.name }}</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h2>Neutral, soothing colors</h2>
            </v-col>
            <v-col cols="auto" v-for="color in neutralColors" :key="color.name">
              <v-btn :color="color.value" @click="accentColor = color.value">{{ color.name }}</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h2>Toned, modern colors</h2>
            </v-col>
            <v-col cols="auto" v-for="color in modernColors" :key="color.name">
              <v-btn :color="color.value" @click="accentColor = color.value">{{ color.name }}</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h2>Soft, pastel colors</h2>
            </v-col>
            <v-col cols="auto" v-for="color in pastelColors" :key="color.name">
              <v-btn :color="color.value" @click="accentColor = color.value">{{ color.name }}</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        accentColor: '#5438A4',
        brightColors: [
          { name: 'Ultramarine Blue', value: '#3F51B5' },
          { name: 'Purple', value: '#9C27B0' },
          { name: 'Orange', value: '#FF9800' },
          { name: 'Red', value: '#F44336' },
          { name: 'Lime Green', value: '#CDDC39' },
        ],
        neutralColors: [
          { name: 'Sky Blue', value: '#03A9F4' },
          { name: 'Ultra Violet', value: '#7C4DFF' },
          { name: 'Peach Orange', value: '#FF9100' },
          { name: 'Rust', value: '#D84315' },
          { name: 'Mint Green', value: '#4CAF50' },
        ],
        modernColors: [
          { name: 'Scuba Blue', value: '#00ACC1' },
          { name: 'Limelight', value: '#EEFF41' },
          { name: 'Living Coral', value: '#FF6F61' },
          { name: 'Aurora Red', value: '#FF5252' },
          { name: 'Green Flash', value: '#8BC34A' },
        ],
        pastelColors: [
          { name: 'Serenity', value: '#92A8D1' },
          { name: 'Rose Quartz', value: '#F48FB1' },
          { name: 'Pale Dogwood', value: '#EF9A9A' },
          { name: 'Iced Coffee', value: '#BCB6A6' },
          { name: 'Peach Cream', value: '#FFE5B4' },
        ],
      };
    },
  };
  </script>