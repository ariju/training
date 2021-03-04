<template>
  <section class="home">
    <v-container fluid fill-height class="home-content">
      <v-row>
        <v-col class="home-content-text">
          <p>Thank you for your hard work today</p>
          <p>Record today's achievements</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  middleware: ["checkAuth"],
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.home-content {
  background: url("../assets/images/spine.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;

  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
}
</style>
