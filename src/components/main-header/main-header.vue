<template>
  <div class="main-header">
    <main-logo></main-logo>
    <main-nav></main-nav>
  </div>
</template>

<script>
  import MainLogo from "./main-logo";
  import MainNav from "./main-nav";
  export default {
    name: "main-header",
    components: {MainNav, MainLogo},

    mounted() {
      console.log(this.$store);
    }
  }
</script>

<style scoped lang="scss">
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 25px;
  background-color: #272727;
}
</style>