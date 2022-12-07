<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 mt-5 class="text-center">
        <h1>詳細</h1>
      </v-flex>
      <v-flex xs12 mt-5 class="text-center">
        <h3>店舗名：{{ this.restaurant.name }}</h3>
      </v-flex>
      <v-flex xs12 mt-5 class="text-center">
        <h3>メモ：{{ this.restaurant.description }}</h3>
      </v-flex>

      <DetailButtons :restaurant="restaurant" />
      <div v-show="$store.state.isShowForm">
        <!-- ここにフォーム -->
        <h3>フォーム</h3>
      </div>
      <ToRestaurantButton />
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import ToRestaurantButton from "@/components/atoms/button/ToRestaurantButton.vue";
import DetailButtons from "@/components/molecules/DetailButtons.vue";
import { mapActions } from "vuex";

export default {
  name: "Detail",
  components: {
    ToRestaurantButton,
    DetailButtons,
  },
  data() {
    return {
      restaurant: {},
    };
  },
  methods: {
    ...mapActions(["changeShowForm"]),
  },
  created() {
    if (!this.$route.params.restaurant_id) return;

    const restaurant = this.$store.getters.getRestaurantById(
      this.$route.params.restaurant_id
    );
    if (restaurant) {
      this.restaurant = restaurant;
    } else {
      this.$router.push({ name: "restaurant" });
    }
  },
  beforeDestroy() {
    this.changeShowForm(false);
  },
};
</script>
