<template>
    
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    isSm: false,
    items: [
      ["fa-home", "Home", "#hero"],
      ["fa-info", "Sobre", "#sobre"],
      ["fa-th", "Serviços", "#servicos"],
      ["fa-envelope-o", "Contatos", "#contatos"],
    ]
  }),
  props: {
    color: String,
    flat: Boolean,
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
  },
};
</script>
