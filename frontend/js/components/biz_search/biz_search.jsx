import React from 'react';
import 'css/components/biz_search/biz_search.css';
import BizHeader from 'js/components/biz/biz_header';
import BizSearchResults from 'js/components/biz_search/biz_search_results'
import BizSearchMap from 'js/components/biz_search/biz_search_map';


class BizSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="biz-search">
                <div className="biz-search-container">
                    <BizHeader currentUser={this.props.currentUser} logout={this.props.logout} />
                    <div className="biz-search-body">
                        <div className="biz-search-body-container">
                            <BizSearchResults/>
                            <BizSearchMap/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizSearch;