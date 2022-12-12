<template>
  <div class="about">
    <div class="text">
      <h3>This is an about page</h3>
      <h3>"Contains basic contact information"</h3>
    </div>
  </div>
</template>

<script>
import auth from "../auth";
export default {
  name: "AboutView",
  data() {
      return {
        authResult: auth.authenticated()
      };
    },
}
</script>

<style>
.about {
  background-color: hwb(141 53% 16% / 0.466);
  margin-inline: auto;
  width: min(70%, 800px);
  position: relative;
  border-radius: 0.25em;
}

.text {
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}
</style>