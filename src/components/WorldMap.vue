<template>
  <div id="map"></div>
</template>

<!-- <script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'WorldMap',
  mounted() {
    this.initializeMap()
  },
  methods: {
    initializeMap() {
      // ضبط المركز والمستوى الافتراضي للعرض
      const map = L.map('map').setView([20, 0], 2) 

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)
    }
  }
}
</script> -->
<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'WorldMap',
  mounted() {
    this.initializeMap()
  },
  methods: {
    initializeMap() {
      const map = L.map('map').setView([20, 0], 2) // ضبط المركز والمستوى الافتراضي للعرض

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      // الحصول على الموقع الحالي للمستخدم
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            const userLocation = [latitude, longitude]

            // تحديث عرض الخريطة للموقع الحالي للمستخدم
            map.setView(userLocation, 5)

            // إضافة علامة للموقع الحالي للمستخدم
            L.marker(userLocation).addTo(map).bindPopup('You are here!').openPopup()
          },
          (error) => {
            console.error('Error getting location:', error)
          }
        )
      } else {
        console.error('Geolocation is not supported by this browser.')
      }
    }
  }
}
</script>
<style>
#map {
  width: 100%;
  height: 300px;
  max-height: 100vh;
  /* عرض الخريطة بملء الشاشة */
}
</style>
