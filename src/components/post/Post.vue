
<script setup>
import { ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

const isShowing = ref(true)

function resetIsShowing() {
  isShowing.value = false

  setTimeout(() => {
    isShowing.value = true
  }, 500)
}
</script>
<template> 
      <TransitionRoot
        appear
        :show="isShowing"
        as="template"
        enter="transform transition duration-[600ms]"
        enter-from="opacity-0  scale-50"
        enter-to="opacity-100  scale-100"
        leave="transform duration-200 transition ease-out"
        leave-from="transform opacity-100  scale-100 "
        leave-to="opacity-0 scale-95 ">
        
            <div>
               <RouterLink :to="{ name: 'post', params: { id: post.id } }">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                     <img src="https://source.unsplash.com/800x800/?blog" :alt="post.name" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-md text-gray-300 font-sans">
                          {{ post.title}}
                      </h3>
                      <p class="mt-1 text-sm text-gray-500"></p>
                    </div>
                  </div>
                </RouterLink>
            </div>
      </TransitionRoot>
     





 
</template>

<script>
export default {
  name : 'Post',
  props :{
      post : Object
  }
}
</script>

<style>

</style>