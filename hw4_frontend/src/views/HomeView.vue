<template>
  <div class="header">
    <div class="container">
      <button v-if="authResult" @click="Addpost" class="addbutton">Add Post</button>
      <button v-if="authResult" @click="Deleteposts" class="deletebutton">Delete All</button>
      <button v-if="authResult" @click="Logout" class="deletebutton">Log Out</button>
      

    </div>
    <div class="post-list" >
      <a class="singlepost"  v-for="post in posts" :key="post.id" :href="'/api/apost/' + post.id">
        <div class="post">
          <header>
            <h3> {{ post.title }} </h3>
            <p class="time"> {{ post.time }} </p>
          </header>
          <p class="postBody"> {{ post.body }} </p>
          <!-- <span class="url"> <b>Url:</b> {{ post.urllink }} </span> <br /> -->
        </div>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import auth from "../auth";

export default {
  name: "HomeView",
  components: {
  },
  data: function () {
    return {
      posts: [],
      authResult: auth.authenticated()
    }
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log('jwt removed');
          //console.log('jwt removed:' + auth.authenticated());
          this.$router.push("/login");
          //location.assign("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
    },
    Addpost() {
      this.$router.push('/addpost')
    },
    Deleteposts() {
      fetch(`http://localhost:3000/api/posts/`, {
        method: "DELETE"
      })
        .then((response) => {
          console.log(response.data);
          this.fetchPosts();
        })
        .catch((e) => {
          console.log(e);
        })
    },
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    // call fetchPosts() when this element (HomeView) mounts 
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

<style scoped>
body {
  margin: 20px 40px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  background: #fafafa;
  position: relative;
}

.post-list {
  margin-inline: auto;
  width: min(70%, 800px);
  position: relative;

}

header {
  display: flex;
  justify-content: space-between;
}

h3 {
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: #2c3e50;
}

.time {
  float: right;
  margin: 0;
  padding: 0;
}

.postBody {
  width: 70%;
  position: relative;
  padding: 10px;
  margin: 10px auto;
  text-align: left;
  white-space: initial;
  word-wrap: break-word;
}

h1,
h2,
h3,
h4,
ul,
li,
a,
input,
label,
button,
div,
footer {
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 80px;
}

input {
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1em;
  width: 100%;
}

label {
  display: block;
  margin: 20px 0 10px;
}

button {
  border-radius: 36px;
  background: #FEE996;
  border: 0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
  max-width: 10em;
  margin: 2em 5em;
}

nav {
  display: flex;
  align-items: center;
}

.post {
  background: hwb(141 53% 16% / 0.466);
  width: 70%;
  position: relative;
  padding: 10px;
  margin: 10px auto;
  border-radius: 0.4em;
  text-align: left;
  padding: 10px;

  border-radius: 10px;
}

.post p {
  font: 1em sans-serif;
}

.center,
.logoutbutton{
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  margin: 10px auto;
  width: 30%;

}
.center:hover, 
.logoutbutton:hover,
.addbutton:hover,
.deletebutton:hover {
  background-color: hwb(141 53% 16% / 0.758);
  transition: background-color 0.25s linear;
}

.container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.addbutton
.deletebutton{
  display: block;
    width: -moz-fit-content;
    width: fit-content;
    margin: 0 auto;
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 3px;
    font-size: 10px;
    text-transform: uppercase;
    cursor: pointer;
    background: rgba(85, 85, 85, 0.502);
    border: none;
    color: #f2f2f2;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 4vh;
    box-sizing: border-box;
    margin-top: 1em;
  margin-bottom: 2em;
}

.singlepost{
  
  text-decoration: none;
}
</style>