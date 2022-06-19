<template>
  <div>


    <b-card class="mt-3">



    </b-card>
    <b-card class="mt-3">
      <h3>{{ salesByBrandAmountData.datasets[0].label }}</h3>
      <input type="color" id="favcolor" name="favcolor" v-model="salesByBrandAmountData.datasets[0].backgroundColor">

      <BarChart :chartData="salesByBrandAmountData" />
    </b-card>
    <b-card class="mt-3">
      <h3>{{ salesByBrandQtyData.datasets[0].label }}</h3>
      <input type="color" id="favcolor" name="favcolor" v-model="salesByBrandQtyData.datasets[0].backgroundColor">

      <BarChart :chartData="salesByBrandQtyData" />
    </b-card>
    <b-card class="mt-3">
      <h3>{{ salesByBrandAmountData.datasets[0].label }}</h3>
      <input type="color" id="favcolor" name="favcolor" v-model="salesByBrandAmountData.datasets[0].backgroundColor">

      <BarChart :chartData="salesByBrandAmountData" />
    </b-card>

  </div>
</template>

<script>
// import LineChart from "../../components/chart/LineChart";
import axios from 'axios'
import BarChart from "../../components/chart/BarChart";

export default {
  name: "SalesReport",
  computed: {

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
    generateSalesByBrandAmount() {
      axios
        .get('http://127.0.0.1:8000/api/sales/sales-by-product-amount', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
          }
        })
        .then(response => {


          this.salesByBrandAmount = response.data;


          for (let index = 0; index < this.salesByBrandAmount.length; index++) {

            const product_name = this.salesByBrandAmount[index].product_name;
            const amount = this.salesByBrandAmount[index].amount;
            this.salesByBrandAmountData.labels.push(product_name)
            this.salesByBrandAmountData.datasets[0].data.push(amount)


          }

        }).catch(err => console.log(err));

    },
    generateSalesByBrandQty() {
      axios
        .get('http://127.0.0.1:8000/api/sales/sales-by-product-qty', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
          }
        })
        .then(response => {


          this.salesByBrandQty = response.data;

          for (let index = 0; index < this.salesByBrandQty.length; index++) {

            const product_name = this.salesByBrandQty[index].product_name;
            const qty = this.salesByBrandQty[index].qty;
            this.salesByBrandQtyData.labels.push(product_name)
            this.salesByBrandQtyData.datasets[0].data.push(qty)


          }


        }).catch(err => console.log(err));

    }
  },
  components: {

    BarChart,
  },
  data() {
    return {


      salesByShop: null,
      salesByBrandAmount: null,
      salesByBrandQty: null,
      salesByShopData: {
        labels: [],
        datasets: [
          {
            label: `Today's Brand Wise Sales (In Lac)`,
            backgroundColor: '#55B3D9',
            data: []
          }
        ]
      },
      salesByBrandAmountData: {
        labels: [],
        datasets: [
          {
            label: `Today's SKU Wise Sales (In Lac)`,
            backgroundColor: '#F2AE2E',
            data: []
          }
        ]
      },
      salesByBrandQtyData: {
        labels: [],
        datasets: [
          {
            label: `Today's SKU Wise Sales (In QTY)`,
            backgroundColor: '#2CBF6C',
            data: []
          }
        ]
      },
    }
  },




  mounted() {
    this.max = this.todaysTarget;
    this.value = this.todaysSales;


    this.generateSalesByShopName()
    this.generateSalesByBrandQty()
    this.generateSalesByBrandAmount()


  },
}
</script>
<style scoped>
.special-text {
  font-style: italic;
  color: #5A706C;
}
</style>
