<template>
  <div class="container">
    <h1 v-if="msg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      // default: 'Default message.'
    }
  }
}
</script>

<style scoped>
.container {
  margin: 50px;
  padding: 100px;
  font-family: sans-serif;
  color: #151515;
  background-color: #E6E6E6;
}
</style>
