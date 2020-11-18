import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { mainRoutes, adminRoutes } from './routers';
import AdminFrame from "./components/AdminFrame"
import 'react-quill/dist/quill.snow.css';
import store from './store/index'
const routes = adminRoutes.filter(route => { return !route.isLogin });

function Admin() {
  return (
    <Provider store={store}>
      <AdminFrame>
        <Switch>
          {
            routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  render={routeProps => {
                    return <route.component {...routeProps} />
                  }}
                />
              )
            })
          }
          <Redirect to="/404" />
        </Switch>
      </AdminFrame>
    </Provider>
  )

}

export default Admin;


