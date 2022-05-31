<template>

  <div>

        
          <RouterLink :to="{ name: 'post', params: { id: post.id } }">
          <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
           
             <img :src="'http://192.168.0.100:8000/storage/'+post.image" :alt="post.name" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
          
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-md text-gray-300">
               
                  {{ post.name}}
               
                 
              </h3>
              <p class="mt-1 text-sm text-gray-500"></p>
            </div>
          
            
          </div>
            </RouterLink>
             </div>
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