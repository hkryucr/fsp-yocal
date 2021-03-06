import BizSearchContentItem from 'js/components/biz_search/biz_search_content_item';
import React from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'css/components/biz_search/biz_search.css';

class BizSearchResults extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let businessArr = Object.values(this.props.businesses);
        
        return (
            <div className="biz-search-results">
                <div className="biz-search-results-conatiner">
                    <div className="biz-search-header">
                        <div className="biz-search-header-path">
                            <span>San Francisco, CA</span>
                            <FontAwesomeIcon icon={faChevronRight} size="sm" color="#757280" />
                            <span>{this.props.searchTerm.length === 0 ? "Restaurants" : this.props.searchTerm}</span>
                        </div>
                        <div className="biz-search-header-title">
                            Restaurants "{this.props.searchTerm}" near San Francisco, CA
                        </div>
                        <div className="biz-search-header-all-results">
                            All Results
                        </div>
                    </div>
                    <div className="biz-search-content">
                        <div className="biz-search-content-container">
                            {businessArr.map((business, idx)=>{                            
                                return <BizSearchContentItem business={business} number={idx+1} key={idx}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizSearchResults;
