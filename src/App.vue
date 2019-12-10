<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/ivent">Event</v-btn>
        <v-btn text to="/info">Info</v-btn>
        <v-btn text to="/form">Form</v-btn>
        <v-btn text to="/table">Table</v-btn>
        <v-switch style="margin-top: 20px" v-model="light" v-if="!light" label="Light"></v-switch>
        <v-switch style="margin-top: 20px" v-model="light" v-else label="Dark"></v-switch>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script>
export default {
  name: "App",
  data() {
    return {
      light: true
    };
  },
  created() {
    this.light = this.$store.state.light;
  },
  watch: {
    light() {
      this.$vuetify.theme.dark = this.light;
      return this.$store.state.light;
    }
  }
};
</script>