<template>
  <v-app>
    <v-main>
      <Calendar />
    </v-main>
  </v-app>
</template>

<script>
import Calendar from "~/components/Calendar";

export default {
  layout: "toppage",
  name: "App",
  components: {
    Calendar
  },
  data() {
    return {};
  }
};
</script>
