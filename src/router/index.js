import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Login",
      component: () =>
        import(/* webpackChunkName: "login" */ "../views/Login.vue"),
      meta: {
        title: "Login",
      },
    },
    {
      path: "",
      component: () => import(/* webpackChunkName: "layout" */ "../Layout.vue"),
      meta: {
        // requiresAuth: true,
      },
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"
            ),
          meta: {
            title: "Dashboard",
            // requiresAuth: true,
          },
        },
        {
          path: "/live-sales",
          name: "LiveSales",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ "../views/live-sales/LiveSales.vue"
            ),
          meta: {
            title: "Live Sales",
            // requiresAuth: true,
          },
        },
        {
          path: "/charts",
          name: "Charts",
          component: () => import("../views/charts/Charts.vue"),
          meta: {
            title: "Charts",
            // requiresAuth: true,
          },
        },
        {
          path: "/target",
          name: "Target",
          component: () => import("../views/target/Target.vue"),
          meta: {
            title: "Target",
            // requiresAuth: true,
          },
        },
        {
          path: "/sales-report",
          name: "Sales Report",
          component: () => import("../views/sales-report/SalesReport.vue"),
          meta: {
            title: "Target",
            // requiresAuth: true,
          },
        },
      ],
    },
    {
      path: "*",
      name: "PageNotFound",
      component: () =>
        import(
          /* webpackChunkName: "page-not-found" */ "../views/PageNotFound.vue"
        ),
      meta: {
        title: "404",
      },
    },
  ],
  mode: "history",
  base: process.env.BASE_URL,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("authToken")) {
      next("/");
    } else {
      next();
    }
  } else if (to.name == "Login" && localStorage.getItem("authToken") != null) {
    next("/dashboard");
  } else {
    next();
  }
});

export default router;
