import { createRouter, createWebHistory } from 'vue-router'
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import auth from "../auth";


const routes = [
{
  path: "/",
  name: "home",
  component: HomeView,
  beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
  }
},
{
  path: "/signup",
  name: "SignUp",
  component: SignUp,
},
{
    path: "/addpost",
    name: "AddPost",
    component: AddPost,
    beforeEnter: async(to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
},
{ 
    path: "/api/apost/:id",
    name: "APost",
    component: APost,
    beforeEnter: async(to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
    
},
{
  path: "/login",
  name: "LogIn",
  component: LogIn,
},
{
  path: "/about",
  name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
      import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
},
];

/*
const routes = [{
        path: '/',
        name: 'AllPosts',
        component: () =>
            import ("../views/AllPosts.vue")
    },
    {
        path: "/api/allposts",
        name: "AllPosts",
        component: AllPosts,
    },
    {
        path: "/api/apost/:id",
        name: "APost",
        component: APost,
    },
    {
        path: "/api/addpost",
        name: "AddPost",
        component: AddPost,
    },
    { //will route to AllPosts view if none of the previous routes apply
        path: "/:catchAll(.*)",
        name: "AllPosts",
        component: AllPosts,
    }
]
*/
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router