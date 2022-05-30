<template>
  <div class="container p-4 mx-auto">
    <div v-if="loadingData" class="h-screen flex justify-center items-center">
      loading...
    </div>
    <div v-else class="space-y-6">
      <img :src="user.avatar" class="w-20 h-20 rounded-full mx-auto" alt="">

      <div class="text-center">
        <h1 class="font-bold text-lg">{{ user.name }} {{ user.last_name }}</h1>
        <div class="opacity-70">{{ user.profession }}</div>
      </div>

      <ul class="flex justify-center items-center space-x-3">
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <div class="h-4 w-px bg-black"></div>
        </li>
        <li>
          <a href="#">Linkedin</a>
        </li>
        <li>
          <div class="h-4 w-px bg-black"></div>
        </li>
        <li>
          <a href="#">Github</a>
        </li>
      </ul>

      <div class="bg-gray-50 p-4 rounded">
        {{ user.testimony }} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem tempora totam vel
        voluptatibus. Doloremque doloribus dolorum est illum in maxime minima odio officiis placeat quisquam repudiandae
        rerum unde voluptas, voluptate!
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  name: "Id",
  layout: "single",
  data() {
    return {
      loadingData: true,
    }
  },
  computed: {
    ...mapState('users', ['user']),
  },
  async mounted() {
    await this.fetchUser(this.$route.params.id)
    this.loadingData = false
  },
  methods: {
    ...mapActions("users", ["fetchUser"]),
  },
}
</script>
