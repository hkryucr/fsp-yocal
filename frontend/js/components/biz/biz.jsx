import React from 'react';
import BizHeader from 'js/components/biz/biz_header';
import 'css/components/biz/biz.css';

class Biz extends React.Component{
    render(){
        return(
            <div className="biz">
                <div className="biz-container">
                    
                    <BizHeader/>

                    <div className="biz-main">
                        <div className="biz-main-container">
                            <div className="biz-photo">
                                <div className="biz-photo-container">
                                    <div className="biz-photo-carousel">

                                    </div>
                                </div>
                            </div>
                            <div className="biz-details">
                                <div className="biz-details-container">
                                    <div className="biz-details-layout">
                                        <div className="biz-details-left">
                                            <div className="biz-details-left-container">
                                
                                            </div>
                                        </div>
                                        <div className="biz-details-right">
                                            <div className="biz-details-right-container">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

               </div>
            </div>
        )
    }
}

export default Biz;