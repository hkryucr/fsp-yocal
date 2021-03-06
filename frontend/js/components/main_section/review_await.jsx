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
        const curBusinessesKeys = Object.keys(curBusinesses)
        if (curBusinessesKeys.length < 9){
            return null;
        }

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
                                <ReviewAwaitItem 
                                rating={curBusinesses[curBusinessesKeys[0]].rating}
                                itemId={curBusinesses[curBusinessesKeys[0]].id} 
                                imgUrl={curBusinesses[curBusinessesKeys[0]].photoUrls[0].photoUrl} 
                                title={curBusinesses[curBusinessesKeys[0]].businessName} 
                                content={curBusinesses[curBusinessesKeys[0]].address1} />
                                <ReviewAwaitItem 
                                rating={curBusinesses[curBusinessesKeys[1]].rating}
                                itemId={curBusinesses[curBusinessesKeys[1]].id} 
                                imgUrl={curBusinesses[curBusinessesKeys[1]].photoUrls[0].photoUrl} 
                                title={curBusinesses[curBusinessesKeys[1]].businessName} 
                                content={curBusinesses[curBusinessesKeys[1]].address1}/>
                            </ul>
                            <ul className="review-await-row">
                                <ReviewAwaitItem 
                                rating={curBusinesses[curBusinessesKeys[2]].rating}
                                itemId={curBusinesses[curBusinessesKeys[2]].id} 
                                imgUrl={curBusinesses[curBusinessesKeys[2]].photoUrls[0].photoUrl} 
                                title={curBusinesses[curBusinessesKeys[2]].businessName} 
                                content={curBusinesses[curBusinessesKeys[2]].address1} />
                                <ReviewAwaitItem 
                                rating={curBusinesses[curBusinessesKeys[3]].rating}
                                itemId={curBusinesses[curBusinessesKeys[3]].id} 
                                imgUrl={curBusinesses[curBusinessesKeys[3]].photoUrls[0].photoUrl} 
                                title={curBusinesses[curBusinessesKeys[3]].businessName} 
                                content={curBusinesses[curBusinessesKeys[3]].address1} />
                            </ul>
                            <ul className="review-await-row">
                                <ReviewAwaitItem 
                                rating={curBusinesses[curBusinessesKeys[4]].rating}
                                itemId={curBusinesses[curBusinessesKeys[4]].id} 
                                imgUrl={curBusinesses[curBusinessesKeys[4]].photoUrls[0].photoUrl} 
                                title={curBusinesses[curBusinessesKeys[4]].businessName} 
                                content={curBusinesses[curBusinessesKeys[4]].address1} />
                                <ReviewAwaitItem 
                                rating={curBusinesses[curBusinessesKeys[5]].rating}
                                itemId={curBusinesses[curBusinessesKeys[5]].id} 
                                imgUrl={curBusinesses[curBusinessesKeys[5]].photoUrls[0].photoUrl} 
                                title={curBusinesses[curBusinessesKeys[5]].businessName} 
                                content={curBusinesses[curBusinessesKeys[5]].address1} />
                            </ul>
                            <ul className="review-await-row">
                                <ReviewAwaitItem 
                                rating={curBusinesses[curBusinessesKeys[6]].rating}
                                itemId={curBusinesses[curBusinessesKeys[6]].id} 
                                imgUrl={curBusinesses[curBusinessesKeys[6]].photoUrls[0].photoUrl} 
                                title={curBusinesses[curBusinessesKeys[6]].businessName} 
                                content={curBusinesses[curBusinessesKeys[6]].address1} />
                                <ReviewAwaitItem 
                                rating={curBusinesses[curBusinessesKeys[7]].rating}
                                itemId={curBusinesses[curBusinessesKeys[7]].id} 
                                imgUrl={curBusinesses[curBusinessesKeys[7]].photoUrls[0].photoUrl} 
                                title={curBusinesses[curBusinessesKeys[7]].businessName} 
                                content={curBusinesses[curBusinessesKeys[7]].address1} />
                            </ul>
                            <ul className="review-await-row">
                                <ReviewAwaitItem
                                    rating={curBusinesses[curBusinessesKeys[8]].rating}
                                    itemId={curBusinesses[curBusinessesKeys[8]].id}
                                    imgUrl={curBusinesses[curBusinessesKeys[8]].photoUrls[0].photoUrl}
                                    title={curBusinesses[curBusinessesKeys[8]].businessName}
                                    content={curBusinesses[curBusinessesKeys[8]].address1} />
                                <ReviewAwaitItem
                                    rating={curBusinesses[curBusinessesKeys[9]].rating}
                                    itemId={curBusinesses[curBusinessesKeys[9]].id}
                                    imgUrl={curBusinesses[curBusinessesKeys[9]].photoUrls[0].photoUrl}
                                    title={curBusinesses[curBusinessesKeys[9]].businessName}
                                    content={curBusinesses[curBusinessesKeys[9]].address1} />
                            </ul>                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ReviewAwait;
