<template>
  <div>
    <header class="border-b">
      <div class="container p-4 mx-auto">
        <div class="flex justify-between items-center">
          <NuxtLink to="/">Cancelar</NuxtLink>

          <div>
            Agregar usuario
          </div>

          <div class="w-16" />
        </div>
      </div>
    </header>
    <Nuxt />
  </div>
</template>


<script>
export default {
  name: "AddLayout"
}
</script>
