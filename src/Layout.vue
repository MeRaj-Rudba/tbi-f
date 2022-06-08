<template>
  <!--    sidebar-collapse-->
  <!--    class="sidebar-mini" :class="sidebarCollapse ? 'sidebar-collapse':''"-->
  <div>
    <!-- wrapper -->
    <div class="wrapper">

      <!-- Navbar -->
      <Header />
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <aside class="main-sidebar sidebar-light-cyan elevation-4">
        <!-- Brand Logo -->
        <router-link :to="{ name: 'Dashboard' }" class="brand-link text-center" style="height:54px">
          <img src="./assets/logo.png" alt="SFA" style="width:107px !important; opacity: .9"
            class="img-fluid center-block">
        </router-link>

        <!-- Sidebar -->
        <div class="sidebar">
          <!-- Sidebar user panel (optional) -->
          <!--                    <div class="user-panel mt-1 pb-1 mb-1 d-flex">-->
          <!--                        <div class="info">-->
          <!--                            <a href="#" class="d-block">Super Admin</a>-->
          <!--                        </div>-->
          <!--                    </div>-->

          <!-- Sidebar Menu -->
          <nav id="sidebar_nav" class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column nav-flat" data-widget="treeview" role="menu"
              data-accordion="false">

              <!-- dashboard section start -->
              <li class="nav-item">
                <router-link
                  :class="[currentRouteName === 'Dashboard' ? 'active active-blue' : '', sidebarCollapse === true ? '' : 'pl-1']"
                  class="nav-link " :to="{ name: 'Dashboard' }">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </router-link>
              </li>
              <!-- dashboard section end -->

              <!-- Acl start -->
              <li id="acl_settings" class="nav-item has-treeview"
                v-if="checkPermission('user-list') || checkPermission('role-list') || checkPermission('permission-list')">

                <a href="#" :class="[sidebarCollapse === true ? '' : 'pl-1']" class="nav-link">
                  <i class="nav-icon far fa-calendar-alt"></i>
                  <p>Reports<i class="right fas fa-angle-right"></i></p>
                </a>

                <ul class="nav nav-treeview">

                  <li class="nav-item" v-if="checkPermission('permission-list')">
                    <router-link class="nav-link"
                      :class="[currentRouteName.includes('PermissionGroupList') ? 'active' : '', sidebarCollapse === true ? '' : 'sidebar-link-padding']"
                      :to="{ name: 'LiveSales' }">
                      <!-- <i class="nav-icon fas fa-user-lock"></i> -->
                      <!-- <i class=" fa-solid fa-chart-line-up"></i> -->
                      <i class="nav-icon fa-solid fa-chart-line"></i>

                      <p>
                        Live Sales
                      </p>
                    </router-link>
                  </li>

                  <li class="nav-item" v-if="checkPermission('permission-list')">
                    <router-link class="nav-link"
                      :class="[currentRouteName.includes('PermissionList') ? 'active' : '', sidebarCollapse === true ? '' : 'sidebar-link-padding']"
                      :to="{ name: 'Charts' }">
                      <!-- <i class="nav-icon fas fa-user-lock"></i> -->
                      <i class="nav-icon fa-solid fa-chart-pie"></i>
                      <p>
                        Charts
                      </p>
                    </router-link>
                  </li>

                  <li class="nav-item" v-if="checkPermission('permission-list')">
                    <router-link class="nav-link"
                      :class="[currentRouteName.includes('PermissionList') ? 'active' : '', sidebarCollapse === true ? '' : 'sidebar-link-padding']"
                      :to="{ name: 'Target' }">
                      <!-- <i class="nav-icon fas fa-user-lock"></i> -->
                      <!-- <i class="nav-icon fa-solid fa-chart-pie"></i> -->
                      <i class="nav-icon fa-solid fa-bullseye"></i>
                      <p>
                        Target
                      </p>
                    </router-link>
                  </li>

                  <li class="nav-item" v-if="checkPermission('permission-list')">
                    <router-link class="nav-link"
                      :class="[currentRouteName.includes('PermissionList') ? 'active' : '', sidebarCollapse === true ? '' : 'sidebar-link-padding']"
                      :to="{ name: 'Sales Report' }">

                      <i class="nav-icon fa-solid fa-scale-balanced"></i>
                      <p>
                        Sales Report
                      </p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <!-- Acl end -->


              <!-- <li v-if="checkPermission('damage-reason-list') || checkPermission('no-order-reason-list')"
                id="divInventoryManagement" class="nav-item header-link" data-toggle="collapse"
                data-target=".menuInventoryManagement">
                <a href="javascript:;" :class="[sidebarCollapse === true ? '' : 'pl-1']" class="nav-link  pt-2 pb-2">
                  <i class="nav-icon fas fa-user-cog">
                  </i>
                  <p>Level 1 Item 2 <i class="right fas fa-angle-right"></i></p>
                </a>
              </li>

              <li v-if="checkPermission('damage-reason-list') || checkPermission('no-order-reason-list')"
                id="inventory_setup" class="nav-item has-treeview menuInventoryManagement collapse">
                <a href="javascript:;" :class="[sidebarCollapse === true ? '' : 'sidebar-link-padding']"
                  class="nav-link">
                  <i class="fa fa-wrench nav-icon" aria-hidden="true"></i>
                  <p>Level 2 Item 1<i class="right fas fa-angle-right"></i></p>
                </a>
                <ul class="nav nav-treeview">

                  <li class="nav-item" v-if="checkPermission('damage-reason-list')">
                    <router-link class="nav-link"
                      :class="[currentRouteName.includes('DamageReasonList') ? 'active' : '', sidebarCollapse === true ? '' : 'sidebar-sublink-padding']"
                      :to="{ name: 'DemoPage' }">
                      <i class="fa fa-exclamation-triangle nav-icon"></i>
                      <p>
                        Level 3 Item 1
                      </p>
                    </router-link>
                  </li>

                  <li class="nav-item" v-if="checkPermission('no-order-reason-list')">
                    <router-link class="nav-link"
                      :class="[currentRouteName.includes('NoOrderReasonList') ? 'active' : '', sidebarCollapse === true ? '' : 'sidebar-sublink-padding']"
                      :to="{ name: 'DemoPage' }">
                      <i class="fa fa-window-close nav-icon"></i>
                      <p>
                        Level 3 Item 2
                      </p>
                    </router-link>
                  </li>
                </ul>
              </li>

              <li id="inventory_management" class="nav-item has-treeview menuInventoryManagement collapse">
                <a href="javascript:;" :class="[sidebarCollapse === true ? '' : 'sidebar-link-padding']"
                  class="nav-link">
                  <i class="nav-icon fas fa-list-alt"></i>
                  <p>Level 2 Item 2<i class="right fas fa-angle-right"></i></p>
                </a>
                <ul class="nav nav-treeview">

                  <li class="nav-item">
                    <router-link class="nav-link"
                      :class="[currentRouteName.includes('ReceiveStock') ? 'active' : '', sidebarCollapse === true ? '' : 'sidebar-sublink-padding']"
                      :to="{ name: 'DemoPage' }">
                      <i class="fas fa-sitemap nav-icon"></i>
                      <p>
                        Level 3 Item 1
                      </p>
                    </router-link>
                  </li>
                </ul>
              </li> -->
            </ul>
          </nav>
          <!-- /.sidebar-menu -->

        </div>
        <!-- /.sidebar -->



      </aside>
      <!-- /Main Sidebar Container -->


      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper py-3 " style="background-color: #F4F6F9!important;">
        <section class="content" style="overflow-y: scroll; height:80vh">
          <div class="container-fluid" id="app" style="background-color: #F4F6F9!important;">

            <router-view></router-view>

            <!-- /.row -->
          </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->

      <!-- Main Footer -->

      <Footer />

      <!-- /Main Footer -->

    </div>
    <!-- ./wrapper -->

  </div>
</template>

<script>
import $ from 'jquery';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
export default {
  name: "Layout",

  components: {
    Footer,
    Header
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },

  data() {
    return {
      sidebarCollapse: false,
      userInfo: '',
      userPermissions: '',
      mappedPermission: ''
    }
  },

  methods: {
    getStatusFromChild(status) {
      this.sidebarCollapse = status;
    },
    checkPermission(permissionForCheck) {
      // if ((this.mappedPermission).includes(permissionForCheck) === true) {
      //   return true;
      // } else {
      //   return false;
      // }

      return true
    },
    handleScroll(event) {
      var nav = $('.card-nav-fix');
      var currentDistance = $(window).scrollTop() + 10;
      if (currentDistance > 80) {
        nav.addClass('f-nav');
      }
      else {
        nav.removeClass('f-nav');
      }
    }

  },

  mounted() {
    $('.header-link').click(function () {
      var id = $(this).attr('id').replace("div", "menu");
      $('li.collapse:not(li.' + id + ')').removeClass("show");
      $('.header-link').not(this).removeClass("arrowrotate");
      $('.header-link').not(this).attr("aria-expanded", "false");
      $(this).addClass("arrowrotate");
      $("ul.nav-treeview").css("display", "none");
      $("li.menu-open").removeClass("menu-open menu-is-opening");
      $(".active").removeClass("active");
    });
    //main menu collapse
    $('.has-treeview').click(function () {
      var id = $(this).attr('id');
      if (typeof id !== 'undefined' && id !== false) {
        $("ul.nav-treeview:not(#" + id + " ul)").css("display", "none");
        $("li.menu-open:not(#" + id + ")").removeClass("menu-open menu-is-opening");
        $(".active").removeClass("active");
      }
    });


    $('#sidebar_nav .nav-link').click(function () {

      // if ($(this).hasClass("active-blue") === false){
      //     $(this).addClass("active-blue");
      // }
      // else{
      //     $(this).removeClass("active-blue");
      // }


      if ($(this).closest("li").hasClass("menu-open") == false) {
        $(this).addClass("active-blue");
      }
      else {
        $(this).removeClass("active-blue")
        $('.nav-item').not(this).removeClass("active-blue")
      }
      $('.nav-link').not(this).removeClass("active-blue");
    });

    $('#acl_settings').click(function () {
      $('li.collapse').removeClass("show");
      $('.header-link').attr("aria-expanded", "false");
    });


    //    var nav = $('.card-nav-fix');
    //     this.objDistance = nav.offset().top;


  },

  created() {
    // console.log(console.log(this.$route.query.page))
    // document.body.classList.add('hold-transition', 'sidebar-mini');
    document.body.classList.add('sidebar-mini');
    document.body.classList.remove('sidebar-collapse');
    this.userInfo = {
      username: "admin",
      id: 13,
      password: "123456"
    };

    this.userPermissions = [{ "id": 1, "permission_group_id": 1, "name": "Admin Panel", "slug": "admin-panel", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 1 } }, { "id": 2, "permission_group_id": 2, "name": "User List", "slug": "user-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 2 } }, { "id": 3, "permission_group_id": 2, "name": "User Create", "slug": "user-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 3 } }, { "id": 4, "permission_group_id": 2, "name": "User Edit", "slug": "user-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 4 } }, { "id": 5, "permission_group_id": 2, "name": "User Delete", "slug": "user-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 5 } }, { "id": 6, "permission_group_id": 2, "name": "User Export", "slug": "user-export", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 6 } }, { "id": 7, "permission_group_id": 2, "name": "User Import", "slug": "user-import", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 7 } }, { "id": 8, "permission_group_id": 4, "name": "Role List", "slug": "role-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 8 } }, { "id": 9, "permission_group_id": 4, "name": "Role Create", "slug": "role-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 9 } }, { "id": 10, "permission_group_id": 4, "name": "Role Edit", "slug": "role-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 10 } }, { "id": 11, "permission_group_id": 4, "name": "Role Delete", "slug": "role-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 11 } }, { "id": 12, "permission_group_id": 4, "name": "Role Export", "slug": "role-export", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 12 } }, { "id": 13, "permission_group_id": 4, "name": "Role Import", "slug": "role-import", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 13 } }, { "id": 14, "permission_group_id": 3, "name": "Permission List", "slug": "permission-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 14 } }, { "id": 15, "permission_group_id": 3, "name": "Permission Create", "slug": "permission-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 15 } }, { "id": 16, "permission_group_id": 3, "name": "Permission Edit", "slug": "permission-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 16 } }, { "id": 17, "permission_group_id": 3, "name": "Permission Delete", "slug": "permission-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 17 } }, { "id": 18, "permission_group_id": 3, "name": "Permission Export", "slug": "permission-export", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 18 } }, { "id": 19, "permission_group_id": 3, "name": "Permission Import", "slug": "permission-import", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 19 } }, { "id": 20, "permission_group_id": 5, "name": "Brand List", "slug": "brand-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 20 } }, { "id": 21, "permission_group_id": 5, "name": "Brand Create", "slug": "brand-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 21 } }, { "id": 22, "permission_group_id": 5, "name": "Brand Edit", "slug": "brand-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 22 } }, { "id": 23, "permission_group_id": 5, "name": "Brand Delete", "slug": "brand-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 23 } }, { "id": 24, "permission_group_id": 5, "name": "Brand Export", "slug": "brand-export", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 24 } }, { "id": 25, "permission_group_id": 5, "name": "Brand Import", "slug": "brand-import", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 25 } }, { "id": 26, "permission_group_id": 6, "name": "Unit List", "slug": "unit-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 26 } }, { "id": 27, "permission_group_id": 6, "name": "Unit Create", "slug": "unit-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 27 } }, { "id": 28, "permission_group_id": 6, "name": "Unit Edit", "slug": "unit-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 28 } }, { "id": 29, "permission_group_id": 6, "name": "Unit Delete", "slug": "unit-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 29 } }, { "id": 30, "permission_group_id": 6, "name": "Unit Export", "slug": "unit-export", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 30 } }, { "id": 31, "permission_group_id": 6, "name": "Unit Import", "slug": "unit-import", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 31 } }, { "id": 32, "permission_group_id": 7, "name": "Company List", "slug": "company-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 32 } }, { "id": 33, "permission_group_id": 7, "name": "Company Create", "slug": "company-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 33 } }, { "id": 34, "permission_group_id": 7, "name": "Company Edit", "slug": "company-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 34 } }, { "id": 35, "permission_group_id": 7, "name": "Company Delete", "slug": "company-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 35 } }, { "id": 36, "permission_group_id": 8, "name": "Event List", "slug": "event-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 36 } }, { "id": 37, "permission_group_id": 8, "name": "Event Create", "slug": "event-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 37 } }, { "id": 38, "permission_group_id": 8, "name": "Event Edit", "slug": "event-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 38 } }, { "id": 39, "permission_group_id": 8, "name": "Event Delete", "slug": "event-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 39 } }, { "id": 40, "permission_group_id": 9, "name": "Product List", "slug": "product-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 40 } }, { "id": 41, "permission_group_id": 9, "name": "Product Create", "slug": "product-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 41 } }, { "id": 42, "permission_group_id": 9, "name": "Product Edit", "slug": "product-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 42 } }, { "id": 43, "permission_group_id": 9, "name": "Product Delete", "slug": "product-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 43 } }, { "id": 44, "permission_group_id": 10, "name": "Market List", "slug": "market-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 44 } }, { "id": 45, "permission_group_id": 10, "name": "Market Create", "slug": "market-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 45 } }, { "id": 46, "permission_group_id": 10, "name": "Market Edit", "slug": "market-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 46 } }, { "id": 47, "permission_group_id": 10, "name": "Market Delete", "slug": "market-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 47 } }, { "id": 48, "permission_group_id": 10, "name": "Rearrange Market", "slug": "rearrange-market", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 48 } }, { "id": 49, "permission_group_id": 12, "name": "Route List", "slug": "route-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 49 } }, { "id": 50, "permission_group_id": 12, "name": "Route Create", "slug": "route-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 50 } }, { "id": 51, "permission_group_id": 12, "name": "Route Edit", "slug": "route-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 51 } }, { "id": 52, "permission_group_id": 12, "name": "Route Delete", "slug": "route-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 52 } }, { "id": 53, "permission_group_id": 11, "name": "Designation List", "slug": "designation-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 53 } }, { "id": 54, "permission_group_id": 11, "name": "Designation Create", "slug": "designation-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 54 } }, { "id": 55, "permission_group_id": 11, "name": "Designation Edit", "slug": "designation-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 55 } }, { "id": 56, "permission_group_id": 11, "name": "Designation Delete", "slug": "designation-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 56 } }, { "id": 57, "permission_group_id": 13, "name": "Sku List", "slug": "sku-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 57 } }, { "id": 58, "permission_group_id": 13, "name": "Sku Create", "slug": "sku-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 58 } }, { "id": 59, "permission_group_id": 13, "name": "Sku Edit", "slug": "sku-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 59 } }, { "id": 60, "permission_group_id": 13, "name": "Sku Delete", "slug": "sku-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 60 } }, { "id": 61, "permission_group_id": 14, "name": "Branch List", "slug": "branch-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 61 } }, { "id": 62, "permission_group_id": 14, "name": "Branch Create", "slug": "branch-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 62 } }, { "id": 63, "permission_group_id": 14, "name": "Branch Edit", "slug": "branch-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 63 } }, { "id": 64, "permission_group_id": 14, "name": "Branch Delete", "slug": "branch-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 64 } }, { "id": 65, "permission_group_id": 15, "name": "Delivery Group List", "slug": "delivery-group-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 65 } }, { "id": 66, "permission_group_id": 15, "name": "Delivery Group Create", "slug": "delivery-group-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 66 } }, { "id": 67, "permission_group_id": 15, "name": "Delivery Group Edit", "slug": "delivery-group-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 67 } }, { "id": 68, "permission_group_id": 15, "name": "Delivery Group Delete", "slug": "delivery-group-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 68 } }, { "id": 69, "permission_group_id": 16, "name": "Distributor List", "slug": "distributor-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 69 } }, { "id": 70, "permission_group_id": 16, "name": "Distributor Create", "slug": "distributor-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 70 } }, { "id": 71, "permission_group_id": 16, "name": "Distributor Edit", "slug": "distributor-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 71 } }, { "id": 72, "permission_group_id": 16, "name": "Distributor Delete", "slug": "distributor-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 72 } }, { "id": 73, "permission_group_id": 17, "name": "Price Type List", "slug": "price-type-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 73 } }, { "id": 74, "permission_group_id": 17, "name": "Price Type Create", "slug": "price-type-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 74 } }, { "id": 75, "permission_group_id": 17, "name": "Price Type Edit", "slug": "price-type-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 75 } }, { "id": 76, "permission_group_id": 17, "name": "Price Type Delete", "slug": "price-type-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 76 } }, { "id": 77, "permission_group_id": 18, "name": "Business Group List", "slug": "business-group-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 77 } }, { "id": 78, "permission_group_id": 18, "name": "Business Group Create", "slug": "business-group-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 78 } }, { "id": 79, "permission_group_id": 18, "name": "Business Group Edit", "slug": "business-group-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 79 } }, { "id": 80, "permission_group_id": 18, "name": "Business Group Delete", "slug": "business-group-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 80 } }, { "id": 81, "permission_group_id": 19, "name": "Customer Grade List", "slug": "customer-grade-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 81 } }, { "id": 82, "permission_group_id": 19, "name": "Customer Grade Create", "slug": "customer-grade-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 82 } }, { "id": 83, "permission_group_id": 19, "name": "Customer Grade Edit", "slug": "customer-grade-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 83 } }, { "id": 84, "permission_group_id": 19, "name": "Customer Grade Delete", "slug": "customer-grade-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 84 } }, { "id": 85, "permission_group_id": 20, "name": "Customer List", "slug": "customer-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 85 } }, { "id": 86, "permission_group_id": 20, "name": "Customer Create", "slug": "customer-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 86 } }, { "id": 87, "permission_group_id": 20, "name": "Customer Edit", "slug": "customer-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 87 } }, { "id": 88, "permission_group_id": 20, "name": "Customer Delete", "slug": "customer-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 88 } }, { "id": 89, "permission_group_id": 21, "name": "Employee List", "slug": "employee-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 89 } }, { "id": 90, "permission_group_id": 21, "name": "Employee Create", "slug": "employee-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 90 } }, { "id": 91, "permission_group_id": 21, "name": "Employee Edit", "slug": "employee-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 91 } }, { "id": 92, "permission_group_id": 21, "name": "Employee Delete", "slug": "employee-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 92 } }, { "id": 93, "permission_group_id": 22, "name": "Damage Reason List", "slug": "damage-reason-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 93 } }, { "id": 94, "permission_group_id": 22, "name": "Damage Reason Create", "slug": "damage-reason-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 94 } }, { "id": 95, "permission_group_id": 22, "name": "Damage Reason Edit", "slug": "damage-reason-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 95 } }, { "id": 96, "permission_group_id": 22, "name": "Damage Reason Delete", "slug": "damage-reason-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 96 } }, { "id": 97, "permission_group_id": 23, "name": "No Order Reason List", "slug": "no-order-reason-list", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 97 } }, { "id": 98, "permission_group_id": 23, "name": "No Order Reason Create", "slug": "no-order-reason-create", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 98 } }, { "id": 99, "permission_group_id": 23, "name": "No Order Reason Edit", "slug": "no-order-reason-edit", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 99 } }, { "id": 100, "permission_group_id": 23, "name": "No Order Reason Delete", "slug": "no-order-reason-delete", "created_by": "64-00001", "updated_by": "", "created_at": "1 Jun, 2022", "updated_at": "1 Jun, 2022", "pivot": { "role_id": 1, "permission_id": 100 } }];
    this.mappedPermission = (this.userPermissions).map(x => x.slug);
    this.$message.config({ top: "85px" });
    window.addEventListener('scroll', this.handleScroll);

  }
}
</script>

<style>
.ant-calendar-picker-container {
  z-index: 1300 !important;
}

.ant-select-dropdown--single {
  z-index: 1300 !important;
}

.main-header {
  border-bottom: 1px solid #dee2e6;
  z-index: 1009 !important;
}


.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,
.v-data-table>.v-data-table__wrapper>table>thead>tr>th {
  padding: 6px !important;
  height: 20px !important;
  /* transition: height .2s cubic-bezier(.4,0,.6,1); */
}

.text-start,
.text-center,
.text-end {
  vertical-align: middle !important;
}

.v-btn__content {
  font-family: "Segoe UI", Roboto, sans-serif !important;
  font-size: 0.875rem !important;
  text-transform: capitalize;
}

.btn-export {
  height: 36px;
  min-width: 64px;
  padding: 7px 16px;
  color: #fff !important;
  font-size: 0.875rem !important;
  font-family: "Segoe UI", Roboto, sans-serif !important;
}

.btn-export:hover {
  color: #ffffff !important;
}

.theme--light.v-btn {
  color: #fff;
}

.btn-group .btn {
  padding: 0.375rem 0.75rem;
  font-size: .875rem;
  text-transform: capitalize;
}



table td,
table tr {
  font-size: 0.7rem !important;

}

.container-fluid {
  font-size: .875rem !important;
}

.report_table_row {
  width: 5px;
  padding: 5px !important;
  text-align: center
}

input.largerCheckbox {
  width: 20px;
  height: 20px;
}


/* sidebar css */
.sidebar {
  font-family: "Segoe UI", Roboto, sans-serif;
  font-size: 0.875rem !important;
  /* font-weight: 300; */
}

.sidebar-link-padding {
  padding-left: 33px;
}

.sidebar-sublink-padding {
  padding-left: 63px;
}

.nav-pills .show>.nav-link {
  color: #343a40;
  background-color: #ffff;
}

.header-link[aria-expanded="true"] {
  background-color: rgb(185, 185, 185);
}

.arrowrotate[aria-expanded="true"]>.nav-link i.right {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.arrowrotate {
  color: #F4F6F9 !important;
}

.active-blue {
  background-color: #17a2b8 !important;
  color: white !important;
  border-left-color: #17a2b8 !important;
}

.sidebar-dark-cyan .nav-sidebar>.nav-item>.nav-link.active,
.sidebar-light-cyan .nav-sidebar>.nav-item>.nav-link.active {
  background-color: rgba(0, 0, 0, 0.1);
  color: black;
}

[class*="sidebar-light-"] .nav-treeview>.nav-item>.nav-link.active,
[class*="sidebar-light-"] .nav-treeview>.nav-item>.nav-link.active:hover {
  background-color: #17a2b8;
  color: #fff;
}

.nav-sidebar .nav-link p {
  display: contents;
  /* inline-flex */
  width: 170px;
  margin: 0;
  white-space: normal;
}

.arrowrotate[aria-expanded="true"]>.nav-link i.right {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.arrowrotate {
  color: #F4F6F9 !important;
}

.arrowrotate>.nav-link i.right {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}

/* end sidebar css */

.company_name {
  /* margin-left:200px !important; */
  /* margin-left: auto; */
  color: #0061C1;
  text-align: center;
}


tbody tr:nth-of-type(even) {
  /*background-color: rgba(236, 237, 237);*/
  background-color: #F1FDFD;
}

tbody tr:nth-of-type(odd) {
  /*background-color: rgb(250 ,250, 250);*/
  background-color: #E5F0F0;
}

.v-data-table-header {
  /*background-color: rgba(182, 183, 187);*/
  background-color: #F1FDFD;
  color: white;
}

.v-data-footer {
  /*background-color: rgb(250 ,250, 250);*/
  background-color: #E9ECEF;
}


.img-responsive {
  width: 107px !important;
  opacity: .9
}

@media only screen and (max-width: 768px) {
  .company_name {
    margin: auto !important;
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 450px) {
  .company_name {
    margin: auto !important;
    font-size: 1rem;
  }
}

.brand-link {
  padding: 0.5rem 0.5rem !important;
}

.mr-sm-btn {
  margin-right: .25rem !important;
}

@media only screen and (max-width: 493px) {
  .mr-sm-btn {
    margin-right: 0 !important;
  }
}

label {
  font-size: .8rem !important;
  font-weight: 500 !important;
}

.dropdown-item.active,
.dropdown-item:active {
  color: inherit;
  text-decoration: inherit;
  background-color: inherit;
}

.btn-xs {
  font-size: .7rem;
}

.table thead th {
  vertical-align: middle;
}

.ant-btn-danger {
  background: #dc3545 linear-gradient(180deg, #e15361, #dc3545) repeat-x !important;
}

.f-nav {
  /* To fix main menu container */
  z-index: 1099;
  position: fixed;
  right: 41px;
  top: 10px;
}


/* image upload css */
#preview {
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 5px;
}

#preview img {
  width: 100%;
  max-height: 180px;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
  /* margin-right: ; */
  position: static;

}

#file {
  visibility: hidden;
  position: absolute;
}

.browse {
  width: 100%;
  max-height: auto;
  border: 3px solid #ccc;
  background: #eee;
  padding-right: 41px;
}

.browse .btn-primary {
  position: absolute;
  top: 10px;
  right: 15px;
}

.browse .btn-danger {
  position: absolute;
  top: 50px;
  right: 15px;
}

.browse-btn:hover,
.delete-btn:hover {
  border: 1px solid #ccc;
}

.ant-tree.ant-tree-show-line li span.ant-tree-switcher {
  background: transparent !important;
  line-height: 1.5;
}
</style>

