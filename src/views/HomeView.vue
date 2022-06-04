<script setup>
 import {store} from '../store';
import {computed, ref} from 'vue';


const  posts = computed(() => store.state.posts);

store.dispatch("getPosts");
  
</script>
<template >
  <div class="bg-gray-750">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-5xl font-extrabold tracking-tight text-gray-100">Blog</h2>
              <p class="mt-4 text-gray-200">All the latest posts</p>

    


                <div class="relative mt-8">
                    <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
        <input
          
          type="text"
          class="
           bg-gradient-to-r from-gray-800 via-slate-700 to-cyan-800 
            w-full
            py-3
            pl-10
            pr-4
            shadow-xl
            text-gray-200
            border-gray-500
            rounded-md
            bg-gray-800
            text-gray-300
           
            focus:border-gray-500
            dark:focus:border-gray-500
            focus:outline-none focus:ring
          "
          placeholder="Search . . ."
        />
      </div>

        <div v-if="posts.loading" >
           <div class="flex items-center justify-center space-x-2 mt-14  ">

		         <svg role="status" class="w-14 h-14 mr-2    animate-spin text-gray-500 fill-cyan-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>

	         </div>
        </div>
      <div v-else class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            

             <asyncPost v-for="post in posts.data" :key="post.id" :post="post" class="group relative max-w-xs p-2 rounded-md shadow-xl bg-gray-900 dark:text-gray-50"/>

            
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
    //  posts: [],
     
    }
  },
   created() {
    this.getPost();
  },


  methods: {
    async  getPost() {
    await  this.axios.get("/posts")
        .then((response) => {
         // let res = response.data;
         // this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },



}
</script>
