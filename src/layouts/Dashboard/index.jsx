import React from "react";

import {
  Route,
  Switch
} from "react-router-dom";

import {Header, Sidebar, Footer} from "../../components"

import "./index.scss";
import routes from "./routes.js";

const Dashboard = props => {
  return (
    <div className="grid-container">
      <div className="menu-icon">
        <i className="fas fa-bars header__menu"></i>
      </div>

      <Header/>
      <Sidebar
        routes={routes}
      />


      <main className="main">
        <div className="main-header">

          <Switch>
            {routes.map ((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>

          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>

        <div className="main-overview">

          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
        </div>

        <div className="main-cards">
          <div className="card">Card</div>
          <div className="card">Card</div>
          <div className="card">Card</div>
        </div>
      </main>

      <Footer/>

    </div>

  )
};

export default Dashboard
