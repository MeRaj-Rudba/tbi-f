<template>

    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-4 col-lg-4 col-md-4">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome!</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <a-input size="large" v-model="formData.name" placeholder="email"
                                                allowClear />
                                        </div>
                                        <div class="form-group">
                                            <a-input-password size="large" v-model="formData.password"
                                                placeholder="password" allowClear />
                                        </div>
                                        <a-button block size="large" type="primary" :loading="loading"
                                            @click="userLogin">
                                            Login
                                        </a-button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>


</template>

<script>
import axios from 'axios'
export default {
    name: "Login",

    data() {
        return {
            loading: false,
            formData: {
                name: 'Admin',
                password: '123456'
            },
            userInfo: '',
            userPermission: [],
            token: '',
        }
    },

    methods: {
        userLogin() {

            let _that = this;
            _that.loading = true;
            // localStorage.setItem('authToken', "DemoAuthToken");
            // this.$router.go({ name: "Dashboard" });

            axios.post('login', {
                name: _that.formData.name,
                password: _that.formData.password,
            }).then(function (response) {
                if (response.data.status === 'success') {
                    _that.loading = false;
                    _that.token = response.data.authorisation.token;
                    _that.userInfo = response.data.user;
                    // _that.userInfo.roles.map(item => {
                    //     _that.userPermission = _that.userPermission.concat(item.permissions)
                    // })
                    // _that.userPermission = _that.userPermission.concat(_that.userInfo.permissions);
                    // _that.userPermission = _that.uniqueArray(_that.userPermission)
                    //setting token, user info & permission in local memory
                    localStorage.setItem('authToken', _that.token);
                    localStorage.setItem('userInformation', JSON.stringify(_that.userInfo));
                    // localStorage.setItem('userPermissions', JSON.stringify(_that.userPermission));
                    _that.$router.go({ name: 'Dashboard' });
                } else if (response.data.status === "error") {
                    _that.loading = false;
                    _that.$message.error(response.data.messages, 3);
                } else {
                    _that.loading = false;
                    _that.$message.error(response.data.messages, 3);
                }
            })
        },

        uniqueArray(array) {
            var a = array.concat();
            for (var i = 0; i < a.length; i++) {
                for (var j = i + 1; j < a.length; j++) {
                    if (a[i].id === a[j].id) {
                        a.splice(j--, 1);
                    }
                }
            }
            return a;
        }
    }
}
</script>

<style scoped>
</style>