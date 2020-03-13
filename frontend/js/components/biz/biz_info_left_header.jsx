import React from 'react';
import { faStar, faCheckCircle, faEllipsisH, faCamera, faShare, faBookmark, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ratings from 'js/components/utils/ratings';
import _ from 'lodash';
import 'css/components/biz/biz_info_left.css'


class BizInfoLeftHeader extends React.Component {
    constructor(props){
        super(props);
        this.writeReview = this.writeReview.bind(this);
    }

    writeReview(e){
        e.preventDefault();
        const curBizName = this.props.businesses[this.props.curBusinessId].businessName;
        const curBizId = this.props.curBusinessId;
        this.props.history.push(`/writeareview?bizId=${curBizId}&bizName=${curBizName}`);
    }

    render() {
        if ((_.isEmpty(this.props.businesses) || _.isEmpty(this.props.categories))){
            return null;
        }

        const curBusiness = this.props.businesses[this.props.curBusinessId];
        const curCategories = curBusiness.categoryIds.map((id, idx)=>{
            return this.props.categories[id].name;
        });

        return (
            <div className="biz-info-left-header">
                <div className="biz-info-left-header-title">
                    <span>
                        {curBusiness.businessName.split("_").join(" ")}
                    </span>
                    <span>
                        {curBusiness.isClaimed ? <FontAwesomeIcon icon={faCheckCircle} size="lg" color="#0073bb" /> : <FontAwesomeIcon icon={faTimesCircle} size="lg" color="#f4131a" /> }                        
                    </span>
                    <span>
                        {curBusiness.isClaimed ? "Claimed" : "Not Claimed" }
                    </span>
                </div>
                <div className="biz-info-left-header-rating">
                    <Ratings rating={curBusiness.rating}/>
                    <div className="review-count">
                        {curBusiness.reviewCount} reviews
                    </div>
                </div>
                <div className="review-price-categories">
                    <div className="review-price">
                        {curBusiness.price}
                    </div>
                    <FontAwesomeIcon icon={faEllipsisH} size="1x" color="#757280" />
                    <div className="review-categories">
                        {curCategories.join(", ")}
                    </div>
                </div>
                <div className="biz-info-left-buttons">
                    <div className="biz-info-button-container">
                        <div className="biz-info-button" onClick={this.writeReview}>
                            <FontAwesomeIcon icon={faStar} size="1x" color="white" />
                            <span>
                                Write a Review
                            </span>
                        </div>
                        <div className="biz-info-button" onClick={this.writeReview}>
                            <FontAwesomeIcon icon={faCamera} size="1x" color="#2b273c" />
                            <span>
                                Add Photo
                            </span>
                        </div>
                        <div className="biz-info-button" onClick={this.writeReview}>
                            <FontAwesomeIcon icon={faShare} size="1x" color="#2b273c" />
                            <span>
                                Share
                            </span>
                        </div>
                        <div className="biz-info-button" onClick={this.writeReview}>
                            <FontAwesomeIcon icon={faBookmark} size="1x" color="#2b273c" />
                            <span>
                                Save
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizInfoLeftHeader;
