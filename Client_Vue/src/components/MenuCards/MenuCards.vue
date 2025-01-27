<template>
  <div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
    >
      <MenuCard
        v-for="card in menuCards"
        :key="card.id"
        :description="card.description"
        :price="card.price"
        :rate="card.rate"
        :src="card.src"
        :title="card.title"
      />
    </div>
    <div class="mt-20 text-center">
      <Pagination :current="1" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import foodImage_1 from "../../assets/images/Mask Group (1).png";
import foodImage_2 from "../../assets/images/Mask Group (2).png";
import foodImage_3 from "../../assets/images/Mask Group (5).png";
import foodImage_4 from "../../assets/images/Mask Group (6).png";
import foodImage_5 from "../../assets/images/Mask Group (7).png";
import foodImage_6 from "../../assets/images/Mask Group.png";
import MenuCard from "../MenuCard/MenuCard.vue";
import type { MenuCardType } from "./menuCards.types.ts";
import Pagination from "../Pagination/Pagination.vue";

const menuCards: MenuCardType[] = [
  {
    id: 1,
    title: "Spaghetti",
    rate: 4,
    description:
      "Lorem ipsum dooolllor sittt ammmet, consectetur adipiscing elit. Egestas consequat mi eget auctor diam.",
    price: 12,
    src: foodImage_1,
  },
  {
    id: 2,
    title: "Gnocchi",
    rate: 4,
    description:
      "Lorem ipsum dooolllor sittt ammmet, consectetur adipiscing elit. Egestas consequat mi eget auctor diam.",
    price: 12,
    src: foodImage_2,
  },
  {
    id: 3,
    title: "Rovioli",
    rate: 4,
    description:
      "Lorem ipsum dooolllor sittt ammmet, consectetur adipiscing elit. Egestas consequat mi eget auctor diam.",
    price: 12,
    src: foodImage_3,
  },
  {
    id: 4,
    title: "Penne Alla Vodak",
    rate: 4,
    description:
      "Lorem ipsum dooolllor sittt ammmet, consectetur adipiscing elit. Egestas consequat mi eget auctor diam.",
    price: 12,
    src: foodImage_4,
  },
  {
    id: 5,
    title: "Risoto",
    rate: 4,
    description:
      "Lorem ipsum dooolllor sittt ammmet, consectetur adipiscing elit. Egestas consequat mi eget auctor diam.",
    price: 12,
    src: foodImage_5,
  },
  {
    id: 6,
    title: "Splitza Signature",
    rate: 4,
    description:
      "Lorem ipsum dooolllor sittt ammmet, consectetur adipiscing elit. Egestas consequat mi , ",
    price: 12,
    src: foodImage_6,
  },
];
</script>

<style lang="scss" scoped></style>
