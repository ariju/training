<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col align="center" justify="center">
            <Bmi />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Bmi from "~/components/Bmi";

export default {
  layout: "toppage",
  components: {
    Bmi
  },
};
</script>
