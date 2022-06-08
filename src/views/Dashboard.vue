<template>
    <div>

    </div>
</template>
<script>
import $ from 'jquery';

// import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import LiveSales from "../components/dashboard/LiveSales";
export default {
    name: "Dashboard",

    components: {
        // Footer,
        // Header
        LiveSales
    },

    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },

    data() {
        return {

        }
    },

    methods: {


    },

    mounted() {

    },

    created() {


    }
}
</script>