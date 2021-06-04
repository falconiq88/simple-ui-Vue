<template>
  <footer class="mt-20">
    <div
      class="flex flex-col gap-y-10 xl:flex-row xl:p-28 flex-wrap xl:gap-x-52"
    >
      <div>
        <img
          class="h-22 w-32 xl:ml-16 mx-auto mt-12 mb-10 xl:mt-0"
          src="@/images/logo.svg"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <div class="heading mb-5">Product</div>
        <div>Overview</div>
        <div>Pricing</div>
        <div>Marketplace</div>
        <div>Features</div>
        <div>Integrations</div>
      </div>

      <div class="flex flex-col gap-y-2 ...">
        <div class="heading mb-5">Company</div>
        <div>About</div>
        <div>Team</div>
        <div>Blog</div>
      </div>

      <div class="flex flex-col gap-y-2 mb-10 ...">
        <div class="heading mb-5">Connect</div>
        <div>Contact</div>
        <div>Newsletter</div>
        <div>Linkedin</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap");
footer {
  background-color: hsl(240, 10%, 16%);
  border-top-right-radius: 100px;
  color: hsl(240, 2%, 79%);
  font-family: "Overpass", sans-serif;
  font-weight: 500;
  font-size: 18px;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.heading {
  color: hsl(0, 0%, 100%);
  font-size: 20px;
}
</style>
