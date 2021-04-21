<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-text-field
                label="Select Image"
                @click="pickFile"
                v-model="imageName"
              ></v-text-field>
              <input
                type="file"
                style="display: none"
                ref="image"
                accept="image/*"
                @change="onFilePicked"
              />
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="upload">アップロード</v-btn>
                <div>
                  <img :src="this.imageUrl" />
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      imageName: "",
      imageUrl: ""
    };
  },
  mounted() {
    this.$firestore
      .collection("images")
      .get()
      .then(snap => {
        const array = [];
        snap.forEach(doc => {
          array.push(doc.data());
        });
        this.images = array;
      });
  },
  methods: {
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageUrl = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageName = "";

        this.imageUrl = "";
      }
    },
    // 画像アップロード処理
    upload() {
      // ストレージオブジェクト作成
      var storageRef = this.$fireStorage.ref();
      // ファイルのパスを設定
      var mountainsRef = storageRef.child(`images/${this.imageName}`);
      // ファイルを適用してファイルアップロード開始
      mountainsRef.put(this.imageUrl)
      .then(snapshot => {
        snapshot.ref.getDownloadURL()
      .then(downloadURL => {
          this.imageUrl = downloadURL;
          this.$firestore.collection("images").add({ downloadURL });
        });
      });
    }
  },
  components: {}
};
</script>
