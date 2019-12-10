<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <v-col cols="12" sm="12">
          <v-text-field v-model="item.nama" label="Nama Kategori"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" class="d-flex justify-center">
          <v-btn class="primary">Save</v-btn>
        </v-col>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require("axios").default;
const BASE_URL = "http://127.0.0.1:8000/api/kategori/";
export default {
  data() {
    return {
      item: {}
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      let app = this;
      let id = this.$route.params.id;
      axios.get(BASE_URL + id).then(res => {
        app.item = {};
        Object.assign(app.item, res.data.data);
      });
    }
  }
};
</script>