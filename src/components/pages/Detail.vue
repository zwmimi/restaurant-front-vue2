<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 mt-5 class="text-center">
        <h1>詳細</h1>
      </v-flex>

      <ToTopButton />
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import ToTopButton from "@/components/atoms/button/ToTopButton.vue";

export default {
  name: "Detail",
  components: {
    ToTopButton,
  },
};
</script>