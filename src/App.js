import React from 'react';
import '@/common/reset.less'
import { HashRouter as Router, Switch, Route,Redirect} from 'react-router-dom'
import Main from '@/pages/Main'
import Home from '@/pages/Home/Home'
import Category from '@/pages/Category/Category'
import Cart from '@/pages/Cart/Cart'
import User from '@/pages/User/User'

function App() {
  return (
    <div>
      <Router>
        <Main>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/category" component={Category} />
            <Route path="/cart" component={Cart} />
            <Route path="/user" component={User} />
            <Redirect to="/home"/>
          </Switch>
        </Main>
      </Router>
    </div>
  );
}

export default App;
