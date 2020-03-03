import { faUtensils, faHome, faTruckLoading, faHiking } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MainSectionCategories = () => (
    <ul className="categories-tags">
        <li className="categories-tag medium">
            <FontAwesomeIcon icon={faUtensils} />
            <span className="categories-tag-span">Restaurants</span>
        </li>
        <li className="categories-tag medium">
            <FontAwesomeIcon icon={faHome} />
            <span className="categories-tag-span">Home Services</span>
        </li>
        <li className="categories-tag medium">
            <FontAwesomeIcon icon={faTruckLoading} />
            <span className="categories-tag-span">Delivery</span>
        </li>
        <li className="categories-tag medium">
            <FontAwesomeIcon icon={faHiking} />
            <span className="categories-tag-span">Travel</span>
        </li>
    </ul>
)

export default MainSectionCategories;
