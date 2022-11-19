<template>
  <v-app>
    <v-main>
      <div class="d-flex">
        <LayoutNavbar />
        <v-row>
          <v-col cols="12" class="px-0">
            <LayoutHeader class="px-0 px-sm-6 px-md-12" @reRender="key++" />
            <nuxt style="max-width: 1400px" class="mt-6 px-0 px-sm-6 px-md-12 mx-auto" />
          </v-col>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      key: 0
    }
  }
}
</script>
