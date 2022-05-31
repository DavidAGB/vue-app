 
<template >
  

       
 
  <div class="bg-gray-750">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-5xl font-extrabold tracking-tight text-gray-100">Blog</h2>
              <p class="mt-4 text-gray-200">All the latest posts</p>
       
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <asyncPost v-for="post in posts" :key="post.id" :post="post" class="group relative max-w-xs p-2 rounded-md shadow-md bg-gray-900 dark:text-gray-50"/>
         
        
      </div>
    </div>
  </div>
 
 

    
</template>

<script >  
import {ref,defineAsyncComponent} from 'vue';
import Post from '../components/post/Post.vue';
import Loading from '../components/Loading.vue';
 
 const asyncPost  = defineAsyncComponent({
   loader:() => import('../components/post/Post.vue'),
   loadingComponent:Loading,
   delay:200,
   suspensible:200
    
   
   });

export default {

components:{asyncPost},
  
  data() {
    return {
      posts: [],
     
    }
  },
   created() {
    this.getPost();
  },


  methods: {
    async  getPost() {
    await  this.axios.get("/products")
        .then((response) => {
          
          let res = response.data;
          this.posts = response.data;
         
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },



}
</script>
