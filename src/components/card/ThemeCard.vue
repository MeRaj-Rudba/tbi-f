<template>
  <b-card>
    <h3>{{ title }}</h3>
    <p>
      {{ subTitle }}
    </p>

  </b-card>
</template>

<script>


export default {
  name: 'ThemeCard',
  components: {

  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subTitle: {
      type: String,
      default: 'Sub Title'
    },

  },
  data() {
    return {


    }
  }
}
</script>