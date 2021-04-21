<template>
  <v-app>
    <v-main>
      <Management />
    </v-main>
  </v-app>
</template>

<script>
import Management from "~/components/Management";

export default {
  name: "App",
  components: {
    Management
  },
  data() {
    return {};
  }
};
</script>