<template>
  <div class="container">
    <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1">
      <template v-slot:item.action="{item}">
        <router-link :to="`/table/kategori/edit/${item.kategori_id}`" class="fa fa-edit"></router-link>
        <button class="fa fa-trash ml-2"></button>
      </template>
    </v-data-table>
  </div>
</template>
<script>
const axios = require("axios").default;
const BASE_URL = "http://127.0.0.1:8000/api/kategori";
export default {
  data() {
    return {
      headers: [
        {
          text: "nama",
          value: "nama"
        },
        {
          text: "Action",
          value: "action"
        }
      ],
      items: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      var app = this;
      axios.get(BASE_URL).then(res => {
        app.items = res.data.data;
      });
    }
  }
};
</script>