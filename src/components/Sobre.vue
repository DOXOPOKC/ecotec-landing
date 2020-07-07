<template>
    <v-container fluid id="sobre" class="my-12">
      <v-row justify="center" align="center" no-gutters style="max-width: 1200px" class="mx-auto">
        <v-col cols="12" md="4" class="d-none d-md-flex justify-center">
          <v-img src="@/assets/img/profile_analysis_.svg" max-width="400px" />
        </v-col>
        <v-col cols="12" sm="10" md="8" class="text-center">
          <h1 class="display-2 font-weight-light my-12">О системе</h1>
          <p class="body-1 text-justify mx-auto" style="max-width: 600px">
            Вы можете заполнять чек-листы как со стационарного ПК так и с мобильного телефона,
            у вас есть 7 типов вопросов с атрибутами ожидаемых ответов, обязательных и необязательных.
            Администратор создает вопрос, пользователи заполняют.
          </p>
          <v-btn
            rounded
            outlined
            class="ma-6"
            color="blue"
            @click="$vuetify.goTo('#contatos')"
          >Связаться с нами</v-btn>
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
};
</script>
