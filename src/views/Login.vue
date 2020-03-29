<template>
    <div id="login">
        <div class="row top m-0">
            <img src="https://fontmeme.com/permalink/200328/4647fa15c30f81ce7987cb8d6c7ddc02.png" alt="">
        </div>
        <div class="row bottom m-0">
            <div class="offset-4 col-4 mt-5">
                <div class="px-5">
                    <h3 class="mt-5 mb-4 text-center text-white">S'identifier</h3>
                    <div class="form-group">
                        <input type="text" class="col-8 form-control m-auto" placeholder="Utilisateur" v-model="username">
                    </div>
                    <div class="form-group">
                        <input type="password" class="col-8 form-control m-auto" placeholder="Mot de passe" v-model="password" @keyup.enter="connection()">
                    </div>
                    <div class="form-group">
                        <button class="form-control col-8 m-auto" @click="connection()">Se connecter</button>
                    </div>
                    <p class="text-danger text-center mb-5">{{ errorMessage }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: function () {
            return {
                username: '',
                password: '',
                errorMessage: ''
            }
        },
        computed: {
            invalidCredential() {
                return this.$store.state.invalidCredential;
            }
        },
        watch: {
            invalidCredential: function () {
                this.errorMessage = 'Identifiant ou mot de passe incorect'
            }
        },
        methods: {
            connection: function () {
                this.$store.dispatch('getRequestToken', {
                    username: this.username,
                    password: this.password
                })
            }
        }
    }
</script>

<style scoped>
    .top {
        height: 20%;
    }
    img {
        margin-left: 5%;
        margin-top: 3%;
        height: 45px;
        width: 167px;
    }
    .bottom {
        height: 60%;
    }
    .offset-4 {
        background-color: rgba(0, 0, 0, 0.75);
        height: 80%;
        border-radius: 15px;
    }
    button {
        background-color: #ff0000;
        border-color: #ff0000;
        color: #ffffff
    }

</style>