<template>
  <NuxtLink :to="`/user/${user.id}`" class="flex items-center">
    <img :src="user.avatar" alt="" class="flex-shrink-0 w-10 h-10 rounded-full" />
    <div class="pl-4">
      <div>{{ user.name }} {{ user.last_name }}</div>
      <div class="text-sm opacity-50">{{ user.github }}</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "CardUser",
  props: {
    user: {
      type: Object,
      required: true,
    }
  }
}
</script>
