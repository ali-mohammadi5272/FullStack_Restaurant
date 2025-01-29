<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../../components/Navbar/Navbar.vue";
import Footer from "../../components/Footer/Footer.vue";
</script>

<style lang="scss" scoped></style>
