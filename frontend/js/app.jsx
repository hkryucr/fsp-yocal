import React from 'react';
import { Route, Switch } from 'react-router-dom';
import YocalMain from 'js/yocal-main';
import Biz from 'js/components/biz/biz';
import Footer from 'js/components/footer/footer';
import { AuthRoute } from 'util/route_util.jsx';
import RegisterSignupContainer from 'js/components/user_auth/register_signup_container';
import RegisterLoginContainer from 'js/components/user_auth/register_login_container';
import 'css/app.css';

const App = () => (
    <div className="app">
        <Switch>
            <AuthRoute path="/login" component={RegisterLoginContainer} />
            <AuthRoute path="/signup" component={RegisterSignupContainer} />
            <Route exact path="/biz" component={Biz}></Route>
            <Route exact path="/" component={YocalMain}></Route>
        </Switch>
        <Footer/>
    </div>
);

export default App;
