import React from 'react';
import 'css/components/review_await.css'

class ReviewAwait extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="review-await">
                <div className="review-await-container">
                    <div className="review-await-title">Your Next Review Awaits</div>
                    <div className="review-await-items">
                        Your Next Review Awaits
                    </div>

                </div>
            </div>
        )
    }
}

export default ReviewAwait;