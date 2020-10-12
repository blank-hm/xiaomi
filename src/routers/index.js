import React, { Component } from 'react';
import Login from "../pages/login";
import Index from "../pages/index";
import Error from "../pages/error";
import { HomeFilled } from "@ant-design/icons";

export const mainRoutes = [{
    path: '/pages/login',
    component: Login,
    title:'登陆',
    isShow:false
},{
    path: '404',
    component: Error,
    isShow:false
},{
    path: '/pages/home',
    component: Index,
    title:'首页',
    isShow:true,
    icon:<HomeFilled />
},]