<template>
  <section
    class="mt-56 mb-20 xl:mt-28 bg-no-repeat sm:bg-center mx-auto flex flex-row flex-wrap items-stretch"
  >
    <img
      class="image  transform -translate-x-20 -translate-y-20 scale-75 xl:scale-100 xl:translate-x-0 xl:translate-y-0 -mt-48 -mt-24 xl:-mt-16 xl:ml-32"
      src="@/images/illustration-phones.svg"
    />
    <div class="">
      <p
        class="break-all text-4xl mb-5 -mt-28 ml-14 mr-14 font-light xl:font-normal xl:text-4xl xl:mt-32 xl:ml-14 xl:mb-5"
      >
        State of the Art Infrastructure
      </p>
      <p
        class="ts break-all text-sm ml-10 mr-5 font-extralight text-left xl:ml-14 tracking-wider antialiased"
      >
        With reliablility and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly,no matter where your readers are, keeping your site
        competitive.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>

@media (min-width: 1024px) {
  section {
    height: 410px;
    background: hsl(237, 17%, 21%);
    background-image: url("../images/bg-pattern-circles.svg"); /* fallback */
    background-image: url("../images/bg-pattern-circles.svg"),
      linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%));
    background-position: -65% 80%;
    background-repeat: no-repeat;
    font-family: "Ubuntu", sans-serif;
    color: hsl(0, 0%, 100%);
    border-top-right-radius: 5rem;
    border-bottom-left-radius: 5rem;
  }
  .ts {
    font-family: "Overpass", sans-serif;
    width: 482px;
  }
}
@media (max-width: 500px) {
  section {
    height: 600px;
    background: hsl(237, 17%, 21%);
    background-image: url("../images/bg-pattern-circles.svg"); /* fallback */
    background-image: url("../images/bg-pattern-circles.svg"),
      linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%));
    background-position: 50% 140%;

    border-top-right-radius: 8rem;
    border-bottom-left-radius: 5rem;
    background-repeat: no-repeat;
    font-family: "Ubuntu", sans-serif;
    color: hsl(0, 0%, 100%);
  }
  .image{
    max-width: none;
  }
}

@media (width: 768px) {
  section {
    height: 700px;
    background: hsl(237, 17%, 21%);
    background-image: url("../images/bg-pattern-circles.svg"); /* fallback */
    background-image: url("../images/bg-pattern-circles.svg"),
      linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%));
    background-position: 30% 150%;

    background-repeat: no-repeat;
    font-family: "Ubuntu", sans-serif;
    color: hsl(0, 0%, 100%);
    border-top-right-radius: 8rem;
    border-bottom-left-radius: 5rem;
  }
  .image {
    margin-top: -270px;
    margin-left: 130px;
  }
}
.ts {
  font-family: "Overpass", sans-serif;
}
</style>
