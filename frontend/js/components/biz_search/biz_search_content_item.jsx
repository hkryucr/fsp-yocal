import React from 'react';
import Ratings from 'js/components/utils/ratings';
import 'css/components/biz_search/biz_search_content_item.css';

class BizSearchContentItem extends React.Component{
    render(){
        return (
            <div className="biz-search-content-item">
                <div className="biz-search-content-item-container">
                    <div className="biz-search-content-item-img">
                        <div className="biz-search-content-item-img-container">
                            <img src="assets/Oyster Bar.jpg" />
                        </div>
                    </div>
                    <div className="biz-search-content-detail">
                        <div className="biz-search-content-detail-container">
                            <div className="biz-search-content-detail-header">
                                <div className="biz-search-content-detail-1">
                                    <div className="biz-search-content-detail-title"> 
                                        <span>1. </span> 
                                        <span>Hog Island Oyster Co</span>
                                    </div>
                                    <div className="biz-search-content-detail-rating">
                                        <span>
                                            <Ratings/>
                                        </span>
                                        <span>8971</span> 
                                    </div>
                                    <div className="biz-search-content-detail-category">
                                        <span>$$</span>  
                                        <span>Seafood, Seafood Markets, Live/Raw Food</span>
                                    </div> 
                                </div>
                                <div className="biz-search-content-detail-1">
                                    <div>(415) 292-8151</div>
                                    <div>501 Geary St</div>
                                    <div>Tenderloin</div>
                                </div>
                            </div>
                            <div className="biz-search-content-review">
                                “I came in here with my boyfriend at 7pm. I came in here with my boyfriend at 7pm.I came in here with my boyfriend at 7pm. I came in here with my boyfriend at 7pm. I came in here with my boyfriend at 7pm. It was pretty busy but there was no wait so that was nice. We sat at a high table across from another couple. That was a little to close for…” more
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizSearchContentItem;
