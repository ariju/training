<template>
  <v-app>
    <v-app-bar color="blue" dark>
      <v-toolbar-title>work out</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn nuxt-link to="/" class="m-5">トップページ</v-btn>
    </v-app-bar>
    <v-main>
      <Calendar />
    </v-main>
  </v-app>
</template>

<script>
import Calendar from "~/components/Calendar";

export default {
  name: "App",
  components: {
    Calendar
  },
  data() {
    return {};
  }
};
</script>
