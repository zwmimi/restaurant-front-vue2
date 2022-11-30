<template>
  <v-app>
    <v-app-bar app color="amber lighten-1" dark>
      <router-link :to="{ name: 'home' }"
        ><div class="d-flex align-center font-weight-black white--text">
          Restaurant-Picker
        </div></router-link
      >
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>