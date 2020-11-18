import React from 'react';
import Login from "../pages/admin/login";
import Home from "../pages/index";
import Error from "../pages/error";
import TimeLine from "../pages/timeline";
import Tags from "../pages/tags";
import Categories from "../pages/categories";
import ArticleEdit from "../pages/admin/articleEdit";
import ArticleList from "../pages/admin/articleList";


import { HomeFilled, ProfileFilled, FolderOpenFilled, TagsFilled, EditFilled } from "@ant-design/icons";

export const mainRoutes = [{
    path: '404',
    component: Error,
    isShow:false
},{
    path: '/pages/home',
    component: Home,
    title:'首页',
    isShow:true,
    icon:<HomeFilled />
},{
    path: '/pages/timeline',
    component: TimeLine,
    title:'时间轴',
    isShow:true,
    icon:<ProfileFilled />
},{
    path: '/pages/categories',
    component: Categories,
    title:'分类',
    isShow:true,
    icon:<FolderOpenFilled />
},{
    path: '/pages/tags',
    component: Tags,
    title:'标签',
    isShow:true,
    icon:<TagsFilled />
}]

export const adminRoutes=[{
    path: '/admin/login',
    component: Login,
    title:'登陆',
    isShow:false,
    isLogin:true
},{
    path: '/admin/article/edit/:id',
    component: ArticleEdit,
    title:'新建',
    isShow:true,
    exact:true,
    icon:<EditFilled />
},{
    path: '/admin/article',
    component: ArticleList,
    title:'文章',
    isShow:true,
    exact:true,
    icon:<EditFilled />
}]