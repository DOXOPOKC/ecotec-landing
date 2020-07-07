<template>
  <v-app-bar app :color="color" :flat="flat">
    <div class="d-flex align-center">
      <v-img
        alt="Logo"
        class="shrink mr-2"
        contain
        src="@/assets/img/blue-tick2 (1).png"
        transition="scale-transition"
        width="32"
      />
    </div>
    <v-spacer></v-spacer>
    <!-- <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
      class="mr-4"
      v-if="isSm"
    /> -->
    <div v-if="!isSm">
      <v-btn text @click="$vuetify.goTo('#hero', 0, 500)">
        <span class="mr-2">Чеклисты</span>
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#sobre', 0, 500)">
        <span class="mr-2">О нас</span>
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#servicos', 0, 500)">
        <span class="mr-2">Сервисы</span>
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#contatos', 0, 500)">
        <span class="mr-2">Контакты</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    isSm: false
  }),
  props: {
    color: String,
    flat: Boolean
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true })
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true })
  },

  methods: {
    onResize() {
      this.isSm = window.innerWidth < 960;
    },
  }
}
</script>

<style>

</style>