import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'css/components/utils/ratings.css';
import React from 'react';

const StarDiv = () => (
    <span className="star">
        <FontAwesomeIcon icon={faStar} size="1x" color="white" />
    </span>
);

const WhiteStarDiv = () => (
    <span className="white-star">
        <FontAwesomeIcon icon={faStar} size="1x" color="white" />
    </span>
);

const Ratings = (props) => {
    const elements = [];
    const roundedRating = Math.round(parseFloat(props.rating));
    
    for (var i = 0; i < roundedRating; i++) {
        elements.push(<StarDiv key={i}/>);
    }

    for (var i = 4; i >= roundedRating; i--) {
        elements.push(<WhiteStarDiv key={i}/>);
    }

    return (
        <div className="ratings">
            {elements}
        </div>        
    )
}

export default Ratings;
