<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 mt-5 class="text-center">
        <h1>店舗一覧</h1>
      </v-flex>

      <v-flex xs12 mt-3 justify-center>
        <v-data-table :headers="headers" :items="restaurants">
          <template v-slot:[`item.tabelog`]="{ item }">
            <v-icon small @click="showTabelog(item.url)"
              >mdi-silverware-fork-knife</v-icon
            >
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <router-link
              :to="{
                name: 'restaurant_detail',
                params: { restaurant_id: item.id },
              }"
            >
              <v-icon small class="mr-2"> mdi-open-in-new </v-icon>
            </router-link>
          </template>
        </v-data-table>
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
  created() {
    this.restaurants = this.$store.state.restaurants;
  },
  data() {
    return {
      headers: [
        { text: "店舗名", value: "name" },
        { text: "メモ", value: "description" },
        { text: "食べログ", value: "tabelog" },
        { text: "操作", value: "actions", sortable: false },
      ],
      restaurants: [],
    };
  },
  methods: {
    showRestaurantById(restaurant) {
      console.log(restaurant);
    },
    showTabelog(url) {
      window.open(url, "_blank");
    },
  },
};
</script>