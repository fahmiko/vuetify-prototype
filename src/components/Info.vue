<template>
  <v-row>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-col md="12">
      <v-container>
        <h1 class="text-center">About</h1>
        <p
          class="mt-5"
        >Brunei is covered in lush rainforest, dotted with beautiful mosques, and blessed with amazing food. But look beyond the surface, and something even more wonderful is revealed—our people. With an astonishing wealth of culture, values and heritage, they are what make Brunei come alive. They are the heart and soul of Brunei.</p>
      </v-container>
    </v-col>
    <v-container>
      <div class="row">
        <div class="col-md-4" v-for="index in items" :key="index">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>Share</v-btn>

              <v-btn color="orange" text>Explore</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </v-container>
    <v-container>
      <h2 class="text-center mt-3">Booking</h2>
      <v-card>
        <v-tabs v-model="tab" background-color="primary" centered dark icons-and-text>
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1" style="text-decoration:none">
            Recents
            <v-icon>mdi-phone</v-icon>
          </v-tab>

          <v-tab href="#tab-2" style="text-decoration:none">
            Favorites
            <v-icon>mdi-heart</v-icon>
          </v-tab>

          <v-tab href="#tab-3" style="text-decoration:none">
            Nearby
            <v-icon>mdi-account-box</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
            <v-card flat>
              <div class="container d-flex content-center" v-if="i == 1">
                <div class="row">
                  <div class="col-md-6">
                    <v-label>Select Destination</v-label>
                    <v-select :items="items" label="Solo field" solo></v-select>
                  </div>
                  <div class="col-md-6">
                    <v-label>Select Date</v-label>
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="date"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="date" label="Select Date" readonly v-on="on"></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </div>
                  <div class="col-md-12 d-flex justify-center">
                    <button
                      @click.stop="dialog = true"
                      class="btn btn-warning btn-lg"
                      style="color: white"
                    >Reserve</button>
                  </div>
                </div>
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
    <v-container>
      <h2 class="text-center mt-5">Social</h2>
      <div class="row">
        <div class="col-md-6 d-flex justify-content-center">
          <v-icon>mdi-facebook</v-icon>
          <label>Facebook</label>
          <v-icon class="ml-3">mdi-twitter</v-icon>
          <label>Twitter</label>
        </div>
      </div>
    </v-container>
    <div class="container-fluid d-flex justify-center mt-4">
      <p>© 2019 Royal Brunei Airlines. All rights reserved.</p>
    </div>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>

        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        }
      ],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      dialog: false,
      modal: false,
      menu2: false,
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    reserve: function() {
      this.modal = true;
    }
  }
};
</script>