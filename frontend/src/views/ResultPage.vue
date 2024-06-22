<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <!-- Buttons Container -->
          <v-sheet color="grey-darken-4" rounded="lg" class="pa-4 d-flex flex-column align-center">
            <v-container>
              <v-row justify="center" align="center" class="mb-6">
                <v-col cols="12" class="d-flex justify-center mb-4">
                  <v-btn elevation="0" size="x-large">
                    <i class="fa-solid fa-download"></i>
                    <span style="margin-left: 8px">Generate CSS</span>
                  </v-btn>
                </v-col>
                <v-col cols="12" class="d-flex justify-center">
                  <v-btn size="x-large" variant="outlined">
                    <i class="fa-solid fa-terminal"></i>
                    <span style="margin-left: 8px">How to use it</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="6">
          <!-- Other Content Container -->
          <v-sheet color="grey-darken-4" rounded="lg" class="pa-4">
            <v-container>
              <v-row>
                <v-col cols="12" md="6" class="py-2">
                  <v-sheet color="grey-darken-3" rounded="lg" class="pa-4">
                    <div class="d-flex align-center mb-2">
                      <v-icon class="mr-2">mdi-image</v-icon>
                      <span class="text-subtitle-1">Title</span>
                    </div>
                    <div class="text-caption mb-1">Lorem ipsum dolor sit amet</div>
                    <div class="text-caption">Consectetur adipiscing elit</div>
                  </v-sheet>
                </v-col>
                <v-col cols="12" md="6" class="py-2">
                  <v-sheet color="grey-darken-3" rounded="lg" class="pa-4">
                    <v-row>
                      <v-col cols="12" class="d-flex justify-center mb-2">
                        <v-btn block elevation="0" size="x-large">Primary</v-btn>
                      </v-col>
                      <v-col cols="12" class="d-flex justify-center mb-2">
                        <v-btn variant="outlined" block elevation="0" size="x-large">Secondary</v-btn>
                      </v-col>
                      <v-col cols="12" class="d-flex justify-center">
                        <v-btn color="grey-darken-3" block elevation="0" size="x-large" disabled>Disabled</v-btn>
                      </v-col>
                    </v-row>
                  </v-sheet>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="py-2">
                  <v-sheet color="grey-darken-3" rounded="lg" class="pa-4">
                    <v-slider v-model="slider" color="purple" class="mt-4" thumb-color="purple"></v-slider>
                  </v-sheet>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="py-2">
                  <v-sheet color="grey-darken-3" rounded="lg" class="pa-4">
                    <div class="text-subtitle-1">
                      <h1 class="d-inline">h1</h1>
                      <h2 class="d-inline ml-2">h2</h2>
                      <h3 class="d-inline ml-2">h3</h3>
                      <h4 class="d-inline ml-2">h4</h4>
                      <h5 class="d-inline ml-2">h5</h5>
                      <h6 class="d-inline ml-2">h6</h6>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6" class="py-2">
                  <v-sheet color="grey-darken-3" rounded="lg" class="pa-4"></v-sheet>
                </v-col>
                <v-col cols="12" md="6" class="py-2">
                  <v-sheet color="grey-darken-3" rounded="lg" class="pa-4">
                    <v-row>
                      <v-col cols="12" class="mb-2">
                        <v-text-field label="Placeholder" color="green" variant="outlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" class="mb-2">
                        <v-text-field label="Placeholder" color="red" variant="outlined"></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Placeholder" variant="outlined"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    slider: null,
  }),
}
</script>

<style scoped>

</style>
