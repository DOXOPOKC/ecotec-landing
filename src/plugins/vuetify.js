import Vue from "vue";
import Vuetify from "vuetify/lib";
import ru from "vuetify/es5/locale/ru";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#11a67c",
        secondary: "#1A1A1A",
        blue: "#1565c0"
      },
    },
  },
  lang: {
    locales: { ru },
    current: "ru",
  },
  icons: {
    iconfont: "fa4",
  },
});
