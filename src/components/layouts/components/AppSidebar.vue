<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
  >
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <img src="@/assets/img/logo.png" alt="Logo" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">Чеклисты</v-list-item-title>
          <v-list-item-subtitle>WEB</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item
        v-for="([icon, text, link], i) in items"
        :key="i"
        link
        @click="$vuetify.goTo(link)"
      >
      <v-list-item-icon class="justify-center">
        <v-icon>{{icon}}</v-icon>
      </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="subtitile-1">{{text}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    items: [
      ["fa-home", "Home", "#hero"],
      ["fa-info", "Sobre", "#sobre"],
      ["fa-th", "Serviços", "#servicos"],
      ["fa-envelope-o", "Contatos", "#contatos"],
    ]
  }),
  computed: {
    ...mapState(['drawer'])
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
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