<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 mt-5 class="text-center">
        <h1>店舗一覧</h1>
      </v-flex>

      <v-flex xs12 mt-3 justify-center>
        <v-data-table
          :headers="headers"
          :items="$store.state.restaurants"
        ></v-data-table>
      </v-flex>

      <ToTopButton />
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import ToTopButton from "@/components/atoms/button/ToTopButton.vue";
export default {
  name: "Restaurant",
  components: {
    ToTopButton,
  },
  data() {
    return {
      headers: [
        { text: "店舗名", value: "name" },
        { text: "メモ", value: "description" },
      ],
    };
  },
};
</script>