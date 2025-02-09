<template>
  <nav>
    <InnerContainer>
      <div class="flex justify-between items-center">
        <section class="w-[30%]">
          <img :src="logo" alt="logo" />
        </section>
        <section class="hidden lg:flex justify-between w-[65%]">
          <router-link v-for="link in links" :key="link.id" :to="link.to">
            {{ link.title }}
          </router-link>
        </section>
        <section class="flex items-center justify-end w-[35%]">
          <ShoppingCart />
          <CustomButton
            class="bg-secondary px-9 hidden lg:inline-block"
            title="Log in"
          />
          <img :src="mobileSizeMenu" alt="mobileSizeMenu" class="lg:hidden" />
        </section>
      </div>
    </InnerContainer>
  </nav>
</template>

<script lang="ts" setup>
import type { NavbarLinkType } from "./navbar.types";
import logo from "./../../assets/images/Logo Delizioso.png";
import mobileSizeMenu from "./../../assets/images/Home.svg";
import CustomButton from "../CustomButton/CustomButton.vue";
import ShoppingCart from "../ShoppingCart/ShoppingCart.vue";
import InnerContainer from "../InnerContainer/InnerContainer.vue";

const links: NavbarLinkType[] = [
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "Menu", to: "/menus" },
  { id: 3, title: "About us", to: "/about-us" },
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
