<template>
    <form @submit="LogIn" class="form">
      <h3>LogIn</h3>
      <label for="email">Email</label>
      <input type="email" name="email"  required v-model="email">
      <label for="password">Password</label>
      <input type="password" name="password" required v-model="password">
      <div class="container">
        <input id="submit" type="submit" value="LogIn" />
        <!-- <button @click="LogIn"  class="center">LogIn</button> -->
        <button @click='this.$router.push("/signup")' class="center">Signup</button>
      </div>
    </form>
  </template>
  
  <script>
  export default {
  name: "LogIn", 
  
  data: function() {
      return {
     email: '',
     password: '',
    }
    },
    methods: {
  
  
  LogIn() {
        var data = {
          email: this.email,
          password: this.password
        };
        // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
        fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            credentials: 'include', //  Don't forget to specify this if you need cookies
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        //this.$router.push("/");
        location.assign("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
      },
    }, 
    }
  
  </script>
  
  <style scoped>
  .form {
    max-width: 420px;
    margin: 30px auto;
    background-color: hwb(141 53% 16% / 0.466);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  h3 {
    text-align: center;
    color: #2c3e50;;
  }
  label {
    color: #2c3e50;;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid white;
    color: #2c3e50;
  }


  button, input[type='submit'] {
    background: #FEE996;
    border: 0;
    width: unset;
    margin-inline: auto;
    padding: 10px 20px;
    margin-top: 20px;
    color: #2c3e50;
    letter-spacing: 1px;
    border-radius: 20px;
    align-items: center;
    text-align: center;
  }

  .container {
    display: flex;
    justify-content: center;
  }

  button:hover, input[type='submit']:hover {
  background-color: hwb(141 53% 16% / 0.758);
  transition: background-color 0.25s linear;
}
  </style>