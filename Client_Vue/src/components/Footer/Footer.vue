<template>
  <footer class="footer bg-[#311F09] text-[#E3E2E0] text-sm sm:text-xl py-14">
    <InnerContainer>
      <div class="md:flex justify-between py-24">
        <section class="space-y-8 md:w-2/5">
          <img :src="logo" alt="Logo" class="text-[#E3E2E0]" />
          <p>
            Viverra gravida morbi egestas facilisis tortor netus non duis
            tempor.
          </p>
          <div class="flex gap-5 pb-10">
            <div class="footer__iconWrapper">
              <FontAwesomeIcon class="footer__icon" icon="twitter" />
            </div>
            <div class="footer__iconWrapper">
              <FontAwesomeIcon class="footer__icon" icon="instagram" />
            </div>
            <div class="footer__iconWrapper">
              <FontAwesomeIcon class="footer__icon" icon="facebook" />
            </div>
          </div>
        </section>
        <section
          class="md:flex justify-between md:w-3/5 space-y-10 md:space-y-0 md:gap-4"
        >
          <div class="footer__linksSection">
            <h3 class="footer__linksSectionTitle">Page</h3>
            <router-link to="/">Home</router-link>
            <router-link to="#">Menu</router-link>
            <router-link to="#">Order online</router-link>
            <router-link to="#">Catering</router-link>
            <router-link to="#">Reservation</router-link>
          </div>
          <div class="footer__linksSection">
            <h3 class="footer__linksSectionTitle">Information</h3>
            <router-link to="#">About us</router-link>
            <router-link to="#">Testimonial</router-link>
            <router-link to="#">Event</router-link>
          </div>
          <div class="footer__linksSection">
            <h3 class="footer__linksSectionTitle">Get in touch</h3>
            <span>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</span>
            <span>delizioso@gmail.com</span>
            <span>+123 4567 8901</span>
          </div>
        </section>
      </div>
      <p class="md:text-center">Copyright c 2022 Delizioso</p>
    </InnerContainer>
  </footer>
</template>

<script lang="ts" setup>
import InnerContainer from "../InnerContainer/InnerContainer.vue";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon.vue";
import logo from "./../../assets/images/Logo Delizioso2.png";
</script>

<style lang="scss" scoped>
.footer {
  &__iconWrapper {
    @apply bg-[#E3E2E0] flex justify-center items-center rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px];
  }

  &__icon {
    @apply w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] text-black;
  }

  &__linksSection {
    @apply flex flex-col gap-5 flex-grow;
  }

  &__linksSectionTitle {
    @apply text-primary mb-3 sm:text-2xl;
  }
}
</style>
