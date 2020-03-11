import React from 'react';
import BizHeaderUpperItems from 'js/components/biz/biz_header_upper_items';
import BizHeaderDownItems from 'js/components/biz/biz_header_down_items';
import 'css/components/biz/biz_header.css';

class BizHeader extends React.Component {
    render() {
        return (
            <div className="biz-header">
                <div className="biz-header-container">
                    <div className="biz-header-items">
                        <div className="biz-header-items-container">
                            <BizHeaderUpperItems 
                                currentUser={this.props.currentUser} 
                                logout={this.props.logout}
                                businessList={this.props.businessList}
                                categoryList={this.props.categoryList}
                                fetchBusinesses={this.props.fetchBusinesses}
                            />
                            <BizHeaderDownItems/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizHeader;
