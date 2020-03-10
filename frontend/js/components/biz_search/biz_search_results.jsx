import React from 'react';
import 'css/components/biz_search/biz_search.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BizSearchContentItem from 'js/components/biz_search/biz_search_content_item';

class BizSearchResults extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="biz-search-results">
                <div className="biz-search-results-conatiner">
                    <div className="biz-search-header">
                        <div className="biz-search-header-path">
                            <span>San Francisco, CA</span>
                            <FontAwesomeIcon icon={faChevronRight} size="sm" color="#757280" />
                            <span>Tenderloin</span>
                            <FontAwesomeIcon icon={faChevronRight} size="sm" color="#757280" />
                            <span>Restaurants</span>
                        </div>
                        <div className="biz-search-header-title">
                            Restaurants near Tenderloin, San Francisco, CA
                        </div>
                        <div className="biz-search-header-all-results">
                            All Results
                        </div>
                    </div>
                    <div className="biz-search-content">
                        <div className="biz-search-content-container">
                            <BizSearchContentItem />
                            <BizSearchContentItem />
                            <BizSearchContentItem />
                            <BizSearchContentItem />
                            <BizSearchContentItem />
                            <BizSearchContentItem />
                            <BizSearchContentItem />
                            <BizSearchContentItem />
                            <BizSearchContentItem/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizSearchResults