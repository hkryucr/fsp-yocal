import React from 'react';
import 'css/components/review_await.css';
import 'css/core/ui_font.css';
import ReviewAwaitItem from 'js/components/main_section/review_await_item';

class ReviewAwait extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const demoInput = [
            {
                title: "Sunesy Hair Design",
                content: "2335 S El Camino Real"
            },
            {
                title: "Bistro Viet House",
                content: "181 Fremont Hub Courtyard"
            },
            {
                title: "Oyster Bar",
                content: "2411 W Sahara Ave"
            },
            {
                title: "Dirt Dog - Las Vegas Strip",
                content: "3649 S Las Vegas Blvd"
            },
            {
                title: "Cafe Sanuki",
                content: "4821 Spring Mountain Rd",
            },
            {
                title: "Yardbird Southern Table & Bar",
                content: "3355 Las Vegas Blvd S"
            }];
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
                                <ReviewAwaitItem title={demoInput[0].title} content={demoInput[0].content}/>
                                <ReviewAwaitItem title={demoInput[1].title} content={demoInput[1].content}/>
                            </ul>
                            <ul className="review-await-row">
                                <ReviewAwaitItem title={demoInput[2].title} content={demoInput[2].content}/>
                                <ReviewAwaitItem title={demoInput[3].title} content={demoInput[3].content}/>
                            </ul>
                            <ul className="review-await-row">
                                <ReviewAwaitItem title={demoInput[4].title} content={demoInput[4].content}/>
                                <ReviewAwaitItem title={demoInput[5].title} content={demoInput[5].content}/>
                            </ul>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ReviewAwait;