import React from 'react';
import 'css/components/review_await.css';
import 'css/core/ui_font.css';
import ReviewAwaitItem from 'js/components/main_section/review_await_item';

class ReviewAwait extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const curBusinesses = this.props.businesses;
        if (Object.keys(curBusinesses).length < 6){
            return null;
        }
        console.log(curBusinesses)
        return (
            <div className="review-await">
                <div className="review-await-container">
                    <div className="review-await-title h5">
                        <h2>
                            Your Next Review Awaits
                        </h2>
                    </div>
                    <div className="review-await-items">
                        <div className="review-await-items-container">
                            <ul className="review-await-row">
                                <ReviewAwaitItem itemId={curBusinesses[1].id} imgUrl={curBusinesses[1].photoUrls[0].photoUrl} title={curBusinesses[1].businessName} content={curBusinesses[1].address1} />
                                <ReviewAwaitItem itemId={curBusinesses[2].id} imgUrl={curBusinesses[2].photoUrls[0].photoUrl} title={curBusinesses[2].businessName} content={curBusinesses[2].address1}/>
                            </ul>
                            <ul className="review-await-row">
                                <ReviewAwaitItem itemId={curBusinesses[3].id} imgUrl={curBusinesses[3].photoUrls[0].photoUrl} title={curBusinesses[3].businessName} content={curBusinesses[3].address1} />
                                <ReviewAwaitItem itemId={curBusinesses[4].id} imgUrl={curBusinesses[4].photoUrls[0].photoUrl} title={curBusinesses[4].businessName} content={curBusinesses[4].address1} />
                            </ul>
                            <ul className="review-await-row">
                                <ReviewAwaitItem itemId={curBusinesses[5].id} imgUrl={curBusinesses[5].photoUrls[0].photoUrl} title={curBusinesses[5].businessName} content={curBusinesses[5].address1} />
                                <ReviewAwaitItem itemId={curBusinesses[6].id} imgUrl={curBusinesses[6].photoUrls[0].photoUrl} title={curBusinesses[6].businessName} content={curBusinesses[6].address1} />
                            </ul>
                            <ul className="review-await-row">
                                <ReviewAwaitItem itemId={curBusinesses[7].id} imgUrl={curBusinesses[7].photoUrls[0].photoUrl} title={curBusinesses[7].businessName} content={curBusinesses[7].address1} />
                                <ReviewAwaitItem itemId={curBusinesses[8].id} imgUrl={curBusinesses[8].photoUrls[0].photoUrl} title={curBusinesses[8].businessName} content={curBusinesses[8].address1} />
                            </ul>                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ReviewAwait;