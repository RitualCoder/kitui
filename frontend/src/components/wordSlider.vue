<template>
  <div class="word-slider">
    <transition-group
      name="slide"
      tag="div"
      :style="{
        transform: `translateY(-${currentIndex * wordHeight}px)`,
        transition: 'transform 0.5s'
      }"
    >
      <div v-for="(word, index) in words" :key="index">
        <p>
          {{ word }}
        </p>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      required: true
    },
    interval: {
      type: Number,
      default: 2000 // Intervalle de temps par défaut en millisecondes
    }
  },
  data() {
    return {
      currentIndex: 0,
      wordHeight: 30
    }
  },
  mounted() {
    this.startSlider()
  },
  methods: {
    startSlider() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % (this.words.length + 1)
      }, this.interval)
    },
    stopSlider() {
      clearInterval(this.intervalId)
    }
  },
  watch: {
    currentIndex(newIndex) {
      if (newIndex === this.words.length) {
        this.currentIndex = 0
      }
    }
  },
  beforeUnmount() {
    this.stopSlider()
  }
}
</script>

<style scoped>
.word-slider {
  display: flex;
  height: 30px;
  overflow: hidden;
  color: white;
  font-size: 24px;
  font-family: Euclid-Regular;
  justify-content: flex-start;
}

.word-slider p {
  line-height: 30px;
  text-align: start;
}

.slide-enter-active .word,
.slide-leave-active .word {
  transition: transform 0.5s;
}
</style>
