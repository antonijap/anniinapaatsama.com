import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Post from './views/Post.vue'
import Home from './views/Home.vue'
import Project from './views/Project.vue'
import Blog from './views/Blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: "home",
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blog/:uid',
    name: 'blog-post',
    component: Post
  },
  {
    path: '/:uid',
    name: 'project',
    component: Project
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: NotFound
  },
  {
    path: '*',
    redirect: {
      name: 'not-found'
    }
  }
  ]
})
