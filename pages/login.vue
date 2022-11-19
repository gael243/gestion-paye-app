<template>
  <div>
    <form>
      <h1>Login</h1>
      <div>
        <v-text-field placeholder="email" type="text" v-model="form.email" />
      </div>
      <div>
        <v-text-field placeholder="password" type="password" v-model="form.password" />
      </div>
      <v-btn @click.prevent="handleAuthenticate()" :disabled="!form.email || !form.password">Se connecter</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data () {
    return {
      form: {}
    }
  },
  methods: {
    async handleAuthenticate() {
      try {
        await this.$auth.loginWith('local', { data: this.form })
      } catch (_) {
        console.log('login failed')
      }
    }
  }
}
</script>

<style scoped>

</style>
