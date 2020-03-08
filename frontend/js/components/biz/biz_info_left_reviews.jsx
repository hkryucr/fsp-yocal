import React from 'react';
import 'css/components/biz/biz_reviews.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BizReviewItem from 'js/components/biz/biz_review_item';

class BizReviews extends React.Component {
    render() { 
        return (
            <div className="biz-reviews">
                <div className="biz-reviews-container">
                    <div className="biz-sub-title-wrapper">
                        <div className="biz-sub-title">
                            Recommended Reviews
                        </div>
                    </div>
                    <div className="biz-reviews-layout">
                        <div className="biz-review-search">
                            <form onSubmit={this.handleSubmit} className="biz-search-form">
                                <div className="biz-search-form-container">
                                    <div className="biz-search-form-arrange-unit">
                                        <div className="pseudo-input-label-near">
                                            <span className="pseudo-input-wrapper">
                                                <span className="pseudo-input-field-holder-biz">
                                                    <input type="text" placeholder="Search within reviews" />
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="biz-search-form-button">
                                        <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
                                    </div>
                                </div>
                            </form>
                            <div className="biz-review-search-text">
                                <div>
                                    <span>Sort by</span>
                                    <span>
                                        Newest First
                            </span>
                                </div>
                                <div>
                                    <span>Language</span>
                                    <span>English</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="biz-review-items">
                        <div className="biz-review-items-container">
                            <BizReviewItem />
                            <BizReviewItem />
                            <BizReviewItem />
                            <BizReviewItem />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizReviews;
