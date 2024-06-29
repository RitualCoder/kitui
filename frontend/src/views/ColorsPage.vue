<template>
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex">
    <div style="width: 50%; background-color: #141115; height: 100%; padding: 100px 0px">
      <h1 v-if="$vuetify.display.smAndUp" style="text-align: right; color: #f2f5f9">
        Let's customi
      </h1>
      <h2 v-else style="text-align: right; color: #f2f5f9">Let's customi</h2>
      <h2 style="color: #f2f5f9; text-align: center; margin-top: 40px">Dark</h2>
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
export default {
  name: 'ColorsPage',
  data() {
    return {}
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {}
}
</script>

<style scoped></style>
