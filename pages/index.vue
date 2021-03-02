<template>
  <v-app>
    <div>
      <img src="~assets/images/spine.jpg" class="w-full" />
    </div>
  </v-app>
</template>

<script>
export default {
  middleware: ["checkAuth"],
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  }
};
</script>
