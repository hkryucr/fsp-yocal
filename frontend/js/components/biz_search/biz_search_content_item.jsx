import {Link} from 'react-router-dom';
import React from 'react';
import Ratings from 'js/components/utils/ratings';
import 'css/components/biz_search/biz_search_content_item.css';

class BizSearchContentItem extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const curBusiness = this.props.business;
        const phoneNum = `(${curBusiness.phone.slice(2, 5)}) ${curBusiness.phone.slice(5, 8)} - ${curBusiness.phone.slice(8)}`
        const filteredReview = curBusiness.firstReview.slice(0, 400);
        const businessLink = `/biz/${curBusiness.id}`

        return (
            <div className="biz-search-content-item">
                <div className="biz-search-content-item-container">
                    <div className="biz-search-content-item-img">
                        <div className="biz-search-content-item-img-container">
                            <img src={curBusiness.photoUrls[0].photoUrl} />
                        </div>
                    </div>
                    <div className="biz-search-content-detail">
                        <div className="biz-search-content-detail-container">
                            <div className="biz-search-content-detail-header">
                                <div className="biz-search-content-detail-1">
                                    <div className="biz-search-content-detail-title"> 
                                        <span>{this.props.number}. </span> 
                                        <span><Link to={businessLink}>{curBusiness.businessName.split("_").join(" ")}</Link></span>
                                    </div>
                                    <div className="biz-search-content-detail-rating">
                                        <span>
                                            <Ratings rating={curBusiness.rating}/>
                                        </span>
                                        <span>{curBusiness.reviewCount}</span> 
                                    </div>
                                    <div className="biz-search-content-detail-category">
                                        <span>{curBusiness.price}</span>  
                                        <span>{curBusiness.categories}</span>
                                    </div> 
                                </div>
                                <div className="biz-search-content-detail-1">
                                    <div>{phoneNum}</div>
                                    <div>{curBusiness.address1}</div>
                                    <div>{curBusiness.address2 ? curBusiness.address2 : curBusiness.city}</div>
                                </div>
                            </div>
                            <div className="biz-search-content-review">
                                {filteredReview}....
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizSearchContentItem;
