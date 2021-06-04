<template>
  <div class="home">
    <navBar></navBar>
    <section2 />
    <section3 />
     <section4 />
     <section5 />
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from "@/components/navBar.vue";
import section2 from "@/components/comp2.vue";
import section3 from "@/components/comp3.vue";
import section4 from "@/components/comp4.vue";
import section5 from "@/components/comp5.vue";
export default {
  name: "Home",
  components: {
    navBar,
    section2,
    section3,
    section4,
    section5
  },
};
</script>
