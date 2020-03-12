import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'css/components/utils/ratings.css';
import React from 'react';

const Ratings = () => {
    return (
        <div className="ratings">
            <span className="star">
                <FontAwesomeIcon icon={faStar} size="1x" color="white" />
            </span>
            <span className="star">
                <FontAwesomeIcon icon={faStar} size="1x" color="white" />
            </span>
            <span className="star">
                <FontAwesomeIcon icon={faStar} size="1x" color="white" />
            </span>
            <span className="star">
                <FontAwesomeIcon icon={faStar} size="1x" color="white" />
            </span>
            <span className="star">
                <FontAwesomeIcon icon={faStar} size="1x" color="white" />
            </span>
        </div>        
    )
}
export default Ratings;