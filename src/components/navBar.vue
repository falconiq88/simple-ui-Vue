<template>
  <section class="nav pt-8">
    <!-- nav here -->
   <nav v-if="width>768" class="nav grid grid-rows-2 grid-flow-col flex">
      <td class="nav pl-20 flex flex-wrap row-span-3">
        <img  class="h-20 w-20" src="@/images/logo.svg" />
        <router-link  class="pt-8 pl-10" to="/">Product </router-link>
        <router-link  class="pt-8 pl-10" to="/about">Company </router-link>
        <router-link  class="pt-8 pl-10" to="/about">Connect </router-link>
      </td>
      <div  class="row-span-2 ml-48 md:row-span-2 mt-6 ...">
        <router-link class="mr-10 w-20" to="/about">login </router-link>
        <button class="sign w-36 h-10 transform motion-safe:hover:scale-110">
          <router-link to="/about">Signup </router-link>
        </button>
      </div>
    </nav>
<!-- mobile nav -->
<div class=" antialiased" >
  <nav class="flex items-center justify-between  bg-teal p-6">
    <div class="flex  flex-no-shrink text-white mr-6">
     <img v-if="width<768" class="h-20 w-20 xl:ml-20" src="@/images/logo.svg" />
      
    </div>
    <div class="block sm:hidden  justify-content-center">
      <button @click="toggle" class=" px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white mb-10">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
        <div :class="open ? 'block': 'hidden'" class="w-full flex flex-col sm:flex items-center sm:w-auto -mt-8 ">
      <div class="">
        <td class="grid grid-cols-1	 items-center justify-items-center">
        <div><router-link  class="mt-3" to="/">Product </router-link></div>
        <div><router-link  class="mt-3" to="/about">Company </router-link></div>
        <div><router-link  class="mt-3" to="/about">Connect </router-link></div>
      <div  class="mt-2">
        <router-link class="" to="/about">login </router-link></div>
        <div class="mt-2">
        <button class="sign w-32 h-10 :hover:scale-110">
          <router-link to="/about">Signup </router-link>
        </button>
        </div>
      
      </td>
      </div>
    </div>

  
    </div>
  </nav>
</div>
   
    <!-- nav end -->
    <!-- container -->
    <div class="container 2xl">
      <transition name="slide-fade" appear   >
      <p
        class="xl:mt-40 lg:md-40 mt-16  text-6xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl border-none md:border-none font-semibold"
      >
        A modern publishing platform
      </p>
      </transition>
       <transition name="slide-fade"  appear  >
      <p class="mt-5 text-lg font-light">
        Grow your audience and build your online brand
      </p>
       </transition>
      <!--buttons -->
      <div class="mt-10">
        <button
          class="btn-1 mr-15 border-solid border-2 font-bold py-2 px-5 rounded-full"
        >
          <b>Start for free</b>
        </button>
        <button
          class="btn-2 border-solid border-2 border-light-white-500 mr-15 ml-5 text-white font-bold py-2 px-5 rounded-full"
        >
          <b>Learn more</b>
        </button>
      </div>
      <!--end container -->
    </div>
  </section>
</template>
<script>

export default {
  data() {
    return {
      open: false,
      width:screen.width
    }
  },
  methods: {
    toggle() {
    	this.open = !this.open
    }
  },
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;1,600&display=swap");

section {
  height: 650px;

  border-bottom-left-radius: 5rem;
  background: hsl(355, 100%, 74%);
  background-image: url("../images/bg-pattern-intro.svg"); /* fallback */
  background-image: url("../images/bg-pattern-intro.svg"),
    linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
  background-position: 28% 52%;
  text-align: center;
  color: hsl(0, 0%, 100%);
  font-family: "Overpass", sans-serif;
}

img {
  object-fit: contain;
  width: 80px;
  max-width: 100%;
}
.nav {
  color: hsl(0, 0%, 100%);
  font-family: "Overpass", sans-serif;
  font-size: 16px;
  font-weight: 300;
}
.sign {
  background-color: hsl(0, 0%, 100%);
  border-radius: 30px;
  font-family: "Overpass", sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: hsl(356, 100%, 66%);
}
.sign:hover {
  background-color: hsl(0, 8%, 88%);
}
.btn-1 {
  background-color: hsl(0, 0%, 100%);
  font-family: "Overpass", sans-serif;
  color: hsl(356, 100%, 66%);
}
.btn-1:hover {
  background-color: hsl(355, 100%, 74%);
  color: hsl(0, 0%, 100%);
}
.btn-2:hover {
  background-color: hsl(0, 8%, 88%);
  color: hsl(356, 100%, 66%);
}


.slide-fade-enter-active {
  transition: all .8s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
