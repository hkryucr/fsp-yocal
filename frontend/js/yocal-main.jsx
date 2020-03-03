import React from 'react';
import YocalBody from 'js/components/main_section/yocal_body';
import 'css/yocal_main.css';
import CustomMain from 'js/components/main_section/custom_main';

import BusinessSearch from 'js/components/business_search/business_search';

const YocalMain = () => (
    <div className="yocal-main">
        <div className="yocal-main-container">
            <YocalBody/>
        </div>
        {/* <BusinessSearch/> */}
        {/* Reviews Await Page */}
        <CustomMain/>
    </div>
);

export default YocalMain;
