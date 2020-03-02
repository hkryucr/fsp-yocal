import React from 'react';
import { Route, Link } from 'react-router-dom';
import YocalMain from 'js/yocal-main';
import UserAuth from 'js/components/user_auth/user_auth';
import Footer from 'js/components/footer';
// import css from 'css/app.css';

// import GreetingContainer from 'components/greeting/greeting_container';
// import LoginFormContainer from 'components/session_form/login_form_container';
// import SignupFormContainer from 'components/session_form/signup_form_container';
// import SearchContainer from 'components/benches/search_container';
// import BenchFormContainer from 'components/bench_form/bench_form_container';
// import { AuthRoute } from 'util/route_util';

const App = () => (
    <div className="app">
        {/* <div>
            <Link to="/"><h3>Bench BnB</h3></Link>
            <Link to="/benches/new"><h3>New Bench</h3></Link>
            <GreetingContainer />
        </div>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SearchContainer} />
        <Route exact path="/benches/new" component={BenchFormContainer} /> */}
        <Route exact path="/" component={YocalMain}></Route>
        <Route exact path="/signup" component={UserAuth}></Route>
        <Footer/>
    </div>
);

export default App;
