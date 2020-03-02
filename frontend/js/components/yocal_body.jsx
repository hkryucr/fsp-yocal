import React from 'react';
import MainSection from 'js/components/main_section/main_section';
import BusinessSearch from 'js/components/business_search/business_search';
import css from 'css/components/yocal_body.css';


class YocalBody extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        return(
            <div className="yocal-body">
                <MainSection/>
                <BusinessSearch/>
            </div>
        )
    }
}

export default YocalBody;