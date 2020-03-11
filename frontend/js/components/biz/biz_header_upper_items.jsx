import React from 'react';
import BizHeaderSearch from 'js/components/biz/biz_header_search';
import BizUserItems from 'js/components/biz/biz_user_items';
import 'css/components/biz/biz_header_upper_items.css';
import { Link } from 'react-router-dom';
class BizHeaderUpperItems extends React.Component{
    render(){
        return (
            <div className="biz-header-upper-items">
                <div className="biz-header-upper-items-container">
                    <div className="header-logo">
                        <div className="header-logo-container">
                            <Link to="/">
                                <img src="assets/yelp_logo.png" />
                            </Link>
                        </div>
                    </div>
                    <BizHeaderSearch 
                        businessList={this.props.businessList}
                        categoryList={this.props.categoryList}
                        fetchBusinesses={this.props.fetchBusinesses}
                    />
                    <BizUserItems currentUser={this.props.currentUser} logout={this.props.logout}/>
                </div>
            </div>
        )
    }
}

export default BizHeaderUpperItems;
