<template>
  <v-container>
    <v-row align-content="center">
      <v-col align="center">
        <v-btn @click="toTop" color="amber accent-3" dark>一覧へ戻る</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ToTopButton",
  methods: {
    toTop() {
      this.$router.push({ name: "restaurant" });
    },
  },
};
</script>