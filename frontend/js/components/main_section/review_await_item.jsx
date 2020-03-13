import React from 'react';
import { Link } from 'react-router-dom';
import Ratings from 'js/components/utils/ratings';

class ReviewAwaitItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const imageUrl = this.props.imgUrl
        const bizLinkId = `/biz/${this.props.itemId}`;
        return (
            <li className="review-await-item">
                <div className="review-await-item-container">
                    <div className="pic-div">
                        <img className="review-await-item-pic" src={imageUrl}/>
                    </div>
                    <div className="pic-info">
                        <div className="review-await-item-title">
                            <Link to={bizLinkId}>{this.props.title.split("_").join(" ")}</Link>
                        </div>
                        <div className="review-await-item-content medium" >{this.props.content}</div>
                            <Ratings rating={this.props.rating}/>
                    </div>
                </div>
            </li>
        )
    }
}

export default ReviewAwaitItem;
