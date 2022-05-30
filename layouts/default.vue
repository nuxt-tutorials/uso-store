<template>
  <div>
    <header class="border-b">
      <div class="container p-4 mx-auto">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="mr-3">
            <span class="mr-1" v-if="users.length">
              {{ users.length }}
            </span>

            <span>Usuarios</span>
          </NuxtLink>

          <NuxtLink to="/add">
            Agregar +
          </NuxtLink>
        </div>
      </div>
    </header>
    <Nuxt/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Default',
  computed: {
    ...mapState('users', ['users']),
  }
}
</script>
