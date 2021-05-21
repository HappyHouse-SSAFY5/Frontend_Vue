<template>
  <GmapMap
  :center="{lat: parseFloat(apt.lat), lng: parseFloat(apt.lng)}"
  :zoom="15"
  style="width: 500px; height: 300px">
    <GmapMarker
      :position="{lat: parseFloat(apt.lat), lng: parseFloat(apt.lng)}"
      :clickable="true"
      :draggable="true"
      />
  </GmapMap>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:"GoogleMap",
    computed: {
        ...mapGetters({
          apt: 'getApt'
        })
    },
}
</script>

<style>

</style>