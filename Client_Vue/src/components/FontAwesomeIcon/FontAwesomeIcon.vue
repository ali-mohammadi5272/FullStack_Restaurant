<template>
  <Icon v-if="iconDefinition" :icon="iconDefinition" :class="props.class" />
</template>

<script lang="ts" setup>
import { FontAwesomeIcon as Icon } from "@fortawesome/vue-fontawesome";
import { icons } from "../../utils/icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import type { FontAwesomeIconPropsType } from "./fontAwesomeIcon.types";
import { library, type IconDefinition } from "@fortawesome/fontawesome-svg-core";

const props = defineProps<FontAwesomeIconPropsType>();

library.add(fas);

const iconDefinition: IconDefinition | undefined = icons[props.icon];
</script>

<style lang="scss" scoped></style>
