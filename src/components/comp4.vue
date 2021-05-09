<template>
  <section class="flex flex-row flex-wrap  mt-28">
    <!-- laptop-desktop -->
    <img
      v-if="width > 768"
      class="laptop-desktop transform xl:scale-95 xl:-translate-x-56   -mr-10"
      srcset="@/images/illustration-laptop-desktop.svg 1.2x"
    />
    <!-- laptop-mobile -->
    <img
      v-else-if="width < 768"
      class="transform scale-125  -mr-20"
      src="@/images/illustration-laptop-mobile.svg "
    />
 <div
        class="head order-2 xl:text-left sm:text-center md:text-center h-auto xl:mt-32 xl:w-2/5"
      >
        <p
          class="space-x-4   text-3xl font-semibold xl:text-left sm:text-center mt-20 mr-10 ml-10 sm:mt-20 md:text-center xl:ml-10 xl:-mt-7"
        >
          Free, open , simple
        </p>
        <p
          class="space-x-4 xl:ml-10 font-light ml-5 mr-5 text-base xl:font-light mt-5 sm:mt-10 sm:ml-10 sm:mr-10 md:mt-10 md:ml-10 md:mr-10"
        >
          Blogr is a free and open source appliaction backed by a large community of helpful develpoers.
It supports features such as code syntax highlighting.RSS feeds, social media integration,
thirs-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and relatively easy to learn.
        </p>
        <p
          class="mr-10 ml-10 mt-20 xl:ml-10 xl:mt-20 xs:mt-20 sm:mt-20 text-3xl font-semibold xl:text-left sm:text-center md:text-center"
        >
          Powerful tooling
        </p>
        <p class="mt-5 ml-5 mr-5 xl:mt-6 xl:ml-10 font-light text-base sm:m-10 md:m-10  mb-20">
          Batteries included. We built a simple and straghtforward CLI tool that makes custmization and deployment a breeze, but capable of producing even the most complicated sites
        </p>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      width: screen.width,
    };
  },
};
</script>

<style scoped>
.head{

    font-family: "Overpass", sans-serif;
}
</style>
