<template>
  <div>


    <b-card class="mt-3">



    </b-card>
    <b-card class="mt-3">
      <h3>Today's Brand Wise Sales (In Lac)</h3>
      <input type="color" id="favcolor" name="favcolor" v-model="salesByBrandAmountData.datasets[0].backgroundColor">

      <BarChart :chartData="salesByBrandAmountData" />
    </b-card>
    <b-card class="mt-3">
      <h3>Today's SKU Wise Sales (In QTY)</h3>
      <input type="color" id="favcolor" name="favcolor" v-model="salesByBrandQtyData.datasets[0].backgroundColor">

      <BarChart :chartData="salesByBrandQtyData" />
    </b-card>
    <b-card class="mt-3">
      <h3>Today's SKU Wise Sales (In Lac)</h3>
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
        .get('http://127.0.0.1:8000/api/sales/sales-by-shop')
        .then(response => {


          this.salesByShop = response.data;
          let salesByShopData = {
            labels: [],
            datasets: [
              {
                label: `Today's Brand Wise Sales (In Lac)`,
                backgroundColor: '#55B3D9',
                data: []
              }
            ]
          }

          for (let index = 0; index < this.salesByShop.length; index++) {

            const shop_name = this.salesByShop[index].shop_name;
            const amount = this.salesByShop[index].amount;
            salesByShopData.labels.push(shop_name)
            salesByShopData.datasets[0].data.push(amount)


          }
          this.salesByShopData = salesByShopData

        }).catch(err => console.log(err));

    },
    generateSalesByBrandAmount() {
      axios
        .get('http://127.0.0.1:8000/api/sales/sales-by-product-amount')
        .then(response => {


          this.salesByBrandAmount = response.data;
          let salesByBrandAmountData = {
            labels: [],
            datasets: [
              {
                label: `Today's SKU Wise Sales (In Lac)`,
                backgroundColor: '#F2AE2E',
                data: []
              }
            ]
          }

          for (let index = 0; index < this.salesByBrandAmount.length; index++) {

            const product_name = this.salesByBrandAmount[index].product_name;
            const amount = this.salesByBrandAmount[index].amount;
            salesByBrandAmountData.labels.push(product_name)
            salesByBrandAmountData.datasets[0].data.push(amount)


          }
          this.salesByBrandAmountData = salesByBrandAmountData

        }).catch(err => console.log(err));

    },
    generateSalesByBrandQty() {
      axios
        .get('http://127.0.0.1:8000/api/sales/sales-by-product-qty')
        .then(response => {


          this.salesByBrandQty = response.data;
          let salesByBrandQtyData = {
            labels: [],
            datasets: [
              {
                label: `Today's SKU Wise Sales (In QTY)`,
                backgroundColor: '#2CBF6C',
                data: []
              }
            ]
          }

          for (let index = 0; index < this.salesByBrandQty.length; index++) {

            const product_name = this.salesByBrandQty[index].product_name;
            const qty = this.salesByBrandQty[index].qty;
            salesByBrandQtyData.labels.push(product_name)
            salesByBrandQtyData.datasets[0].data.push(qty)


          }
          this.salesByBrandQtyData = salesByBrandQtyData

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
      salesByShopData: {},
      salesByBrandAmountData: {},
      salesByBrandQtyData: {},
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
