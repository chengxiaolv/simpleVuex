<template>
  <div class="hello">
    <button @click="changeState">更改state的值</button> <br/>
    <button @click="getState">获取state的值</button> <br/>
    <button @click="Jump">跳转</button> <br/> {{data}}
  </div>
</template>

<script>
import common from "../common.js"
  export default {
    data() {
      return {
        data: ''
      }
    },
    methods: {
      changeState() {
        var num = Math.ceil(Math.random() * 100);
        this.$store.dispatch("setCityName", num)
      },
      getState() {
        this.data = this.$store.getters.getCityFn;
      },
      Jump() {
        this.$router.push("/");
      }
    },
    created(){
      this.data = this.$store.getters.getCityFn;
    }
  }
</script>

<style scoped>

</style>
