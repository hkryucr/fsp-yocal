import React from 'react';
import { Link } from 'react-router-dom';
import 'css/components/biz/biz_header_down_items.css';
import { faHamburger, faFish, faSeedling, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BizHeaderDownItems extends React.Component {
    render() {
        return (
            <div className="biz-header-down-items">
                <div className="biz-header-down-items-container">
                    <div className="biz-header-down-items-ph">
                        <div className="biz-header-down-items-ph-container">
                        </div>
                    </div>
                    <div className="biz-header-down-items-layout">
                        <div className="bh-item-container">
                            <div className="bh-item">
                                <span className="bh-item-link">
                                    <FontAwesomeIcon icon={faHamburger} />
                                    <Link to="/search?desc=American">American</Link>
                                </span>
                            </div>
                        </div>
                        <div className="bh-item-container">
                            <div className="bh-item">
                                <span className="bh-item-link">
                                    <FontAwesomeIcon icon={faFish} />
                                    <Link to="/search?desc=Seafood">Seafood</Link>
                                </span>
                            </div>
                        </div>
                        <div className="bh-item-container">
                            <div className="bh-item">
                                <span className="bh-item-link">
                                    <FontAwesomeIcon icon={faSeedling} />
                                    <Link to="/search?desc=Vegetarian">Vegetarian</Link>
                                </span>
                            </div>
                        </div>
                        <div className="bh-item-container">
                            <div className="bh-item">
                                <span className="bh-item-link">
                                    <FontAwesomeIcon icon={faPizzaSlice} />
                                    <Link to="/search?desc=Italian">Italian</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="biz-header-down-placeholder"></div>
                </div>
            </div>
        )
    }
}

export default BizHeaderDownItems;
