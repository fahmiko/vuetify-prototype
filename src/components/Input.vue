<template>
  <v-row align="center">
    <v-container style="max-width: 60%">
      <v-card shaped>
        <v-card-title>Form</v-card-title>
        <v-card-text>
          <input type="text" v-model="input.name" :class="styleObject" />
          <div class="valid-feedback">Karakter mencukupi</div>
          <div class="invalid-feedback">Kurang dari 5 karakter</div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-row>
</template>
<script>
export default {
  data: () => {
    return {
      status: false,
      styleClass: {
        success: "form-control is-valid",
        normal: "form-control",
        error: "form-control is-invalid"
      },
      input: {
        name: ""
      }
    };
  },
  computed: {
    styleObject() {
      if (this.input.name.length < 5 && this.input.name.length > 0) {
        return this.styleClass.error;
      }

      if (this.input.name.length >= 5) {
        return this.styleClass.success;
      }

      return this.styleClass.normal;
    }
  }
};
</script>