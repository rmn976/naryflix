<template>
    <div id="login">
        <h2>Bienvenu, veuillez vous identifier pour accéder au contenu</h2>
        <input type="text" placeholder="Utilisateur" v-model="username"><br>
        <input type="password" placeholder="Mot de passe" v-model="password" @keyup.enter="connection()"><br>
        <button @click="connection()">Se connecter</button>
        <p>{{ errorMessage }}</p>
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

</style>