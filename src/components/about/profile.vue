<template>
  <v-card
      class="mx-auto"
      color="deep-purple darken-3"
      dark
      max-width="500"
    >
      <v-card-title style="background-color:white;margin-bottom: 12px;">
        <v-icon
          large
          left
          color="indigo darken-4"
        >
          mdi-meditation
        </v-icon>
        <span class="title roboto-bold" style="color: #1A237E;">Developer</span>
      </v-card-title>
  
      <v-card-text class="headline font-weight-bold">
        "{{desc}}"
      </v-card-text>
  
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-10"
              alt=""
              :src="src"
            ></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title class="roboto-bold"> {{name}} <v-icon>mdi-emoticon-wink-outline</v-icon></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name:"Profile",
    props:{
        name: String,
        src: String,
        desc: String,
    },
}
</script>

<style>
.roboto-bold{
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 16px;
}
</style>