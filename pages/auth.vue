<template>
  <v-container class="mt-12">
    <v-row class="mt-6" justify="center">
      <v-btn @click="login">
        ログイン
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch("login");
    }
  }
};
</script>


