import React, {memo} from "react";

<template>
  <div
      class="grid justify-center grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6 my-10 sm:my-20">
    <ChefCard v-for="card in chefCards" :key="card.id" :img="card.img" :name="card.name" :role="card.role"/>
  </div>
</template>

<script lang="ts" setup>
import ChefCard from "../ChefCard/ChefCard.vue";
import chefImage_1 from "./../../assets/images/image 1.png";
import chefImage_2 from "./../../assets/images/image 3.png";
import chefImage_3 from "./../../assets/images/image 2.png";
import type {ChefCardType} from "./chefCards.type.ts";

const chefCards: ChefCardType[] = [
  {
    id: 1,
    name: "Betran Komar",
    role: "Head chef",
    img: chefImage_1,
    imageClass: "bg-[#C4C4C4]",
  },
  {
    id: 2,
    name: "Ferry Sauwi",
    role: "Chef",
    img: chefImage_2,
    imageClass: "bg-[#ffe8cc]",
  },
  {
    id: 3,
    name: "Iswan Dracho",
    role: "Chef",
    img: chefImage_3,
    imageClass: "bg-[#dce9e1]",
  },
  {
    id: 4,
    name: "Betran Komar",
    role: "Head chef",
    img: chefImage_1,
    imageClass: "bg-[#ebe0d9]",
  },
];
</script>
