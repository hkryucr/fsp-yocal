import { faHamburger, faFish, faSeedling, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link} from 'react-router-dom';

const MainSectionCategories = () => (
  <ul className="categories-tags">
    <li className="categories-tag medium">
      <FontAwesomeIcon icon={faHamburger} />
      <span className="categories-tag-span">
        <Link to="/search?desc=American">American</Link>
      </span>
    </li>
    <li className="categories-tag medium">
      <FontAwesomeIcon icon={faFish} />
      <span className="categories-tag-span">
        <Link to="/search?desc=Seafood">Seafood</Link>
      </span>
    </li>
    <li className="categories-tag medium">
      <FontAwesomeIcon icon={faSeedling} />
      <span className="categories-tag-span">
        <Link to="/search?desc=Vegetarian">Vegetarian</Link>
      </span>
    </li>
    <li className="categories-tag medium">
      <FontAwesomeIcon icon={faPizzaSlice} />
      <span className="categories-tag-span">
        <Link to="/search?desc=Italian">Italian</Link>
      </span>
    </li>
  </ul>
);

export default MainSectionCategories;
