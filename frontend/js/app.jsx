import React from 'react';
import { Route } from 'react-router-dom';
import YocalMain from 'js/yocal-main';
import Footer from 'js/components/footer';
import { AuthRoute } from 'util/route_util.jsx';
import RegisterSignupContainer from 'js/components/user_auth/register_signup_container';
import RegisterLoginContainer from 'js/components/user_auth/register_login_container';

const App = () => (
    <div className="app">
        <Route exact path="/" component={YocalMain}></Route>
        <AuthRoute path="/login" component={RegisterLoginContainer} />
        <AuthRoute path="/signup" component={RegisterSignupContainer} />
        <Footer/>
    </div>
);

export default App;
