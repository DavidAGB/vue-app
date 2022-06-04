<template>
   
    

  <section class="dark:bg-gray-800  text-gray-100">
		<div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
 				<img :src="'http://192.168.0.100:8000/storage/' + post.image" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"/>
				<div class="p-6 space-y-2 lg:col-span-5">
					<h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{{post.title}}</h3>
					<span class="text-xs text-gray-400">{{post.created_at}}</span>
					<p> {{post.description}} </p>
				</div>
			
			 
			<div class="flex justify-center">
				<button type="button" class="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
			</div>
		</div>

    
	</section>


 
</template>
<script> 


export default {
    
  data() {
    return {
      post: [],
       
      
    };
  },

  created() {
    this.getPostShow();
  },

  methods: {
    getPostShow() {
      this.axios.get('/post/' + this.$route.params.id )
        .then(response => {
          this.post = response.data;
          
            

           //{{course.category.name}}

          
        })
        .catch(error => {
          console.log(error);
        })
    },
  },
};
</script>

<style>

</style>