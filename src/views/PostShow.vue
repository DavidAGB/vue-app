<script setup>
import { ref } from "vue";
import { TransitionRoot } from "@headlessui/vue";

const isShowing = ref(true);
</script>
<template>
  <section class="dark:bg-gray-800 text-gray-100">
    <div v-if="loading">
      <div
        class="flex items-center justify-center space-x-2 mt-14 animate-pulse"
      >
        <svg
          role="status"
          class="w-14 h-14 mr-2 animate-spin text-gray-400 fill-indigo-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    </div>
    <div v-else>
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
 <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <img
          src="https://source.unsplash.com/800x800/?portrait"
          alt=""
          class="
            object-cover
            w-full
            h-64
            rounded
            sm:h-96
            lg:col-span-7
            dark:bg-gray-500
          "
        />
        <div class="p-6 space-y-2 lg:col-span-5">
          <h3
            class="
              text-2xl
              font-semibold
              sm:text-4xl
              group-hover:underline
              group-focus:underline
            "
          >
            {{ post.title }}
          </h3>
          <span class="text-xs text-gray-400">{{ post.created_at }}</span>
          <p>{{ post.description }}</p>
        </div>

        <div class="flex justify-center">
          <button
            type="button"
            class="
              px-6
              py-3
              text-sm
              rounded-md
              hover:underline
              dark:bg-gray-900 dark:text-gray-400
            "
          >
            Load more posts...
          </button>
        </div>
      </div>
      </TransitionRoot>
     
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      post: {},
      loading: false,
    };
  },

  created() {
    this.getPostShow();
  },

  methods: {
    getPostShow() {
      this.loading = true;
      this.axios
        .get("/post/" + this.$route.params.id)
        .then((response) => {
          this.loading = false;
          this.post = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>