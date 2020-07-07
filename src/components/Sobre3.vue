<template>
    <v-container fluid id="contatos" class="mb-12 pb-12">
      <v-row justify="center" align="center" no-gutters style="max-width: 1200px" class="mx-auto">
        <v-col cols="12" md="4" class="d-none d-md-flex justify-center">
          <v-img src="@/assets/img/analysis_.svg" max-width="400px" />
        </v-col>
        <v-col cols="12" sm="10" md="8" class="text-center">
          <v-card flat>
            <v-card-title>
              <h1 class="display-2 font-weight-light my-12 mx-auto">Как использовать:</h1>
            </v-card-title>
          </v-card>
          <v-card-text class="pa-0 ma-0">
            <v-list rounded max-width="600px" class="mx-auto">
              <v-list-item-group v-model="item" color="primary" class="text-start">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
</template>

<style scoped>
.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  color: #eaeaea;
}
.content {
  z-index: 1;
}
svg {
  overflow: hidden;
}
section {
  position: relative;
}
</style>

<script>
export default {
  name: "Sobre",
  data: () => ({
    item: 0,
    items: [
      { text: '1. Свяжитесь с нами по email - glushkov_gv@landfinance.ru', icon: 'mdi-clock' },
      { text: '2. Мы обговорим задачу и создадим чек-лист', icon: 'mdi-account' },
      { text: '3. Заведем ваших пользователей для работы в системе', icon: 'mdi-flag' },
      { text: '4. Совместно запустим и проконтроируем первые этапы работы', icon: 'mdi-flag' },
    ],
  }),
};
</script>
