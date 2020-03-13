import React from 'react';
import BizReviewUserinfo from 'js/components/biz/biz_review_userinfo';
import BizReviewContent from 'js/components/biz/biz_review_content';
import 'css/components/biz/biz_review_item.css';

class BizReviewItem extends React.Component{

    render(){
        return (
            <div className="biz-review-item">
                <div className="biz-review-item-container">
                    <BizReviewUserinfo reviewer={this.props.reviewers[this.props.review.authorId]}/>
                    <BizReviewContent 
                        clearupData={this.props.clearupData} 
                        currentUser={this.props.currentUser} 
                        review={this.props.review} 
                        deleteReview={this.props.deleteReview}
                    />
                </div>
            </div>
        )
    }
}

export default BizReviewItem;
