<template>
  <v-container>
    <v-row align-content="center">
      <v-col align="center">
        <v-btn @click="showTabelog" color="yellow accent-4" class="mr-2" dark
          >食べログ</v-btn
        >
        <v-btn @click="isShowForm" color="lime" class="mr-2" dark>編集</v-btn>
        <v-btn @click="deleteRestaurant" color="red darken-1" dark>削除</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DetailButtons",
  methods: {
    ...mapActions(["changeShowForm"]),
    showTabelog() {
      window.open(this.restaurant.url, "_blank");
    },
    isShowForm() {
      this.changeShowForm(!this.$store.state.isShowForm);
    },
    deleteRestaurant() {
      alert(`削除します：${this.restaurant.name}`);
    },
  },
  props: {
    restaurant: {
      type: Object,
    },
  },
};
</script>
