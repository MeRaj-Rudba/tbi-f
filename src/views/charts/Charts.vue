<template>
  <div>
    <ThemeCard title="Charts" subTitle=""></ThemeCard>
    <b-card class="mt-3">
      <input type="color" id="favcolor" name="favcolor" v-model="BarChartData.datasets[0].backgroundColor">
      <BarChart :chartData="BarChartData" />
    </b-card>
    <b-card-group deck>



      <!-- </b-card-group>
    <b-card-group deck> -->
      <b-card class="mt-3">
        <PieChart :chartData="PieChartData" />
      </b-card>
      <b-card class="mt-3">
        <DoughnutChart :chartData="DoughnutChartData" />
      </b-card>
      <b-card class="mt-3">
        <input type="color" id="favcolor" name="favcolor" v-model="LineChartData.datasets[0].backgroundColor">
        <input type="color" id="favcolor" name="favcolor" v-model="LineChartData.datasets[1].backgroundColor">

        <LineChart :chartData="LineChartData" />

      </b-card>


    </b-card-group>
    <b-card-group deck>
      <b-card class="mt-3">
        <input type="color" id="favcolor" name="favcolor" v-model="BarChartData2.datasets[0].backgroundColor">
        <BarChart :chartData="BarChartData2" />
      </b-card>
      <b-card class="mt-3">
        <input type="color" id="favcolor" name="favcolor" v-model="BarChartData3.datasets[0].backgroundColor">
        <input type="color" id="favcolor" name="favcolor" v-model="BarChartData3.datasets[1].backgroundColor">
        <BarChart :chartData="BarChartData3" />
      </b-card>


    </b-card-group>




  </div>
</template>

<script>
import LineChart from "../../components/chart/LineChart";
import BarChart from "../../components/chart/BarChart";
import PieChart from "../../components/chart/PieChart";
import DoughnutChart from "../../components/chart/DoughnutChart";
import ThemeCard from "../../components/card/ThemeCard";
export default {
  name: "Charts",
  computed: {

  },
  components: {
    LineChart,
    BarChart,
    PieChart,
    DoughnutChart,
    ThemeCard,
  },
  data() {
    return {
      BarChartData: {
        labels: [
          "Shop 1",
          "Shop 2",
          "Shop 3",
          "Shop 4",
          "Shop 5",
          "Shop 6",
          "Shop 7",
          "Shop 8",
          "Shop 9",
          "Shop 10",
        ],
        datasets: [
          {
            label: 'FF wise Sales(In Thousand)',
            backgroundColor: '#32A664',
            data: [5700, 4300, 2300, 4125, 6780, 2343, 1222, 4431, 5700, 7200]
          }
        ]
      },
      BarChartData2: {
        labels: [
          "Shop 1",
          "Shop 2",
          "Shop 3",
          "Shop 4",
          "Shop 5",
          "Shop 6",
          "Shop 7",
          "Shop 8",
          "Shop 9",
          "Shop 10",
        ],
        datasets: [
          {
            label: 'FF wise Sales(In Thousand)',
            backgroundColor: '#F2506E',
            data: [3000, 3500, 1000, 3000, 3500, 3000, 3500, 2000, 1000, 2000]
          }
        ]
      },
      BarChartData3: {
        labels: [
          "Shop 1",
          "Shop 2",
          "Shop 3",
          "Shop 4",
          "Shop 5",
          "Shop 6",
          "Shop 7",
          "Shop 8",
          "Shop 9",
          "Shop 10",
        ],
        datasets: [
          {
            label: 'FF wise Sales(In Thousand)',
            backgroundColor: '#ADA2F2',
            data: [5700, 4300, 2300, 4125, 6780, 2343, 1222, 4431, 5700, 7200]
          },
          {
            label: 'FF wise Sales(In Lac)',
            backgroundColor: '#0CF2B1',
            data: [7100, 3211, 3250, 2125, 8220, 2823, 2222, 5431, 2300, 4500]

          }
        ]
      },
      LineChartData: {
        labels: [
          "Shop 1",
          "Shop 2",
          "Shop 3",
          "Shop 4",
          "Shop 5",
          "Shop 6",
          "Shop 7",
          "Shop 8",
          "Shop 9",
          "Shop 10",
        ],
        datasets: [
          {
            label: 'FF wise Sales(In Thousand)',
            backgroundColor: '#0CF2B1',
            data: [5700, 4300, 2300, 4125, 6780, 2343, 1222, 4431, 5700, 7200]
          },
          {
            label: 'FF wise Sales(In Lac)',
            backgroundColor: '#F420b2',
            data: [7100, 3211, 3250, 2125, 8220, 2823, 2222, 5431, 2300, 4500]
          }
        ]
      },
      PieChartData: {
        label: 'FF wise Sales(In Thousand)',
        labels: ['Gausia', 'New Market', 'Bashundhara City', 'Bosila'],
        datasets: [
          {
            backgroundColor: ['#072BF2', '#4BD4F2', '#F2AC29', '#F2622E'],
            data: [5645, 7865, 4545, 2345]
          }
        ]
      },
      DoughnutChartData: {
        label: 'FF wise Sales(In Thousand)',
        labels: ['Gausia', 'New Market', 'Bashundhara City', 'Bosila'],
        datasets: [
          {
            backgroundColor: ['#F25835', '#AB04D9', '#F28705', '#29B9F2'],
            data: [5645, 7865, 4545, 2345]
          }
        ]
      }
    }
  },




  mounted() {
    this.max = this.todaysTarget;
    this.value = this.todaysSales;

    // if (this.value < 80) {

    //   this.bar.variant = "warning"
    // } else {
    //   this.bar.variant = "success"
    // }
  },
}
</script>

