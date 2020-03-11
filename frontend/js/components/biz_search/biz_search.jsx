import BizHeader from 'js/components/biz/biz_header';
import BizSearchResults from 'js/components/biz_search/biz_search_results'
import BizSearchMap from 'js/components/biz_search/biz_search_map';
import React from 'react';
import 'css/components/biz_search/biz_search.css';
import _ from 'lodash';

class BizSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchBusinesses({
            text: ""
        });
    }

    render() {

        if (_.isEmpty(this.props.businessList) || _.isEmpty(this.props.categoryList)) {
            return null;
        }
        
        let bizSearchResultsDiv;
        if (_.isEmpty(this.props.businesses)){
            bizSearchResultsDiv = (
                <div className="biz-search-results">
                    <div className="biz-search-results-conatiner">
                        <div className="biz-search-header">
                            <br/>
                            <div className="biz-search-header-title">
                                No Results for "Search Result Here" San Francisco, CA
                            </div>
                            <div className="biz-search-header-wrong-search">
                                <div>Suggestions for improving the results:</div>
                                <div>Check the spelling or try alternate spellings.</div>
                                <div>Try a more general search. e.g. "pizza" instead of "pepperoni"</div>
                                <div>The basic searching algorithm for this app is based on business name and category names. Please search again with an appropriate word</div>                  
                            </div>                        
                        </div>
                    </div>
                </div>
            )
        } else {
            bizSearchResultsDiv = (<BizSearchResults businesses={this.props.businesses} />);
        }

        return (
            <div className="biz-search">
                <div className="biz-search-container">
                    <BizHeader 
                        businessList={this.props.businessList} 
                        categoryList={this.props.categoryList}
                        currentUser={this.props.currentUser} 
                        logout={this.props.logout} 
                        fetchBusinesses={this.props.fetchBusinesses}
                    />
                    <div className="biz-search-body">
                        <div className="biz-search-body-container">
                            { bizSearchResultsDiv }
                            <BizSearchMap businesses={this.props.businesses}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizSearch;
