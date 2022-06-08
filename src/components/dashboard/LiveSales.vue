<template>
  <div>
    <v-card elevation="2">
      <v-card-title>
        Todays Tatget
      </v-card-title>
      <v-card-text>
        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LiveSales",
  data() {
    return {
      todaysTarget: "6.6 Cr",
      todaysSales: "19.2 Lac",
    }
  },
}
</script>

