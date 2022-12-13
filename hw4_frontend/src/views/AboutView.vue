<template>
  <div class="about">
    <div class="container">
      <h3>Contact us!</h3>
      <p>Anett Pärismaa
        <br>
        Greete Kelli Aava
        <br>
        Meeri-Ly Muru
      </p>
      <br>
    </div>
  </div>
</template>

<script>
import auth from "../auth";
export default {
  name: "ContactUs",
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