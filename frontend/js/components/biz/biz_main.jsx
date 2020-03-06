import React from 'react';
import BizCarousel from 'js/components/biz/biz_carousel';
import BizInfo from 'js/components/biz/biz_info';

class BizMain extends React.Component{
    render(){
        return(
            <div className="biz-main">
                <div className="biz-main-container">
                    <BizCarousel />
                    <BizInfo />
                </div>
            </div>
        )
    }
}

export default BizMain;