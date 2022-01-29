<template>
  <nav id="nav" class="sm:container sm:mx-auto">
      <!-- Header start -->
      <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
          <!-- Header menu links and small screen hamburger menu -->
          <div class="flex justify-between items-center px-4 sm:px-0">
              <!-- Header logos -->
              <div>
                <router-link to="/">
                    <img
                    class="w-20"
                    src="../../assets/logo.png"
                    alt=""
                    />
                </router-link>
              </div>
              <!-- Small screen hamburger menu auto hidden for non-mobile -->
                <div class="sm:hidden">
                    <button
                            @click="isOpen = !isOpen"
                            type="button"
                            class="focus:outline-none"
                            aria-label="Hamburger Menu"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light bg-dark"
                            >
                            <path
                                v-if="isOpen"
                                fill-rule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                clip-rule="evenodd"
                                ></path>
                            <path
                                v-if="!isOpen"
                                fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                clip-rule="evenodd"
                                ></path>
                            </svg>
                    </button>
                </div>
          </div>

          <!-- Header links -->
          <HeaderLinksComponent :isOpen="isOpen" />

          <!-- Header right section buttons - auto hidden for mobile -->
          <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
              <!-- Action button -->
              <div class="hidden md:block">
                  <ButtonComponent
                        title="Logout"
                        class="text-md font-general-medium bg-orange-500 hover:bg-orange-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                        aria-label="Logout Button"
                  />
              </div>
          </div>
      </div>
  </nav>
</template>

<script>
import HeaderLinksComponent from './HeaderLinksComponent.vue';
import ButtonComponent from '../reusable/ButtonComponent.vue';
import feather from 'feather-icons';

export default {
	components: {
		HeaderLinksComponent,
        ButtonComponent,
	},
    data(){
        return {
            isOpen: false,
        }
    }

}
</script>

<style scoped>
#nav a.router-link-exact-active {
    @apply text-orange-700;
    @apply dark:text-orange-400;
    @apply font-medium;
}
</style>