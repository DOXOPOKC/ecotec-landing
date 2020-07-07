<template>
    <v-container fluid class="mb-12">
      <v-row justify="center" align="center" no-gutters style="max-width: 1200px" class="mx-auto">
        <v-col cols="12" sm="2" md="4" class="justify-center">
          <v-card>
            <v-img src="@/assets/img/Screenshot_20200706_115320.png" max-width="400px" />
          </v-card>
        </v-col>
        <v-col cols="12" sm="10" md="8" class="text-center">
          <h1 class="display-2 font-weight-light my-12">Дополнительные инструменты контроля</h1>
          <p class="body-1 text-justify mx-auto" style="max-width: 600px">
            1. Отправка на email отчетов по заданным параметрам в режиме онлайн
          </p>
          <p class="body-1 text-justify mx-auto" style="max-width: 600px">
            2. Отображение на карте в качестве дополнительного контроля
          </p>
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
