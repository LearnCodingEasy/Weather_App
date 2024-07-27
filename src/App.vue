<template>
  <div class="" :class="themeMode">
    <!-- Navebar -->
    <Disclosure as="nav" class="bg-black" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <!-- Right -->
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <div class="menu p-2 bg-gray-900 rounded-full mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                  />
                </svg>
              </div>
              <div class="notification p-2 bg-gray-900 rounded-full mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </div>
              <!-- location -->
              <div class="location p-2 text-white flex mx-1">
                <span class="icon mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>
                <span v-if="locationName"> {{ locationName }}</span>
              </div>
            </div>
            <!-- Search -->
            <div class="hidden sm:ml-6 sm:block flex flex-grow">
              <div class="flex space-x-4">
                <!-- <RouterLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  :class="[
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</RouterLink
                > -->
                <div class="relative w-full">
                  <div
                    class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none w-72"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    placeholder="Search..."
                    v-model="query"
                    @keypress="fetchWeather"
                    autocomplete="complete"
                    class="bg-gray-950 border font-bold text-lg rounded-3xl w-full ps-10 p-2.5 dark:bg-gray-700 text-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Lift -->
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              type="button"
              class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
            >
              <!-- <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
              -->
              <div class="flex flex-col justify-center ml-3">
                <input
                  type="checkbox"
                  name="light-switch"
                  class="light-switch sr-only"
                  @click="toggleTheme"
                />
                <label class="relative cursor-pointer p-2 flex justify-center" for="light-switch">
                  <svg
                    v-if="themeMode === 'light'"
                    width="17"
                    height="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-slate-300"
                      d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                    />
                    <path
                      class="fill-slate-400"
                      d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                    />
                  </svg>
                  <svg v-else width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path
                      class="fill-slate-400"
                      d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                    />
                    <path
                      class="fill-slate-500"
                      d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                    />
                  </svg>
                  <span class="sr-only">Switch to light / dark version</span>
                </label>
              </div>
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      ]"
                      >Your Profile</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      ]"
                      >Settings</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      ]"
                      >Sign out</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium'
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
      </DisclosurePanel>
    </Disclosure>

    <!-- <RouterView /> -->
    <div class="wrapper_weather_app bg-black">
      <div class="inner_weather_app container m-auto">
        <div class="flex">
          <!-- عنصر يأخذ 9/12 من العرض -->
          <div class="w-9/12 right p-4">
            <div class="wrapper">
              <ul class="tabs_choose text-white">
                <!-- Today -->
                <li @click="activeTab = '1'" :class="[activeTab === '1' ? 'activeLi' : '']">
                  <span class="text">Today</span>
                </li>
                <!-- Tomorrow -->
                <li @click="activeTab = '2'" :class="[activeTab === '2' ? 'activeLi' : '']">
                  <span class="text">Tomorrow</span>
                </li>
                <!-- Next 7 Days -->
                <li @click="activeTab = '3'" :class="[activeTab === '3' ? 'activeLi' : '']">
                  <span class="text">Next 7 Days</span>
                </li>
              </ul>
              <div class="tabs_content">
                <!-- Today -->
                <div class="today" v-if="activeTab === '1'">
                  <div class="wrapper_today">
                    <div class="inner_today">
                      <div class="header shadow-md">
                        <div class="flex justify-between">
                          <div class="today_name font-bold">
                            <!-- <p>Today's date is: {{ currentDate }}</p> -->
                            <p>{{ currentDay }}</p>
                          </div>
                          <div class="time_now font-bold">
                            <p>{{ currentTime }}</p>
                          </div>
                        </div>
                      </div>
                      <div class="main_weather_data py-3">
                        <div class="weather_data">
                          <!-- <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
                            <div class="location-box">
                              <div class="location">
                                {{ weather.name }}, {{ weather.sys.country }}
                              </div>
                              <div class="date">{{ dateBuilder() }}</div>
                            </div>
                            <div class="weather-box">
                              <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
                              <div class="weather">
                                {{ weather.weather[0].main }}
                              </div>
                            </div>
                          </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Tomorrow -->
                <div class="tomorrow" v-if="activeTab === '2'">about</div>
                <!-- Next 7 Days -->
                <div class="next_7_days" v-if="activeTab === '3'">friends</div>
              </div>
              <div class="wrappwr_map">
                <div class="inner_map">
                  <div class="map_header">
                    <div class="title_left">Global Map</div>
                    <div class="title_right">
                      <span class="text">view map</span>
                      <span class="icon"> </span>
                    </div>
                  </div>
                  <div class="map_main">
                    <WorldMap />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- عنصر يأخذ 3/12 من العرض -->
          <div class="w-3/12 p-4 text-white">هذا العنصر يأخذ 25% من العرض.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false }
]
</script>

<script>
import { useThemeStore } from '@/stores/theme'
import axios from 'axios'
import WorldMap from './components/WorldMap.vue'

export default {
  setup() {
    const themeStore = useThemeStore()

    const toggleTheme = () => {
      themeStore.toggleTheme()
      console.log('themeStore.toggleTheme(): ', themeStore.toggleTheme())
      console.log('themeStore: ', themeStore)
    }

    // تحميل الوضع المخزن في localStorage عند بدء التشغيل
    themeStore.setTheme(localStorage.getItem('themeMode') || 'light')

    return {
      themeMode: themeStore.themeMode,
      toggleTheme
    }
  },
  data() {
    return {
      locationName: '',
      ApiKeyOpenWeatherMap: '42c361f066758004d46238e25a4a4aab',
      URLOpenWeatherMap: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},
      activeTab: '1',
      // Time
      currentTime: '',
      // Date
      currentDate: '',
      currentDay: ''
    }
  },
  mounted() {
    this.fetchLocation()
    //
    this.updateTime()
    // تحديث الوقت كل ثانية
    setInterval(this.updateTime, 1000)
    // Date
    this.updateDateAndDay()
  },
  methods: {
    fetchLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getPosition, this.showError)
      } else {
        alert('Geolocation is not supported by this browser.')
      }
    },
    async getPosition(position) {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      const apiKey = '76304160b4ea4b0cb82c2992d666ff47'
      // استخدم مفتاح API الخاص بك هنا

      try {
        const response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`
        )
        const locationData = response.data.results[0]
        this.locationName = `${locationData.components.city} , ${locationData.components.country}`
        // console.log('locationData: ', locationData)
        // console.log('locationData: ', locationData.components.city)
        // console.log('locationData: ', locationData.components.country)
        // this.locationName = locationData.formatted
        // console.log('locationData.formatted: ', locationData.formatted)
      } catch (error) {
        console.error('Error fetching location:', error)
      }
    },
    showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert('User denied the request for Geolocation.')
          break
        case error.POSITION_UNAVAILABLE:
          alert('Location information is unavailable.')
          break
        case error.TIMEOUT:
          alert('The request to get user location timed out.')
          break
        case error.UNKNOWN_ERROR:
          alert('An unknown error occurred.')
          break
      }
    },

    fetchWeather(e) {
      // https://api.openweathermap.org/data/2.5/weather?q=egypt&units=metric&APPID=c72e791979261179c0e835f9c05a1baf
      //   https://openweathermap.org/
      if (e.key == 'Enter') {
        fetch(
          `${this.URLOpenWeatherMap}weather?q=${this.query}&units=metric&APPID=${this.ApiKeyOpenWeatherMap}`
        )
          .then((res) => {
            console.log('res.json(): ', res)
            // console.log('res.json(): ', res.json())
            // console.log('res.json(): ', res.data)
            return res.json()
          })
          .then((data) => {
            console.log('Weather Data: ', data)
            this.setResults(data)
          })
          .then(this.setResults)
      }
    },
    setResults(results) {
      this.weather = results
    },
    dateBuilder() {
      let d = new Date()
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      let day = days[d.getDay()]
      let date = d.getDate()
      let month = months[d.getMonth()]
      let year = d.getFullYear()
      return `${day} ${date} ${month} ${year}`
    },
    // Time
    updateTime() {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      this.currentTime = `${hours}:${minutes}:${seconds}`
    },
    // Date
    updateDateAndDay() {
      const now = new Date()

      // جلب التاريخ بالشكل المطلوب
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0') // الأشهر من 0 إلى 11
      const day = String(now.getDate()).padStart(2, '0')
      this.currentDate = `${year}-${month}-${day}`

      // جلب اليوم بالشكل المطلوب
      const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
      this.currentDay = daysOfWeek[now.getDay()]
    }
  },

  components: {
    WorldMap
  }
}
</script>

<style lang="scss">
.light {
  background-color: white;
  color: black;
}

.dark {
  background-color: black;
  color: white;
}
.wrapper_weather_app {
  .inner_weather_app {
    .flex {
      .right {
        .wrapper {
          .tabs_choose {
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            li {
              list-style: none;
              margin-right: 1rem;
              cursor: pointer;
            }
          }
          .tabs_content {
            margin: 1rem 0;
            min-height: 300px;
            .today {
              .wrapper_today {
                .inner_today {
                  // padding: 1rem;
                  background-color: #aad3df;
                  .header {
                    background-color: #aecadf;
                    padding: 1rem;
                  }
                  .main_weather_data {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.today {
  // background-image: url(./assets/images/hot.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.warm {
  // background-image: url(./assets/images/weather-sun-cloud-rain-512.png);
}
</style>
