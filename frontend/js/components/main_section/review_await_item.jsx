import React from 'react';
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ReviewAwaitItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const imageUrl = this.props.imgUrl
        return (
            <li className="review-await-item">
                <div className="review-await-item-container">
                    <div className="pic-div">
                        <img className="review-await-item-pic" src={imageUrl} alt="" />
                    </div>
                    <div className="pic-info">
                        <div className="review-await-item-title">
                            <Link to="/businesses/1">{this.props.title}</Link>
                        </div>
                        <div className="review-await-item-content medium" >{this.props.content}</div>
                        <div className="ratings">
                            {/* this one should be radio input !!! */}
                            <span className="star">
                                <FontAwesomeIcon icon={faStar} size="lg" color="white"/>
                            </span>
                            <span className="star">
                                <FontAwesomeIcon icon={faStar} size="lg" color="white" />
                            </span>
                            <span className="star">
                                <FontAwesomeIcon icon={faStar} size="lg" color="white" />
                            </span>
                            <span className="star">
                                <FontAwesomeIcon icon={faStar} size="lg" color="white" />
                            </span>
                            <span className="star">
                                <FontAwesomeIcon icon={faStar} size="lg" color="white" />
                            </span>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default ReviewAwaitItem;