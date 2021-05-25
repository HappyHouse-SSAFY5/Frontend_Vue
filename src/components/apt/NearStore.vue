<template>
<div>
  <v-alert
    color="indigo darken-3"
    dark
    icon="mdi-store"
    border="left"
    dense
  >
    500M 이내에 다음과 같은 상권이 조성되어있습니다.
  </v-alert>
  
  
  <v-simple-table
    height="325"
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            업종 분류
          </th>
          <th class="text-center">
            상호명
          </th>
          <th class="text-center">
            도로명 주소
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(store, idx) in stores" :key="idx"
          @click="markThisStoreOnMap(store)"
        >
          <td>{{ store.sm_part_name }}</td>
          <td>{{ store.storeName }}</td>
          <td>{{ store.address }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'NearStore',
    props:{
      apt: Object,
    },
    data(){
      return{}
    },
    computed:{
      ...mapGetters({
        stores: 'getStores'
      })
    },
    methods:{
      ...mapActions(['drawMarker']),
      markThisStoreOnMap(store){
        this.drawMarker(store);
      },
    }
}
</script>

<style>

</style>