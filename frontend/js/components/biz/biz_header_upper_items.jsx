import React from 'react';
import BizHeaderSearch from 'js/components/biz/biz_header_search';
import BizUserItems from 'js/components/biz/biz_user_items';
import 'css/components/biz/biz_header_upper_items.css';

class BizHeaderUpperItems extends React.Component{
    render(){
        return (
            <div className="biz-header-upper-items">
                <div className="biz-header-upper-items-container">
                    <div className="header-logo">
                        <div className="header-logo-container">
                            <img src="assets/yelp_logo.png" />
                        </div>
                    </div>
                    <BizHeaderSearch />
                    <BizUserItems />
                </div>
            </div>
        )
    }
}

export default BizHeaderUpperItems;