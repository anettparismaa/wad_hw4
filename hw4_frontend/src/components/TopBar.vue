<template>
    <div class="topnav">
      <nav class="menu-left">
        <router-link to="/">Home</router-link>
      <router-link to="/contactus">Contact</router-link>
      </nav>
    </div>
  </template>
  
  <script>
    export default {
      name: 'top-bar',
    }
  </script>
  <style scoped>
    .topnav {
        background-color: hwb(141 53% 16% / 0.466);
      overflow: hidden;
      display: flex;
    }
    .topnav .menu-right {
      margin-left: auto;
    }
    /* Style the links inside the navigation bar */
    .topnav a {
      float: left;
      display: block;
      color: #2c3e50;
      text-align: center;
      text-decoration: none;
      letter-spacing: 1px;
      border-radius: 0.25em;
      margin-right: .25rem;
      font-weight: bold;
    }
    /* Change the color of links on hover */
    .topnav a:hover {
      background-color: hwb(141 53% 16% / 0.758);
      transition: background-color 0.25s linear;
    }
    /* Add a color to the active/current link */
    .topnav a.active {
      background-color: #4CAF50;
    }
    .menu-left{
      margin: 0 auto;
      
    }
  </style>