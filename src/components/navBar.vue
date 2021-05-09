<template>
  <section class="pt-8">
    <!-- nav here -->
    <nav class="nav grid grid-rows-2 grid-flow-col flex">
      <td class="nav pl-20 flex flex-wrap row-span-3">
        <img class="h-20 w-20" src="@/images/logo.svg" />
        <router-link v-if="width>768" class="pt-8 pl-10" to="/">Product </router-link>
        <router-link v-if="width>768" class="pt-8 pl-10" to="/about">Company </router-link>
        <router-link v-if="width>768" class="pt-8 pl-10" to="/about">Connect </router-link>
      </td>
      <div v-if="width>768" class="row-span-2 ml-48 md:row-span-2 mt-6 ...">
        <router-link class="mr-10 w-20" to="/about">login </router-link>
        <button class="sign w-36 h-10 transform motion-safe:hover:scale-110">
          <router-link to="/about">Signup </router-link>
        </button>
      </div>
    </nav>
    <!-- nav end -->
    <!-- container -->
    <div class="container 2xl">
      <p
        class="mt-40 text-6xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl border-none md:border-none font-semibold"
      >
        A modern publishing platform
      </p>
      <p class="mt-5 text-lg font-light">
        Grow your audience and build your online brand
      </p>
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
      width:screen.width
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
</style>
