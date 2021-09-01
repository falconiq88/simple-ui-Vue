<template>
 
    <transition name="fade" appear>
       <div class="home">
      <navBar></navBar>
      <sect2 />
      <section3 />
      <section4 />
      <section5 />
      </div>
    </transition>
  
</template>

<script>
// @ is an alias to /src
import navBar from "@/components/navBar.vue";
import { defineAsyncComponent } from "vue";
const sect2 = defineAsyncComponent(() => import("@/components/comp2.vue"));
const section3 = defineAsyncComponent(() => import("@/components/comp3.vue"));
const section4 = defineAsyncComponent(() => import("@/components/comp4.vue"));
const section5 = defineAsyncComponent(() => import("@/components/comp5.vue"));

export default {
  components: {
    navBar,
    sect2,
    section3,
    section4,
    section5,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:all opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
