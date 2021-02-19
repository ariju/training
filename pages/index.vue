<template>
  <div id="app">
    <h3>データの管理</h3>
    <label for="name">ニックネーム</label>
    <input 
      id="name" 
      type="text" 
      v-model="name"
    >
    <br><br>
    <label for="comment">コメント</label>
    <textarea 
      id="comment" 
      v-model="comment"
    ></textarea>
    <h2>データ</h2>
    <pre><p>{{ name }}</p></pre>
    <pre><p>{{ comment }}</p></pre>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "",
      comment: "",
    }
  }
}
</script>