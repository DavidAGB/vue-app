<template>
   <header class="bg-gray-800 shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-200">Dashboard   </h1>
      </div>
    </header>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
computed: {
    ...mapState(["user"]),
  },
}
</script>

<style>

</style>