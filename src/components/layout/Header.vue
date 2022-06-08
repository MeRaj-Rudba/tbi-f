<template>
    <div>
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="btn" :class="isBarsStatus ? 'active-blue' : ''" @click.prevent="checkMenuCollapse"
                        data-widget="pushmenu" href="#" role="button">
                        <i class="fas fa-bars"></i>
                    </a>
                </li>

            </ul>

            <h4 class="company_name m-auto"><b>Transcom Business Intelligence.</b></h4>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto ">


                <!-- Notifications Dropdown Menu -->
                <li class="nav-item dropdown">
                    <a class="" data-toggle="dropdown" href="#">
                        <!-- {{userInfo.username}} -->

                        <a-tooltip placement="left">
                            <template #title>{{ userInfo.username }}</template>
                            <div>
                                <img src="@/assets/images/user.png" alt="Admin"
                                    style="width:40px !important;border-radius: 25px; opacity: .9" class="">
                                <i class="fas fa-angle-down pl-1 d-none d-sm-inline-block"></i>
                            </div>
                        </a-tooltip>

                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <router-link :to="{ name: 'UserProfile' }" class="dropdown-item">My Profile</router-link>

                        <a href="#" class="dropdown-item" @click.prevent="showModal">Change Password</a>

                        <a-modal :maskClosable="false" :zIndex="1200" v-model="changePasswordModalVisible"
                            title="Change Password">
                            <div class="row">
                                <div class="col-12">
                                    <div>
                                        <label class="font-weight-bold">Password:<span class="error">*</span></label>
                                        <a-input-password v-model="userData.password" placeholder="Enter password here!"
                                            allowClear />
                                        <span class="error"
                                            v-if="submitStatus === 'ERROR' && !$v.userData.password.required">Password
                                            is required</span>
                                        <span class="error"
                                            v-if="submitStatus === 'ERROR' && !$v.userData.password.minLength">Password
                                            must have at
                                            least{{ $v.userData.password.$params.minLength.min }}characters.</span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div>
                                        <label class="font-weight-bold">Confirm Password:<span
                                                class="error">*</span></label>
                                        <a-input-password v-model="userData.confirm_password"
                                            placeholder="Enter confirm password here!" allowClear />
                                        <span class="error"
                                            v-if="submitStatus === 'ERROR' && !$v.userData.confirm_password.sameAsPassword">Password
                                            does not match.</span>
                                    </div>
                                </div>
                            </div>
                            <template slot="footer">
                                <a-button key="back" @click="handleModalCancel">
                                    Return
                                </a-button>
                                <a-button key="submit" type="primary" :loading="operationLoading"
                                    @click="handlePasswordSubmit">
                                    Update
                                </a-button>
                            </template>
                        </a-modal>


                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" @click.prevent="userLogout">
                            Logout
                        </a>
                    </div>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a class="nav-link" href="#" @click.prevent="userLogout">
                        <i class="fa fa-fw fa-power-off"></i>&nbsp;
                        Logout

                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import axios from 'axios'
import {
    required,
    sameAs,
    minLength,
} from "vuelidate/lib/validators";
import AInputPassword from "ant-design-vue/es/input/Password";
export default {
    name: "Header",
    components: { AInputPassword },
    data() {
        return {
            isBarsStatus: false,
            userInfo: '',
            operationLoading: false,
            changePasswordModalVisible: false,
            submitStatus: null,

            userData: {
                password: "",
                confirm_password: "",
            },
        }
    },
    validations: {
        userData: {
            password: {
                required,
                minLength: minLength(6),
            },
            confirm_password: {
                sameAsPassword: sameAs("password"),
            },
        },
    },
    methods: {
        // modal
        showModal() {
            this.changePasswordModalVisible = true;
        },
        handleModalCancel(e) {
            this.changePasswordModalVisible = false;
        },
        handlePasswordSubmit(e) {
            this.submitData();
        },
        //modal end

        submitData() {
            //
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else {
                this.submitStatus = "PENDING";
                this.userChangePassword();
            }
        },

        /*userProfile(){
          this.$router.push({name: "UserProfile"})
        },*/

        userChangePassword() {
            // let _that = this;
            // let formData = new FormData();
            // _that.operationLoading = true;

            // formData.append('id', _that.userInfo.id);
            // formData.append('password', _that.userData.password);
            // formData.append('confirm_password', _that.userData.confirm_password);

            // axios.post('user/update-password', formData,
            //     {
            //         headers: {
            //             'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            //         }
            //     }).then(function (response) {
            //         if (response.data.status_code === 200) {
            //             _that.operationLoading = false;
            //             _that.changePasswordModalVisible = false;
            //             _that.userData.password = '';
            //             _that.userData.confirm_password = '';
            //             _that.userLogout();
            //             // _that.$message.success("Password successfully", 3);
            //         }
            //     }).catch(function (error) {
            //         console.log(error);
            //     });
        },

        checkMenuCollapse() {
            this.isBarsStatus = !this.isBarsStatus;
            this.$emit('child-sends-message', this.isBarsStatus)
        },
        userLogout() {
            let _that = this;
            localStorage.clear();
            _that.$router.push({ name: 'Login' });
            // let _that = this;
            // axios.post('users/logout',
            //     {
            //         id: _that.userInfo.id,
            //         tokenId: localStorage.getItem('authToken')
            //     },
            //     {
            //         headers: {
            //             'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            //         }
            //     }
            // ).then(function (response) {
            //     if (response.data.status === 200) {
            //         localStorage.clear();
            //         _that.$router.push({ name: 'Login' });
            //     }
            // }).catch((error) => {
            //     localStorage.clear();
            //     _that.$router.push({ name: 'Login' });
            // });
        },
    },
    created() {
        this.userInfo = {
            username: "admin",
            id: 13,
            password: "123456"
        };
    }
}
</script>

<style scoped>
.company_name {
    text-align: center;
}
</style>