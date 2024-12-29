<template>
  <nav>
    <Container>
      <div class="flex justify-between items-center">
        <section class="w-[30%]">
          <img :src="logo" alt="logo" />
        </section>
        <section class="hidden lg:flex justify-between w-[65%]">
          <router-link v-for="link in links" :to="link.to" :key="link.id">{{
            link.title
          }}</router-link>
        </section>
        <section class="flex items-center justify-end w-[35%]">
          <ShoppingCart />
          <CustomButton
            title="Log in"
            class="bg-secondary px-9 hidden lg:inline-block"
          />
          <img class="lg:hidden" :src="mobileSizeMenu" alt="mobileSizeMenu" />
        </section>
      </div>
    </Container>
  </nav>
</template>

<script lang="ts" setup>
import type { NavbarLinkType } from "./navbar.types";
import logo from "./../../assets/images/Logo Delizioso.png";
import mobileSizeMenu from "./../../assets/images/Home.svg";
import CustomButton from "../CustomButton/CustomButton.vue";
import Container from "../Container/Container.vue";
import ShoppingCart from "../ShoppingCart/ShoppingCart.vue";

const links: NavbarLinkType[] = [
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "Menu", to: "/menu" },
  { id: 3, title: "About us", to: "/about" },
  { id: 4, title: "Order Online", to: "/order-online" },
  { id: 5, title: "Reservation", to: "/reservation" },
  { id: 6, title: "Contact us", to: "/contact-us" },
];
</script>

<style lang="scss" scoped>
.router-link-active.router-link-exact-active {
  @apply text-primary;
}
</style>
