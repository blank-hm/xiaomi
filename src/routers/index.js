import Login from "../pages/login";
import Index from "../pages/index";
import Error from "../pages/error";

export const mainRoutes = [{
    path: '/pages/login',
    component: Login,
    exact: true
},{
    path: '404',
    component: Error
},{
    path: '/pages/home',
    component: Index
}]