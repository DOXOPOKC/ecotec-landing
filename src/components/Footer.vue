<template>
  <v-footer
    padless
    dark
    color="white"
    app
    inset
    absolute
  >
    <v-row no-gutters>
      <v-col cols="12">
        <v-card
          flat
          tile
          class="mx-auto"
        >
          <v-card-text class="py-1 white--text">
            {{ new Date().getFullYear() }} — <strong>ООО "УК "ЛЭНД ФИНАНС"</strong>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
};
</script>
