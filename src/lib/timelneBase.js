import duration from './duration'

export default {
  props: {
    fragmentIn: {
      type: Number,
      required: true
    },
    fragmentOut: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  watch: {
    fragmentIn () {
      this.fgIn = this.fragmentIn
      this.timeUpdated(true)
    },
    fragmentOut () {
      this.fgOut = this.fragmentOut
      this.timeUpdated(true)
    }
  },
  data () {
    return {
      fgIn: 0,
      fgOut: 0
    }
  },
  computed: {
    formattedIn () {
      return this.formatDuration(this.fgIn)
    },
    formattedOut () {
      return this.formatDuration(this.fgOut)
    },
    fragmentDuration () {
      return this.fgOut - this.fgIn
    },
  },
  methods: {
    timeUpdated (silent) {
      this.updateFragmentSize()

      if (!silent) {
        this.$emit('change', this.fgIn, this.fgOut)
      }
    },
    formatDuration (value) {
      return duration.toDuration(value)
    }
  },
  mounted () {
    this.fgIn = this.fragmentIn
    this.fgOut = this.fragmentOut
  }
}