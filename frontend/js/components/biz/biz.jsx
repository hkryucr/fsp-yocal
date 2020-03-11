import BizHeader from 'js/components/biz/biz_header';
import BizMain from 'js/components/biz/biz_main';
import React from 'react';
import 'css/components/biz/biz.css';
import _ from 'lodash';

class Biz extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.curBusinessId);
    }

    render(){
        if (
            (_.isEmpty(this.props.businesses)) || 
            (_.isEmpty(this.props.hours)) ||
            (_.isEmpty(this.props.reviews)) ||
            (_.isEmpty(this.props.categories)) ||
            (_.isEmpty(this.props.reviewers))
            ) {
            return null;
        }

        const businessList = this.props.businesses[this.props.curBusinessId].businessList;
        const categoryList = this.props.businesses[this.props.curBusinessId].categoryList;
        return(
            <div className="biz">
                <div className="biz-container">
                    <BizHeader 
                        categoryList={categoryList}
                        businessList={businessList} 
                        currentUser={this.props.currentUser} 
                        logout={this.props.logout}
                    />
                    <BizMain 
                        currentUser={this.props.currentUser}
                        curBusinessId={this.props.curBusinessId}
                        businesses={this.props.businesses}
                        hours={this.props.hours}
                        reviews={this.props.reviews}
                        categories={this.props.categories}
                        users={this.props.users}
                        reviewers={this.props.reviewers}
                    />
               </div>
            </div>
        )
    }
}

export default Biz;
