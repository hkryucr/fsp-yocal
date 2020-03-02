import React from 'react';
import { Route, Link } from 'react-router-dom';
import YocalBody from 'js/components/yocal_body';
import Footer from 'js/components/footer';
import css from 'css/yocal_main.css';

// import GreetingContainer from 'components/greeting/greeting_container';
// import LoginFormContainer from 'components/session_form/login_form_container';
// import SignupFormContainer from 'components/session_form/signup_form_container';
// import SearchContainer from 'components/benches/search_container';
// import BenchFormContainer from 'components/bench_form/bench_form_container';
// import { AuthRoute } from 'util/route_util';

const YocalMain = () => (
    <div className="yocal-main">
        <YocalBody/>
    </div>
);

export default YocalMain;
