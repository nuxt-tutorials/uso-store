<template>
  <div class="container p-4 mx-auto">
    <ul v-if="users.length" class="space-y-5 mb-5">
      <li v-for="user in users" :key="user.id">
        <CardUser :user="user" />
      </li>
    </ul>

    <ul v-if="loadingData" class="space-y-5">
      <li v-for="item in 4" :key="item">
        <SkeletonCardUser class="py-0.5" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SkeletonCardUser from "~/components/CardUser/SkeletonCardUser";
import CardUser from "~/components/CardUser/CardUser";

export default {
  name: 'Home',
  components: { CardUser, SkeletonCardUser },
  data: () => ({
    loadingData: true,
  }),
  mounted() {
    this.getDataView()
  },
  computed: {
    ...mapState('users', ['users']),
  },
  methods: {
    ...mapActions('users', ['fetchUsers']),
    async getDataView() {
      this.loadingData = true
      await this.fetchUsers()
      this.loadingData = false
    },
  },
}
</script>
