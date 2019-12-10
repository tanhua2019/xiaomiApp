import React, { Component } from 'react'
import Header from './Header/Header'
import { Route, Switch, Redirect } from 'react-router-dom'
import Refer from "./Tab/Refer";
import Smart from "./Tab/Smart";
import TV from "./Tab/TV";
import Phone from "./Tab/Phone";
import Living from "./Tab/Living";
import Computer from "./Tab/Computer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/home/refer" component={Refer} />
          <Route path="/home/smart" component={Smart} />
          <Route path="/home/tv" component={TV} />
          <Route path="/home/phone" component={Phone} />
          <Route path="/home/living" component={Living} />
          <Route path="/home/computer" component={Computer} />
          <Redirect to="/home/smart" />
        </Switch>
      </div>
    )
  }
}
