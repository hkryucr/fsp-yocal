import React from 'react';
import 'css/components/biz/biz_reviews.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BizReviewItem from 'js/components/biz/biz_review_item';

class BizReviews extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            filteredReviews: [],
            text: ""
        }

        this.handleTextChange=this.handleTextChange.bind(this);
    }

    handleTextChange(e) {
        const value = e.target.value;
        let filteredReviews = [];
        if(value.length > 0 ){
            const regex = new RegExp(`${value.toLowerCase()}`, 'i');
            filteredReviews = this.curReviews.filter(review => regex.test(review.text.toLowerCase()));
        } else if (value.length === 0){
            const regex = new RegExp(` `, 'i');
            filteredReviews = this.curReviews.filter(review => regex.test(review.text.toLowerCase()));
        }

        this.setState({
            filteredReviews,
            text: value
        })
    }

    componentDidMount(){
        const curBusiness = this.props.businesses[this.props.curBusinessId];
        this.curReviews = curBusiness.reviewIds.map((id, idx) => this.props.reviews[id]);
        this.setState({ 
            filteredReviews: this.curReviews
        })
    }

    // componentDidUpdate(prevProp, prevState){
    //     if (Object.keys(prevProp.reviews).length != Object.keys(this.props.reviews).length){
    //         this.props.fetchReviews()
    //     }        
    // }


    render() {        
        if(this.state.filteredReviews === undefined ){
            return null;
        }
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
                            <form onSubmit={this.handleSubmit} className="header-search-form">
                                <div className="header-search-form-container">
                                    <div className="header-search-form-arrange-unit">
                                        <div className="pseudo-input-label-near">
                                            <span className="pseudo-input-wrapper">
                                                <span className="pseudo-input-field-holder-biz">
                                                    <input type="text" placeholder="Search within reviews" onChange={this.handleTextChange}/>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="header-search-form-button">
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
                            {(this.state.filteredReviews.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate))).map((review, idx) => <BizReviewItem clearupData={this.props.clearupData} currentUser={this.props.currentUser} deleteReview={this.props.deleteReview} key={idx} review={review} reviewers={this.props.reviewers}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizReviews;
