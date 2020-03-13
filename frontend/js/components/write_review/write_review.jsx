import React from 'react';
import WriteReviewForm from 'js/components/write_review/write_review_form';
import WriteReviewPrevs from 'js/components/write_review/write_review_prevs';
import Profile from 'js/components/utils/profile';
import { Link } from 'react-router-dom';
import 'css/components/write_review/write_review.css';


class WriteReview extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        let searchSplit =  this.props.location.search.split("=");
        let businessName = searchSplit[searchSplit.length-1];
        let businessId = searchSplit[1].split("&")[0];

        return(
            <div className="write-review">
                <div className="write-review-container">
                    <div className="wrtie-review-header">
                        <div className="wrtie-review-header-container">
                            <div className="write-review-left">
                                <div className="write-review-left-logo">
                                    <Link to="/"><img src="assets/yelp_logo.png" /></Link>
                                </div>
                                <div className="write-review-left-title">
                                    Write a Review
                                </div>
                            </div>
                            <div className="write-review-right">
                                <Profile currentUser={this.props.currentUser} logout={this.props.logout} />
                            </div>
                        </div>
                    </div>
                    <div className="wrtie-review-body">
                        <div className="wrtie-review-body-container">
                            <div className="wrtie-review-content">
                                <div className="wrtie-review-content-container">
                                    <div className="wrtie-review-form-title">
                                        {businessName.split("_").join(" ")}
                                    </div>
                                    <WriteReviewForm
                                        businessId={businessId}
                                        businessName={businessName}
                                        currentUser={this.props.currentUser}
                                        history= {this.props.history}
                                        createReview={this.props.createReview}
                                        clearupData={this.props.clearupData}
                                    />
                                    
                                </div>  
                            </div>
                            <WriteReviewPrevs/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WriteReview;
