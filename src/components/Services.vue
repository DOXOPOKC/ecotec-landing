<template>
    <v-container fluid class="pa-0 my-12" id="servicos">
      <v-row align="center" justify="center">
        <div class="text-center">
          <h1 class="display-2 font-weight-light my-12">Типы вопросов:</h1>
          <!-- <p class="font-weight-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> -->
        </div>
      </v-row>
      <v-row justify="center" align="center" style="max-width: 1200px" class="mx-auto">
        <v-col
          cols=""
          md=""
          sm="12"
          v-for="([icon, titulo], i) in servicos"
          :key="i"
          class="text-center"
        >
          <v-card color="transparent" flat>
            <v-icon size="50" color="black" class="ma-6">{{ icon }}</v-icon>
            <v-card-text>
              <h1 class="font-weight-light">{{ titulo }}</h1>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: "Sobre",
  data: () => ({
    servicos: [
      [
        "fa-dot-circle-o",
        "Да/Нет",
      ],
      [
        "fa-check-square",
        "Один из многих",
      ],
      [
        "fa-font",
        "Текст",
      ],
      [
        "fa-sort-numeric-asc",
        "Цифра",
      ],
      [
        "fa-picture-o",
        "Фотография",
      ],
      [
        "fa-address-card-o",
        "Адрес",
      ],
      [
        "fa-phone-square",
        "Номер телефона",
      ],
    ],
  }),
};
</script>
