<template>
    <div class="form">
      <h3>Add a Post</h3>
      <label for="body">Body: </label>
      <input name="body" type="text" id="body" required v-model="post.body" />
      <button @click="addPost" class="addPost">Add Post</button>
    </div>
  </template>
  
  <script>
import { getTransitionRawChildren } from 'vue';
import auth from "../auth";

  export default {
    name: "AddPost",
    data() {
      return {
        post: {
          title: "",
          body: "",
          urllink: "",
          timestamp: this.getTime(),
        },
        authResult: auth.authenticated()
      };
    },
    methods: {
      addPost() {
        var data = {
          title: this.post.title,
          body: this.post.body,
          urllink: this.post.urllink,
          timestamp: this.getTime()
        };
        // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
        fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        .then((response) => {
          console.log(response.data);
          // redirect to /allposts view
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
      },
      getTime: function() {
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date +' '+ time;
                    return dateTime;
                }
    },
  };
  </script>
  
  <style scoped>
  .form {
    max-width: 420px;
    margin: 30px auto;
    background: hwb(141 53% 16% / 0.466);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  h3 {
    text-align: center;
    color: #2c3e50;
  }
  label {
    color: #2c3e50;
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
    min-height: 70px;
  }
  .addPost {
    background: #FEE996;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: #2c3e50;
    border-radius: 20px;
    align-items: center;
    text-align: center;
    letter-spacing: 1px;
  }

  button:hover {
  background-color: hwb(141 53% 16% / 0.758);
  transition: background-color 0.25s linear;
}

  
  </style>