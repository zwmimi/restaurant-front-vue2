<template>
  <v-container>
    <v-row align-content="center">
      <v-col align="center">
        <v-btn @click="toTop" color="amber accent-4" dark>TOP</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ToTopButton",
  methods: {
    toTop() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>