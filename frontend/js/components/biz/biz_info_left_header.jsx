import React from 'react';
import { faStar, faCheckCircle, faEllipsisH, faCamera, faShare, faBookmark, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Ratings from 'js/components/utils/ratings';
import _ from 'lodash';
import 'css/components/biz/biz_info_left.css'


class BizInfoLeftHeader extends React.Component {
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
                    {/* ratings!! */}
                    <Ratings/>
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
                        <Link to="/" className="biz-info-button">
                            <FontAwesomeIcon icon={faStar} size="1x" color="white" />
                            <span>
                                Write a Review
                            </span>
                        </Link>
                        <Link to="/" className="biz-info-button">
                            <FontAwesomeIcon icon={faCamera} size="1x" color="#2b273c" />
                            <span>
                                Add Photo
                                    </span>
                        </Link>
                        <Link to="/" className="biz-info-button">
                            <FontAwesomeIcon icon={faShare} size="1x" color="#2b273c" />
                            <span>
                                Share
                            </span>
                        </Link>
                        <Link to="/" className="biz-info-button">
                            <FontAwesomeIcon icon={faBookmark} size="1x" color="#2b273c" />
                            <span>
                                Save
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizInfoLeftHeader;
