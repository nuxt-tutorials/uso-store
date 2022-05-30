<template>
  <div>
    <header class="border-b">
      <div class="container p-4 mx-auto">
        <div class="flex justify-between items-center">
          <NuxtLink to="/">Atras</NuxtLink>

          <button @click="modalConfirm = true" v-if="user">
            Eliminar
          </button>
        </div>
      </div>
    </header>
    <Nuxt/>

    <div v-if="modalConfirm" class="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-screen p-6 flex items-center justify-center">
      <div class="bg-white rounded rounded-lg overflow-hidden">
        <div class="px-8 py-10">
          Estas segur@ de eliminar a <strong>{{ user.name }}</strong>?
        </div>

        <div class="border-t border-gray-200 flex">
          <button class="w-1/2 py-4 hover:bg-gray-100" @click="modalConfirm = false">
            Cancelar
          </button>
          <button class="w-1/2 py-4 hover:bg-gray-100" @click="removeUser">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "SingleLayout",
  computed: {
    ...mapState('users', ['user']),
  },
  data() {
    return {
      modalConfirm: false,
      loadingDelete: false,
    }
  },
  methods: {
    ...mapActions('users', ['deleteUser']),
    async removeUser() {
      const { success, errors } = await this.deleteUser(this.$route.params.id)

      if(!success) {
        console.log(errors)
      }

      await this.$router.push('/')
    },
  }
}
</script>
