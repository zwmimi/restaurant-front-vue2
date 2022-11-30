<template>
  <v-main>
    <v-container>
      <v-layout wrap v-for="menu in topMenus" :key="menu.name">
        <v-flex xs12 text-center my-5
          ><v-btn
            class="font-weight-black"
            color="amber lighten-1"
            :to="menu.link"
            dark
            >{{ menu.name }}</v-btn
          ></v-flex
        >
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      topMenus: [
        { name: "店舗新規登録", link: { name: "create" } },
        { name: "店舗一覧", link: { name: "restaurant" } },
      ],
    };
  },
};
</script>