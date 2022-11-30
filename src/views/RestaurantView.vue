<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 mt-5>
        <h1>Restaurant</h1>
      </v-flex>
      <ToTopButton />
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import ToTopButton from "@/components/atoms/button/ToTopButton.vue";
export default {
  name: "RestaurantView",
  components: {
    ToTopButton,
  },
};
</script>