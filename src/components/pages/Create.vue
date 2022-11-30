<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 mt-5 class="text-center">
        <h1>新規店舗登録</h1>
      </v-flex>

      <v-flex xs6 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field label="店舗名" />
              <v-text-field label="食べログURL" />
              <v-text-field label="メモ" />
              <div class="text-center">
                <v-btn color="lime" dark class="mr-2">登録</v-btn>
                <v-btn color="lime" outlined dark>クリア</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>

      <ToTopButton />
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import ToTopButton from "@/components/atoms/button/ToTopButton.vue";

export default {
  name: "Create",
  components: {
    ToTopButton,
  },
};
</script>