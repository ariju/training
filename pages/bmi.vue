<template>
  <v-app>
    <v-main>
      <Bmi />
    </v-main>
  </v-app>
</template>

<script>
import Bmi from "~/components/Bmi";

export default {
  name: "App",
  components: {
    Bmi
  },
  data() {
    return {};
  }
};
</script>
