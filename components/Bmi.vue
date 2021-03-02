<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout wrap>
          <v-row justify="center" align-content="center">
            <v-col cols="12" sm="6" md="4" lg="3">
              <v-title class="display-2">
                BMI
              </v-title>
              <div>
                <input v-model="weight" type="text" placeholder="体重" />Kg
                <input v-model="height" type="text" placeholder="身長" />Cm
                <div>
                  <v-btn @click="calculate">計算する</v-btn>
                  <p class="display-1">BMI結果</p>
                  <div v-if="result">{{ result }}</div>
                  <div v-if="error">{{ error }}</div>
                </div>
              </div>
              <v-btn
                href="#"
                class="mdl-button mdl-js-button mdl-button--raised"
                @click.prevent="reset()"
              >
                Reset
              </v-btn>
              <p class="display-1">肥満度判定</p>
              <div v-if="result <= '17'">
                痩せすぎ
              </div>
              <div v-else-if="result <= '20'">
                痩せ気味
              </div>
              <div v-else-if="result <= '24'">
                普通
              </div>
              <div v-else-if="result <= '30'">
                肥満
              </div>
              <div v-else-if="result <= '35'">
                肥満2
              </div>
              <div v-else-if="result <= '40'">
                肥満3
              </div>
              <div v-else-if="result >= '40'">
                肥満4
              </div>
              <ul>
                <li>BMI指数 = 体重 / (身長 * 身長)</li>
                <li>17未満 痩せすぎ</li>
                <li>17以上〜20未満 痩せ気味</li>
                <li>20以上〜24未満 普通</li>
                <li>24以上〜30未満 肥満</li>
                <li>30以上〜35未満 肥満2</li>
                <li>35以上〜40未満 肥満3</li>
                <li>40以上 肥満4</li>
              </ul>
              <p>
                bmiとは体重と身長のバランスをチェックし、
                外見的な肥満度を測定するもの BMI指数 = 体重(kg) ÷ {身長(m) x
                身長(m)}
              </p>
            </v-col>
          </v-row>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "bmi",
  data() {
    return {
      drawer: null,
      weight: "",
      height: "",
      result: "",
      error: ""
    };
  },
  methods: {
    calculate() {
      if (this.weight && this.height) {
        this.height = this.height / 100;
        this.result = this.weight / (this.height * this.height);
        this.error = "";
      } else {
        this.error = "体重と身長を入力してください！";
      }
    },
    reset() {
      this.height = "";
      this.weight = "";
      this.result = "";
      this.error = "";
    }
  }
};
</script>
