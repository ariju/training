<template>
  <v-app>
    <div>
      <v-app-bar color="red" dark>
        <v-toolbar-title>work out</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn @click="logout">ログアウト</v-btn>

        <v-btn nuxt-link to="/calendar" class="m-5">カレンダー</v-btn>
        <v-btn nuxt-link to="/management" class="m-5">管理</v-btn>
      </v-app-bar>
      <img src="~assets/images/spine.jpg" class="w-full" />
    </div>
    <v-footer>
      <div class="flex-grow-1"></div>
      <div>
        &copy; 2021 workout
      </div>
    </v-footer>
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
    deleteUser() {
      this.$store.dispatch("delete");
    }
  }
};
</script>
