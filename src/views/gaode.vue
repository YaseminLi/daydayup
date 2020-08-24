<template>
  <input type="text" v-model="address" placeholder="hhhhhhh" />
</template>

<script>
export default {
  name: 'gaode',
  data () {
    return {
      address: ''
    }
  },
  created () {
    console.log('created')
    this.loadmap()
  },
  methods: {
    loadmap(){
      AMap.plugin('AMap.CitySearch', function () {
      var citySearch = new AMap.CitySearch()
      citySearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          console.log('定位成功：',result)
        }else{
          console.log('定位失败')
        }
      })
      })
    }
  }
}
  //   loadmap(){
  //     AMap.plugin('AMap.Geolocation', function() {
  // var geolocation = new AMap.Geolocation({
  //   // 是否使用高精度定位，默认：true
  //   enableHighAccuracy: true,
  //   // 设置定位超时时间，默认：无穷大
  //   timeout: 10000,
  //   // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
  //   buttonOffset: new AMap.Pixel(10, 20),
  //   //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
  //   zoomToAccuracy: true,     
  //   //  定位按钮的排放位置,  RB表示右下
  //   buttonPosition: 'RB'
  // })

  // geolocation.getCurrentPosition()
  // AMap.event.addListener(geolocation, 'complete', onComplete)
  // AMap.event.addListener(geolocation, 'error', onError)

  // function onComplete (data) {
  //   console.log('定位成功：',data)
  // }

  // function onError (data) {
  //   console.log('定位失败：',data)
  // }
// })
    // loadmap () {
    //   var mapObj = new AMap.Map('iCenter')
    //   mapObj.plugin('AMap.Geolocation', function() {
    //     var geolocation = new AMap.Geolocation({
    //       enableHighAccuracy: true, // 是否使用高精度定位，默认:true
    //       timeout: 10000, // 超过10秒后停止定位，默认：无穷大
    //       maximumAge: 0, // 定位结果缓存0毫秒，默认：0
    //       convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
    //       showButton: true, // 显示定位按钮，默认：true
    //       buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
    //       buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    //       showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
    //       showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
    //       panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
    //       zoomToAccuracy: true // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    //     })
    //     mapObj.addControl(geolocation)
    //     geolocation.getCurrentPosition()
    //     // 返回定位信息
    //     // eslint-disable-next-line
    //     AMap.event.addListener(geolocation, 'complete', result => {
    //       // eslint-disable-next-line
    //       console.log('定位成功：',result)
    //     })
    //     // 返回定位出错信息
    //     // eslint-disable-next-line
    //     AMap.event.addListener(geolocation, 'error', result => {
    //       // console.log(result)
    //       console.log('定位失败：',result)
    //     })
    //   })
    // }

</script>

<style></style>
