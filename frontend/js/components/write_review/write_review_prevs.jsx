import React from 'react';
import 'css/components/write_review/write_review_prev.css';
import BizReviewUserinfo from 'js/components/biz/biz_review_userinfo';
import BizReviewContent from 'js/components/biz/biz_review_content';
import 'css/components/biz/biz_review_item.css';
import _ from 'lodash';

class WriteReviewPrevs extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        
        if (_.isEmpty(this.props.reviews) && _.isEmpty(this.props.reviewers) ) {
            return null;
        }
        const curReviews = Object.values(this.props.reviews);

        const BizReviewItem = (props) => (
            <>
                <BizReviewUserinfo reviewer={props.reviewers[props.review.authorId]} />
                <BizReviewContent
                    currentUser={props.currentUser}
                    review={props.review}
                />
            </>
        )

        return(
            <div className="wrtie-review-prevs">
                <div className="wrtie-review-prevs-container">
                    {(curReviews.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate)))
                    .map((review, idx) => { 
                        return <BizReviewItem 
                        clearupData={this.props.clearupData} 
                        currentUser={this.props.currentUser} 
                        deleteReview={this.props.deleteReview} 
                        key={idx} 
                        review={review} 
                        reviewers={this.props.reviewers} />
                    })}

                    
                </div>
            </div> 
        )  
    }
}

export default WriteReviewPrevs;
