<template>
  <div>
    <v-card class="text-center py-8">
      <h4>
        Voulez vous vraiment vous déconnectez ?
      </h4>
      <div class="mt-4">
        <v-btn
          color="primary"
          type="submit"
          elevation="0"
          class="black--text text-none"
          :loading="loading"
          :disable="loading"
          @click="logout()"
        >
          Je me déconnecte
        </v-btn>

        <v-btn
          type="reset"
          outlined
          color="grey"
          class="text-none"
          @click="close()"
        >
          Annuler
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AuthLogout",
  data () {
    return {
      loading: false
    }
  },
  methods: {
    logout () {
      this.loading = true
      this.$auth.logout()
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
