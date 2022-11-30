<template>
  <v-app>
    <v-app-bar app color="amber lighten-1" dark>
      <div class="d-flex align-center font-weight-black">Restaurant-Picker</div>
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
