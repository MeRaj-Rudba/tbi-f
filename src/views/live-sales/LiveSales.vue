<template>
  <div>
    <b-card class="mt-3">
      <h2>SKF Live Sales</h2>
      <p class="special-text">Last Data Updated 04-Jun-2022 Time:10:01 AM </p>
    </b-card>
    <b-card-group deck>
      <b-card>
        <h3>Today's Target</h3>
        <h5 class="text-info">
          {{ todaysTarget.toLocaleString('en-US') }}
        </h5>

      </b-card>

      <b-card>
        <h3>Today's Sales</h3>
        <h5 class="text-info">
          {{ todaysSales.toLocaleString('en-US') }}
        </h5>

      </b-card>


    </b-card-group>
    <b-card class="mt-3">
      <h3>Today's Achievement</h3>

      <!-- <b-progress :value="value" :max="max" :variant="bar.variant" show-progress class="mb-3"></b-progress> -->
      <div class="text-center">
        <vue-ellipse-progress :progress="value / max * 100" emptyColor="#F2594B" color="#4ED963" fontSize="3rem"
          fontColor="#3B3F40" :legend="true">
          <span slot="legend-value">%</span>
        </vue-ellipse-progress>
        <h5 class="mt-3 text-info"><strong> Achieved : </strong>{{ value / max * 100 }}%</h5>

      </div>
    </b-card>

    <b-card class="mt-3">
      <h3>Today's Brand Wise Sales (In Lac)</h3>
      <input type="color" v-model="salesByShopData.datasets[0].backgroundColor">
      <BarChart :chartData="salesByShopData" />
    </b-card>

  </div>
</template>

<script>
// import LineChart from "../../components/chart/LineChart";
import axios from 'axios'
import BarChart from "../../components/chart/BarChart";

export default {
  name: "LiveSales",
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
          // let salesByShopData = {
          //   labels: [],
          //   datasets: [
          //     {
          //       label: `Today's Brand Wise Sales (In Lac)`,
          //       backgroundColor: '#F25252',
          //       data: []
          //     }
          //   ]
          // }

          for (let index = 0; index < this.salesByShop.length; index++) {

            const shop_name = this.salesByShop[index].shop_name;
            const amount = this.salesByShop[index].amount;
            this.salesByShopData.labels.push(shop_name)
            this.salesByShopData.datasets[0].data.push(amount)


          }
          // this.salesByShopData = salesByShopData

        }).catch(err => console.log(err));

    },
  },
  data() {
    return {
      todaysTarget: 10000000,
      todaysSales: 7000000,
      value: 0,
      max: 0,
      bar: {
        variant: 'warning',
      },

      salesByShop: null,
      salesByShopData: {
        labels: [],
        datasets: [
          {
            label: `Today's Brand Wise Sales (In Lac)`,
            backgroundColor: '#F25252',
            data: []
          }
        ]
      },



    }
  },




  mounted() {
    this.max = this.todaysTarget;
    this.value = this.todaysSales;

  },
  created() {
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
