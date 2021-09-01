<template>
  <section>
    <h3
      class="mt-20 text-2xl xl:text-4xl md:text-3xl sm:text-3xl text-center mb-10 sm:-mb-10 md:-mb-24"
    >
      Designed for the future
    </h3>
    <div class="section1 None flex flex-row-reverse flex-wrap items-stretch">
      <img
        v-if="width > 768"
        class="order-1 object-contain transform img1 m-20 h-full xl:-mr-56 xl:-mt-10 xl:scale-100 translate-x-8 sm:translate-x-20 translate-y-10 scale-150 -mr-30 md:translate-x-20 md:scale-125 -mr-9 lg:scale-100 lg:mx-auto"
        src="../images/illustration-editor-desktop.svg"
      />
      <img
        v-if="width < 768"
        class="order-1 mx-auto transform scale-110 mt-16"
        src="../images/illustration-editor-mobile.svg"
      />
      <transition name="slide-fade" appear>
        <div
          class="head order-2 xl:text-left sm:text-center md:text-center h-auto xl:mt-64 xl:w-2/5"
        >
          <p
            class="space-x-4 text-3xl font-semibold xl:text-left sm:text-center mt-20 mr-10 ml-10 sm:mt-20 md:text-center xl:ml-10 xl:-mt-7"
          >
            introducing an extensible editor
          </p>
          <p
            class="space-x-4 xl:ml-10 font-light ml-5 mr-5 text-base xl:font-light mt-5 sm:mt-10 sm:ml-10 sm:mr-10 md:mt-10 md:ml-10 md:mr-10"
          >
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports mangement
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos,and Markdown.Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <p
            class="mr-10 ml-10 mt-20 xl:ml-10 xl:mt-20 xs:mt-20 sm:mt-20 text-3xl font-semibold xl:text-left sm:text-center md:text-center"
          >
            Robust content mangement
          </p>
          <p
            class="mt-5 ml-5 mr-5 xl:mt-6 xl:ml-10 font-light text-base sm:m-10 md:m-10 xl:font-light"
          >
            Flexible content mangement enables users to easily move through
            posts. Increase the usabillity of your blog by adding custmized
            categories, sections,format, or flow. With this functionality,
            you're in full control
          </p>
        </div>
      </transition>
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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;1,600&display=swap");
.section1 {
  height: auto;
  margin-top: -5%;
  overflow: hidden;
}
h1 {
  color: hsl(208, 49%, 24%);
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
}
h2 {
  color: hsl(208, 49%, 24%);
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
}
h3 {
  color: hsl(208, 49%, 24%);
  font-family: "Overpass", sans-serif;
  font-weight: 700;
  text-align: center;
}
.head {
  color: hsl(208, 49%, 24%);
  font-family: "Overpass", sans-serif;
}



.slide-fade-enter-active {
  transition: all .6s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
