<template>
  <v-container>
    <v-data-table :headers="headers" :items="items" class="elevation-5">
      <template v-slot:item.action="{item}">
        <button class="fa fa-pencil" @click="edit(item)"></button>
        <button class="fa fa-trash ml-2" @click="del(item)"></button>
      </template>
      <template v-slot:top>
        <v-btn color="primary" @click="create()">Create</v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="modal" width="800px">
      <v-card>
        <v-container>
          <v-card-title>{{action}}</v-card-title>
          <form @submit.prevent="save(item)">
            <v-row>
              <v-col cols="md-12" v-if="!errors.status">
                <div class="alert alert-danger" role="alert">{{errors.message}}</div>
              </v-col>
              <v-col cols="md-6">
                <input type="hidden" v-model="item.id" />
                <v-text-field v-model="item.name" label="Nama"></v-text-field>
              </v-col>
              <v-col cols="md-6">
                <v-text-field type="email" v-model="item.email" label="Email"></v-text-field>
              </v-col>
              <v-col cols="md-12">
                <v-text-field type="password" v-model="item.password" label="New Password"></v-text-field>
              </v-col>
              <div class="col-md-12 d-flex justify-center">
                <button type="submit" class="btn btn-primary ml-2">{{bsave}}</button>
              </div>
            </v-row>
          </form>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
const BASE_URL = "http://127.0.0.1:8000/api/user";
let axios = require("axios").default;
axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";

export default {
  data() {
    return {
      modal: false,
      action: "",
      headers: [],
      item: {},
      items: [],
      bsave: "Save",
      errors: {
        status: true,
        message: ""
      }
    };
  },
  created() {
    this.setHeader();
    this.setItems();
  },
  methods: {
    setHeader: function() {
      this.headers = [
        {
          text: "Nama",
          value: "name"
        },
        {
          text: "Email",
          value: "email"
        },
        {
          text: "Tanggal daftar",
          value: "created_at"
        },
        {
          text: "Action",
          value: "action"
        }
      ];
    },
    setItems: function() {
      let that = this;
      axios.get(BASE_URL).then(res => {
        that.items = res.data.data;
      });
    },
    edit: function(item) {
      Object.assign(this.item, item);
      this.modal = true;
      this.action = "Update";
    },
    create: function() {
      this.modal = true;
      this.action = "Create";
      this.item = {};
    },
    save: function() {
      let that = this;
      let action = "post";
      if (this.action.toLowerCase() == "update") {
        action = "put";
      }

      that.bsave = "Saving...";

      axios({
        url: BASE_URL,
        method: action,
        data: this.item
      }).then(res => {
        console.log(res);
        let data = res.data;
        if (data.status == "success") {
          that.modal = false;
          alert("Data berhasil disimpan");
        } else {
          that.errors.status = false;
          that.errors.message = data.message;
        }
        this.setItems();
        that.bsave = "Save";
      });
    },
    del: function(item) {
      if (confirm("Yakin ingin hapus ?")) {
        axios.delete(BASE_URL, { params: { id: item.id } }).then(res => {
          if (res.data.status == "success") {
            this.setItems();
          }
        });
      }
    }
  }
};
</script>