import React from 'react';
import 'css/components/review_await.css';
import 'css/core/ui_font.css';
import ReviewAwaitItem from 'js/components/main_section/review_await_item';

class ReviewAwait extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // const demoInput = [
        //     {
        //         title: "Sunesy Hair Design",
        //         content: "2335 S El Camino Real"
        //     },
        //     {
        //         title: "Bistro Viet House",
        //         content: "181 Fremont Hub Courtyard"
        //     },
        //     {
        //         title: "Oyster Bar",
        //         content: "2411 W Sahara Ave"
        //     },
        //     {
        //         title: "Dirt Dog - Las Vegas Strip",
        //         content: "3649 S Las Vegas Blvd"
        //     },
        //     {
        //         title: "Cafe Sanuki",
        //         content: "4821 Spring Mountain Rd",
        //     },
        //     {
        //         title: "Yardbird Southern Table & Bar",
        //         content: "3355 Las Vegas Blvd S"
        //     }];
        console.log(this.props.businesses)
        const curBusinesses = this.props.businesses;
        
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
                                <ReviewAwaitItem imgUrl={curBusinesses[1].photoUrls[0].photoUrl} title={curBusinesses[1].businessName} content={curBusinesses[1].address1} />
                                <ReviewAwaitItem imgUrl={curBusinesses[2].photoUrls[0].photoUrl} title={curBusinesses[2].businessName} content={curBusinesses[2].address1}/>
                            </ul>
                            <ul className="review-await-row">
                                <ReviewAwaitItem imgUrl={curBusinesses[3].photoUrls[0].photoUrl} title={curBusinesses[3].businessName} content={curBusinesses[3].address1} />
                                <ReviewAwaitItem imgUrl={curBusinesses[4].photoUrls[0].photoUrl} title={curBusinesses[4].businessName} content={curBusinesses[4].address1} />
                            </ul>
                            <ul className="review-await-row">
                                <ReviewAwaitItem imgUrl={curBusinesses[5].photoUrls[0].photoUrl} title={curBusinesses[5].businessName} content={curBusinesses[5].address1} />
                                <ReviewAwaitItem imgUrl={curBusinesses[6].photoUrls[0].photoUrl} title={curBusinesses[6].businessName} content={curBusinesses[6].address1} />
                            </ul>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ReviewAwait;