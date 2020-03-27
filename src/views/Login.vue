<template>
    <div id="login">
        <input type="text" placeholder="Utilisateur" v-model="username"><br>
        <input type="password" placeholder="Mot de passe" v-model="password" @keyup.enter="connection()"><br>
        <button @click="connection()">Se connecter</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: function () {
            return {
                username: '',
                password: '',
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