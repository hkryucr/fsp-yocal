import React from 'react';
import MainSectionContainer from 'js/components/main_section/main_section_container';
import 'css/components/yocal_body.css';

class YocalBody extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        return(
            <div className="yocal-body">
                <MainSectionContainer/>
            </div>
        )
    }
}

export default YocalBody;
