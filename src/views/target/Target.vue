<template>
  <div>

    <b-card-group deck>
      <b-card>
        <h3>Monthly Target</h3>
        <h5 class=" text-info">
          {{ monthlyTarget }}
        </h5>

      </b-card>

      <b-card>
        <h3>MTD Sales</h3>
        <h5 class=" text-info">
          {{ mtdSales }}
        </h5>

      </b-card>


    </b-card-group>
    <b-card-group deck class="mt-3">
      <b-card>
        <h3>MTD Achv. %</h3>
        <h5 class=" text-info">
          {{ mtdAchv }} %
        </h5>

      </b-card>

      <b-card>
        <h3>Monthly Trends %</h3>
        <h5 class=" text-info">
          {{ monthlyTrends }} %
        </h5>

      </b-card>


    </b-card-group>
    <b-card class="mt-3">
      <h3>{{ salesByShopData.datasets[0].label }}</h3>
      <input type="color" id="favcolor" name="favcolor" v-model="salesByShopData.datasets[0].backgroundColor">
      <BarChart :chartData="salesByShopData" />
    </b-card>

  </div>
</template>

<script>
// import LineChart from "../../components/chart/LineChart";
import axios from 'axios'

import BarChart from "../../components/chart/BarChart";

export default {
  name: "Target",
  computed: {

  },
  components: {

    BarChart,
  },
  methods: {
    generateSalesByShopName() {
      axios
        .get('http://127.0.0.1:8000/api/sales/sales-by-shop', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
          }
        })
        .then(response => {


          this.salesByShop = response.data;


          for (let index = 0; index < this.salesByShop.length; index++) {

            const shop_name = this.salesByShop[index].shop_name;
            const amount = this.salesByShop[index].amount;
            this.salesByShopData.labels.push(shop_name)
            this.salesByShopData.datasets[0].data.push(amount)


          }


        }).catch(err => console.log(err));

    },
  },
  data() {
    return {
      monthlyTarget: "187.8 Cr",
      mtdSales: "197.8 Cr",
      mtdAchv: 6,
      monthlyTrends: 58,

      salesByShop: null,
      salesByShopData: {
        labels: [],
        datasets: [
          {
            label: `Today's Shop Wise Sales (In Lac)`,
            backgroundColor: '#50F296',
            data: []
          }
        ]
      },
    }
  },




  mounted() {

    this.generateSalesByShopName()
  },
}
</script>
<style scoped>
.special-text {
  font-style: italic;
  color: #5A706C;
}
</style>
