<template>
  <v-container fluid class="pa-0 fill-height">
    <Intro />
    <Sobre />
    <Sobre1 />
    <Sobre2 />
    <Services />
    <Sobre3 />
    <Footer />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Sobre from "@/components/Sobre.vue";
import Sobre1 from "@/components/Sobre1.vue";
import Sobre2 from "@/components/Sobre2.vue";
import Sobre3 from "@/components/Sobre3.vue";
import Services from "@/components/Services.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Intro,
    Sobre,
    Sobre1,
    Sobre2,
    Sobre3,
    Services,
    Footer
  },
};
</script>
