<template>
  <GmapMap
  :center="{lat: parseFloat(apt.lat), lng: parseFloat(apt.lng)}"
  :zoom="15"
  style=" height: 400px">
    <GmapMarker
      :position="{lat: parseFloat(apt.lat), lng: parseFloat(apt.lng)}"
      :clickable="true"
      :draggable="true"
    />
    <GmapMarker
      v-if="point"
      :position="{lat: point.lat, lng: point.lng}"
      :clickable="true"
      :draggable="true"
    />
  </GmapMap>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:"GoogleMap",
    props: {
      apt: Object,
    },
    computed: {
        ...mapGetters({
          point: 'getClickedStore'
        })
    },
}
</script>

<style>

</style>