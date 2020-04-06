import BizHeader from 'js/components/biz/biz_header';
import BizMain from 'js/components/biz/biz_main';
import React from 'react';
import 'css/components/biz/biz.css';
import _ from 'lodash';

class Biz extends React.Component{
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this); 
    }

    goBack() {
        this.props.history.goBack();
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.curBusinessId);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (this.props.match.params.id !== prevProps.match.params.id){
            this.props.clearupData()
            this.props.fetchBusiness(this.props.match.params.id);
        }
    }

    render(){
        if (
            (_.isEmpty(this.props.businesses)) || 
            (_.isEmpty(this.props.hours)) ||
            (_.isEmpty(this.props.reviews)) ||
            (_.isEmpty(this.props.categories)) ||
            (_.isEmpty(this.props.reviewers)) || 
            (!Object.keys(this.props.businesses).includes(this.props.curBusinessId)) 
            ) {
            return (
                <div style={{ display: "flex", margin: "100px 0", justifyContent: "center", alignItems: "center", height: "60%" }}>
                    <img src="assets/Preloader_2.gif" style={{ textAlign: "center", height: "100px", width: "100px", objectFit: "cover" }} />
                </div>
            );
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
                        history={this.props.history}
                    />
                    <BizMain 
                        deleteReview={this.props.deleteReview}
                        currentUser={this.props.currentUser}
                        curBusinessId={this.props.curBusinessId}
                        businesses={this.props.businesses}
                        hours={this.props.hours}
                        reviews={this.props.reviews}
                        categories={this.props.categories}
                        users={this.props.users}
                        reviewers={this.props.reviewers}
                        history={this.props.history}
                        clearupData={this.props.clearupData}
                    />
               </div>
            </div>
        )
    }
}

export default Biz;
