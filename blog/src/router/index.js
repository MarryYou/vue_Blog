import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home";
import Main from "@/components/main";
import SignIn from "@/components/signin"
import SignUp from "@/components/signup"
import Blog from "@/components/blog"
import AboutMe from "@/components/aboutme"
import AboutBlog from "@/components/aboutblog"
import Comment from "@/components/comment"
import Create from "@/components/create"
import ShowArticle from "@/components/showarticle"
Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/Main",
            name: "Main",
            redirect:'/Main/Blog',
            component: Main,
            children:[
            {
            	path:'/Main/SignIn',
            	component:SignIn
            },
            {
            	path:'/Main/SignUp',
            	component:SignUp
            },
            {
            	path:'/Main/Blog',
            	component:Blog,
            },
            {
            	path:'/Main/AboutMe',
            	component:AboutMe
            },
             {
            	path:'/Main/AboutBlog',
            	component:AboutBlog
            },
             {
            	path:'/Main/Comment',
            	component:Comment
            },
            {
            	path:'/Main/Create',
            	component:Create
            },{
            	path:'/Main/Article',
            	component:ShowArticle
            }
            ]
        },
    ]
});