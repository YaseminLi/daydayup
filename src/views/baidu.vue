<template>
  <div>
    <div id="allmap"></div>
    <input type="text" v-model="address" placeholder="baiduuuu" />
  </div>
</template>

<script>
export default {
  name: 'gaode',
  data() {
    return {
      address: ''
    }
  },
  created() {
    console.log('created')
    this.loadmap()
  },
  methods: {
    loadmap() {
      var map = new BMap.Map('allmap')
      var point = new BMap.Point(116.331398, 39.897445)
      map.centerAndZoom(point, 12)

      var geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point)
          map.addOverlay(mk)
          map.panTo(r.point)
          alert('您的位置：' + r.point.lng + ',' + r.point.lat)
        } else {
          alert('failed' + this.getStatus())
        }
      })
    }
  }
}
</script>

<style></style>
