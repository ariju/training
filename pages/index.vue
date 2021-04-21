<template>
  <v-main>
    <section class="home">
      <v-container fluid fill-height class="home-content">
        <v-row>
          <v-col class="home-content-text">
            <p>トレーニングお疲れ様でした</p>
            <p>今日の成果を記録しよう</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>

<script>
export default {
  layout: "toppage",
  created() {
    const user = this.$fireAuth.currentUser
    if (user) {
      // ログイン済み
      this.user = user
    } else {
      // 未ログイン。ログイン画面へ遷移する
      this.$router.push('/login')
      return
    }
  }
}
</script>

<style lang="scss" scoped>
.home-content {
  background: url("../assets/images/fitness-1882721_1920.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: 100vh;

  &-text {
    color: white;
    position: absolute;
    top: 70px;
    left: 20px;
    font-size: 28px;
    font-weight: bold;
  }
}
</style>
