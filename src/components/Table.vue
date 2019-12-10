<template>
  <v-container fluid>
    <v-app-bar>
      <v-toolbar-items>
        <v-btn text to="/table">User</v-btn>
        <v-btn text to="/table/kategori">Kategori</v-btn>
        <v-btn text to="subkategori">Subkategori</v-btn>
        <v-btn text to="tag">Tag</v-btn>
        <v-btn text to="transaksi">Transaksi</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-container>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-container>
  </v-container>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>