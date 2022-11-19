<template>
  <v-row justify="space-between" align="center" class="mt-4">
    <v-col>
      <div class="logo">
        <img
          alt="logo"
          height="70px"
          src="/vuetify-logo.svg"
        >
      </div>
    </v-col>

    <v-col class="d-flex justify-end">
      <!-- Start of home button -->
      <nuxt-link to="/">
        <v-btn
          elevation="2"
          fab
          small
          color="green"
        >
          <v-icon
            small
            color="white darken-2"
          >
            mdi-home-city-outline
          </v-icon>
        </v-btn>
      </nuxt-link>
      <!-- End of home button -->

      <!-- Start of refresh button -->
      <v-btn
        elevation="2"
        fab
        small
        color="blue"
        class="ml-2"
        @click="reRender()"
      >
        <v-icon
          small
          color="white darken-2"
        >
          mdi-refresh
        </v-icon>
      </v-btn>
      <!-- End of refresh button -->

      <!-- Start of logout button -->
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red accent-4"
            class="ml-2 white--text"
            dense
            v-bind="attrs"
            elevation="0"
            fab
            small
            v-on="on"
          >
            <v-icon small color="white">
              mdi-power-standby
            </v-icon>
          </v-btn>
        </template>
        <AuthLogout @close="dialog =false" />
      </v-dialog>
      <!-- End of logout button -->

    </v-col>
  </v-row>
  </v-row>
</template>

<script>
export default {
  name: "LayoutHeader",
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    reRender () {
      this.$emit('reRender')
    }
  }
}
</script>

<style scoped>

</style>
