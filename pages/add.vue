<template>
  <div class="container p-4 mx-auto">
    <form @submit.prevent="submitForm" class="space-y-5">
      <div>
        <label class="block text-sm mb-1.5 text-gray-700">
          Avatar
        </label>
        <input
          v-model="form.avatar"
          class="block w-full border border-gray-400 rounded px-3 py-2 focus:outline-none"
          placeholder="Url"
          type="url"
          required
        />
        <span v-if="errors.avatar" class="text-sm text-red-500 mt-1.5 block">
          {{ errors.avatar }}
        </span>
      </div>

      <div>
        <label class="block text-sm mb-1.5 text-gray-700">
          Nombre
        </label>
        <input
          v-model="form.name"
          class="block w-full border border-gray-400 rounded px-3 py-2 focus:outline-none"
          placeholder="Nombre"
          required
        />
        <span v-if="errors.name" class="text-sm text-red-500 mt-1.5 block">
          {{ errors.name }}
        </span>
      </div>

      <div>
        <label class="block text-sm mb-1.5 text-gray-700">
          Apellido
        </label>
        <input
          v-model="form.last_name"
          class="block w-full border border-gray-400 rounded px-3 py-2 focus:outline-none"
          placeholder="Apellido"
          required
        />
        <span v-if="errors.last_name" class="text-sm text-red-500 mt-1.5 block">
          {{ errors.last_name }}
        </span>
      </div>

      <div>
        <label class="block text-sm mb-1.5 text-gray-700">
          Profesión
        </label>
        <input
          v-model="form.profession"
          class="block w-full border border-gray-400 rounded px-3 py-2 focus:outline-none"
          placeholder="Profesión"
          required
        />
        <span v-if="errors.profession" class="text-sm text-red-500 mt-1.5 block">
          {{ errors.profession }}
        </span>
      </div>

      <div>
        <label class="block text-sm mb-1.5 text-gray-700">
          Testimonio
        </label>
        <textarea
          v-model="form.testimony"
          class="block w-full border border-gray-400 rounded px-3 py-2 focus:outline-none"
          placeholder="Testimonio"
          required
        />
        <span v-if="errors.testimony" class="text-sm text-red-500 mt-1.5 block">
          {{ errors.testimony }}
        </span>
      </div>

      <button
        type="submit"
        :disabled="loadingSubmit"
        class="text-center bg-black text-white rounded w-full px-3 py-2"
      >
        <span v-if="loadingSubmit">Guardando</span>
        <span v-else>Agregar</span>
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SkeletonCardUser from "~/components/CardUser/SkeletonCardUser";
import CardUser from "~/components/CardUser/CardUser";

export default {
  name: 'Add',
  components: { CardUser, SkeletonCardUser },
  layout: 'add',
  data: () => ({
    loadingSubmit: false,
    form: {
      avatar: 'https://static-talently.s3.amazonaws.com/francisco_farfan_18754b3fed.jpg',
      name: '',
      last_name: '',
      profession: '',
      testimony: '',
    },
    errors: {
      avatar: '',
      name: '',
      last_name: '',
      profession: '',
      testimony: '',
    }
  }),
  methods: {
    ...mapActions('users', ['addUser']),
    async submitForm() {
      this.loadingSubmit = true
      const { success, errors } = await this.addUser(this.form)

      if (!success) {
        this.loadingSubmit = false

        errors.forEach(item => {
          this.errors[item.param] = item.msg
        })

        return
      }

      await this.$router.push('/')
    },
  },
}
</script>
