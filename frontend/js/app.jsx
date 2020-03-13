import React from 'react';
import { Route, Switch } from 'react-router-dom';
import YocalMainContainer from 'js/components/main_section/yocal_main_container';
import BizSearchContainer from 'js/components/biz_search/biz_search_container';
import BizContainer from 'js/components/biz/biz_container';
import Footer from 'js/components/footer/footer';
import { AuthRoute, ProtectedRoute } from 'util/route_util.jsx';
import RegisterSignupContainer from 'js/components/user_auth/register_signup_container';
import RegisterLoginContainer from 'js/components/user_auth/register_login_container';
import WriteReviewContainer from 'js/components/write_review/write_review_container';
import 'css/app.css';

const App = () => (
    <div className="app">
        <Switch>
            <AuthRoute path="/login" component={RegisterLoginContainer} />
            <AuthRoute path="/signup" component={RegisterSignupContainer} />
            <Route exact path="/biz/:id" component={BizContainer}></Route>
            <Route exact path="/search" component={BizSearchContainer}></Route>
            <Route exact path="/" component={YocalMainContainer}></Route>
            <ProtectedRoute exact path="/writeareview" component={WriteReviewContainer}></ProtectedRoute>
        </Switch>
        <Footer/>
    </div>
);

export default App;
