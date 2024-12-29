<template>
  <div>
    <Navbar />
    <Container>
      <slot></slot>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import Container from "../../components/Container/Container.vue";
import Navbar from "../../components/Navbar/Navbar.vue";
</script>

<style lang="scss" scoped></style>
