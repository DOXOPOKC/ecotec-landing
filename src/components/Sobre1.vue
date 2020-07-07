<template>
    <v-container fluid id="sobre" class="mb-12">
      <v-row justify="center" align="center" no-gutters style="max-width: 1200px" class="mx-auto">
        <v-col lg="12" sm="10" md="8" class="text-center">
          <h1 class="display-2 font-weight-light my-12">Система отчетов на основе</h1>
          <p class="body-1 text-justify mx-auto" style="max-width: 600px">
            1. Ожидаемых ответов за период (например в качестве отчета по инцедентам)
          </p>
          <p class="body-1 text-justify mx-auto" style="max-width: 600px">
            2. Выгрузка в Excel ответов за период
          </p>
        </v-col>
        <v-col lg="12" class="justify-center mt-6">
          <v-card>
            <v-img src="@/assets/img/Reports.png" max-width="1200px" />
          </v-card>
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
