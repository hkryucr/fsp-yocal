import React from 'react';
import { faStar, faCheckCircle, faEllipsisH, faCamera, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Ratings from 'js/components/utils/ratings';

import 'css/components/biz/biz_info_left.css'

class BizInfoLeftHeader extends React.Component {
    render() {
        return (
            <div className="biz-info-left-header">
                <div className="biz-info-left-header-title">
                    <span>
                        Fog Harbor Fish House
                            </span>
                    <span>
                        <FontAwesomeIcon icon={faCheckCircle} size="lg" color="#0073bb" />
                    </span>
                    <span>
                        Claimed
                            </span>
                </div>
                <div className="biz-info-left-header-rating">
                    <Ratings/>
                    <div className="review-count">
                        {/* {this.props.reviewCount} reviews */}
                        6034 reviews
                            </div>
                </div>
                <div className="review-price-categories">
                    {/* {this.props.reviewCount} reviews */}
                    <div className="review-price">
                        $$
                            </div>
                    <FontAwesomeIcon icon={faEllipsisH} size="1x" color="#757280" />
                    <div className="review-categories">
                        Seafood, Bars
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
