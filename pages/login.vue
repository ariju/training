<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form </v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-title>
                <h1 class="display-1">ログイン</h1>
              </v-card-title>
              <v-card-text>
                <v-form class="w-full" @submit.prevent="onSubmit">
                  <v-btn type="submit" class="info">
                    Google でログイン
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$fireAuth.signInWithRedirect(provider)
    }
  },
  mounted() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        // ログイン後のページに遷移する
        this.$router.push('/')
      } else {
        // ログイン失敗。エラー処理など(通常はあり得ない？)
      }
    })
  }
};
</script>
