<template>
  <div class="main-nav">
    <router-link to="/" class="item">Новости</router-link>
    <router-link to="/about" class="item">Информация</router-link>
  </div>
</template>

<script>
  export default {
    name: "main-nav"
  }
</script>

<style scoped lang="scss">
.main-nav {
  color: white;

  .item {
    display: inline-block;
    margin-left: 20px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
  }

  a {
    color: white;
  }
}
</style>