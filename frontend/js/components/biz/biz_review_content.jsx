import React from 'react';
import Ratings from 'js/components/utils/ratings';
import 'css/components/biz/biz_review_content.css';
import { faLightbulb, faLaughSquint, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BizReviewContent extends React.Component {   
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault()        
        if(this.props.currentUser.id === this.props.review.authorId){
            if (window.confirm('Are you sure you wish to delete this review?')){
                this.props.deleteReview(this.props.review.id);
            }
        } else {
            alert("You can't delete others' reviews");
        }
    }
    
    render() {

        let rawDate = this.props.review.reviewDate;
        const reviewDate = rawDate.slice(0, 10);
        return (
            <div className="biz-review-content">
                <div className="biz-review-content-container">
                    <div className="biz-review-content-1">
                        <div className="biz-review-content-1-container">
                            <div className="biz-review-ratings">
                                <Ratings/>
                            </div>
                            <div className="biz-review-date">{reviewDate}</div>
                        </div>
                        <div className="biz-review-delete" onClick={this.handleClick}> X </div>
                    </div>
                    <div className="biz-review-content-2">
                        {this.props.review.text}
                    </div>
                    <div className="biz-review-content-2-pic"></div>
                    <div className="biz-review-content-3">
                        <div className="useful">
                            <FontAwesomeIcon icon={faLightbulb } size="2x" />
                            <span> Useful {(this.props.review.useful === 0) ? null : this.props.review.useful}</span>
                        </div>
                        <div className="funny">
                            <FontAwesomeIcon icon={faLaughSquint} size="2x" />
                            <span> Funny {(this.props.review.funny === 0) ? null : this.props.review.funny}</span>
                        </div>
                        <div className="cool">
                            <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                            <span> Cool {(this.props.review.cool === 0) ? null : this.props.review.cool} </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizReviewContent;
