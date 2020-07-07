<template>
    <v-container
      class="pa-0"
      fluid
      id="hero"
      style="background: blue"
    >
        <v-row
          justify="center"
          align-content="space-between"
          no-gutters
          class="fill-height"
        >
          <v-col cols="12">
            <v-card height="80px" color="transparent" flat></v-card>
          </v-col>
          <v-col class="text-left pa-0" lg="4" sm="12">
            <v-card flat class="" color="transparent" dark max-width="510">
              <v-card-title>
                <h1 class="display-3 font-weight-regular mb-4">
                  Чеклисты
                </h1>
              </v-card-title>
              <v-card-text>
                <h4 class="display-2 white--text">- это гибкая система контроля процессов, сотрудников и задач</h4>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  large
                  outlined
                  rounded
                  block
                  @click="$vuetify.goTo('#sobre')"
                  >Подробнее
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="text-left" lg="5" sm="12">
            <v-img
              alt="Header Image"
              class="mx-auto my-12"
              contain
              src="@/assets/img/mockupe2r.png"
              max-width="280"
            ></v-img>
          </v-col>
          <v-col cols="12" >
            <v-sparkline
              :value="value"
              :smooth="radius || false"
              :padding="padding"
              :line-width="lineWidth"
              :stroke-linecap="lineCap"
              color="white"
              :fill="fill"
              :type="type"
              :auto-line-width="autoLineWidth"
              auto-draw
            ></v-sparkline>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,224L48,186.7C96,149,192,75,288,85.3C384,96,480,192,576,202.7C672,213,768,139,864,90.7C960,43,1056,21,1152,10.7C1248,0,1344,0,1392,0L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> -->
          </v-col>
        </v-row>
    </v-container>
    <!-- <v-container fluid class="fill-height">
      <v-row class="fill-height" align="center" justify="center" no-gutters>
        <v-col class="text-left fill-height" cols="6" xs="12">
          <h1 class="display-3 font-weight-regular mb-4">
            Чеклисты
          </h1>
          <h4 class="display-1 ml-8">- это гибкая система контроля процессов, сотрудников и задач</h4>
          <v-btn
            color="white"
            outlined
            rounded
            class="mt-6"
            @click="$vuetify.goTo('#sobre')"
            >Подробнее</v-btn>
        </v-col>
        <v-col class="text-left" cols="5" xs="12"></v-col>
      </v-row>
  </v-container> -->
</template>

<script>
export default {
  name: "Intro",
  data: () => ({
    showLabels: false,
    lineWidth: 2,
    labelSize: 7,
    radius: 16,
    padding: 0,
    lineCap: 'round',
    gradient: '#000000',
    value: [423,
        446,
        675,
        510,
        590,
        610,
        760],
    gradientDirection: 'bottom',
    fill: true,
    type: 'trend',
    autoLineWidth: false,
  })
};
</script>

<style scoped>
.a {
  fill: none;
}
.b {
  clip-path: url(#a);
}
.d {
  opacity: 0.5;
  isolation: isolate;
}
.svg-border-waves svg {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
}
svg {
  overflow: hidden;
}
section {
  position: relative;
}
</style>
