<template>
  <v-app mx-6>
    <AppNavbar :color="color" :flat="flat" />
    <!-- <AppSidebar /> -->
    <v-main class="pb-0">
      <router-view />
    </v-main>
    <!-- <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>fa-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition> -->
  </v-app>
</template>

<script>
// import Appbar from "@/components/Appbar"
import AppNavbar from "@/components/layouts/components/AppNavbar"
import AppSidebar from "@/components/layouts/components/AppSidebar"

export default {
  name: "App",

  components: {
    AppNavbar,
    AppSidebar
  },

  data: () => ({
    fab: null,
    color: "white",
    flat: true,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 20) {
      // this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    $route(to, from) {
      document.title = to.meta.title || "Landing Page";
    },
    fab(value) {
      if (value) {
        this.flat = false;
      } else {
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
