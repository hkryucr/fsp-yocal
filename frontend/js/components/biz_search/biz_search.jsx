import BizHeader from 'js/components/biz/biz_header';
import BizSearchResults from 'js/components/biz_search/biz_search_results'
import BizSearchMap from 'js/components/biz_search/biz_search_map';
import React from 'react';
import 'css/components/biz_search/biz_search.css';
import _ from 'lodash';

class BizSearch extends React.Component {
    constructor(props) {
        super(props)
        this.searchTerm = this.props.location.search.split('?desc=')[1]
        if (this.searchTerm.length > 0 && this.searchTerm.includes("%20")) {
            this.searchTerm = this.searchTerm.split("%20").join(" ");
        }
    }

    componentDidMount(){   
        this.props.clearupData()     
        this.props.fetchBusinesses({
            text: this.searchTerm,
            bounds: this.props.bounds
        });
    }

    boundsChanged(prevProps){
        if(_.isEmpty(this.props.bounds)) return false;
        if (!_.isEmpty(this.props.bounds) && _.isEmpty(prevProps.bounds)) return true;
        
        if (
          this.props.bounds.northEast.lat !== prevProps.bounds.northEast.lat ||
          this.props.bounds.northEast.lng !== prevProps.bounds.northEast.lng ||
          this.props.bounds.southWest.lat !== prevProps.bounds.southWest.lat ||
          this.props.bounds.southWest.lng !== prevProps.bounds.southWest.lng
        ) {
          return true;
        }
        return false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((this.props.location.search != prevProps.location.search)) {
            this.searchTerm = this.props.location.search.split("?desc=")[1]
            if (this.searchTerm.length > 0 && this.searchTerm.includes("%20")) {
                this.searchTerm = this.searchTerm.split("%20").join(" ");
            }
            this.props.clearupData()
            this.props.fetchBusinesses({
              text: this.searchTerm,
              bounds: this.props.bounds
            });
        }

        if (this.boundsChanged(prevProps)){
            this.props.fetchBusinesses({
              text: this.searchTerm,
              bounds: this.props.bounds
            });
        }

    }

    render() {
        if (_.isEmpty(this.props.businessList) || _.isEmpty(this.props.categoryList)) {
            return (
                <div style={{ display: "flex", margin: "100px 0", justifyContent: "center", alignItems: "center", height: "60%" }}>
                    <img src="assets/Preloader_2.gif" style={{ textAlign: "center", height: "100px", width: "100px", objectFit: "cover" }} />
                </div>
            );
        }

        let bizSearchResultsDiv;
        if (_.isEmpty(this.props.businesses)){
            bizSearchResultsDiv = (
                <div className="biz-search-results">
                    <div className="biz-search-results-conatiner">
                        <div className="biz-search-header">
                            <br/>
                            <div className="biz-search-header-title">
                                No Results for "{this.searchTerm}" San Francisco, CA
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
            bizSearchResultsDiv = (<BizSearchResults searchTerm={this.searchTerm} businesses={this.props.businesses} />);
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
                history={this.props.history}
              />
              <div className="biz-search-body">
                <div className="biz-search-body-container">
                  {bizSearchResultsDiv}
                  <BizSearchMap
                    businesses={this.props.businesses}
                    history={this.props.history}
                    updateBounds={this.props.updateBounds}
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default BizSearch;
