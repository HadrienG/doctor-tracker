<template>
  <div class="title">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-top: 0;
  margin-bottom: 5px;
}
</style>
