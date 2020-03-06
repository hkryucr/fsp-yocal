import React from 'react';
import BizHeader from 'js/components/biz/biz_header';
import BizMain from 'js/components/biz/biz_main';

import 'css/components/biz/biz.css';

class Biz extends React.Component{
    render(){
        return(
            <div className="biz">
                <div className="biz-container">
                    <BizHeader/>
                    <BizMain/>
               </div>
            </div>
        )
    }
}

export default Biz;