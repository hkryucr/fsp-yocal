import React from 'react';
import 'css/components/biz/biz_info.css';
import BizInfoLeft from 'js/components/biz/biz_info_left';

class BizInfo extends React.Component {
    render() {
        return (
            <div className="biz-info">
                <div className="biz-info-container">
                    <div className="biz-info-layout">
                        <BizInfoLeft/>
                        <div className="biz-info-right">
                            <div className="biz-info-right-container">
                                ..
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BizInfo