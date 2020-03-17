import React from 'react';
import { Link } from 'react-router-dom';
import 'css/components/biz/biz_header_down_items.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainSectionCategories from 'js/components/main_section/main_section_categories'

class BizHeaderDownItems extends React.Component {
    render() {
        return (
            <div className="biz-header-down-items">
                <div className="biz-header-down-items-container">
                    <div className="biz-header-down-items-ph">
                        <div className="biz-header-down-items-ph-container">
                        </div>
                    </div>
                    {/* <MainSectionCategories/> */}
                    <div className="biz-header-down-items-layout">
                        <div className="bh-item-container">
                            <div className="bh-item">
                                <Link to="/" className="bh-item-link" >
                                    <span> Restaurants</span> 
                                    <FontAwesomeIcon icon={faChevronDown} size="sm" color="#2b273c"  />
                                </Link>
                            </div>
                        </div>
                        <div className="bh-item-container">
                            <div className="bh-item">
                                <Link to="/" className="bh-item-link" >
                                    <span> Home Services</span> 
                                    <FontAwesomeIcon icon={faChevronDown} size="sm" color="#2b273c"/>
                                </Link>
                            </div>
                        </div>
                        <div className="bh-item-container">
                            <div className="bh-item">
                                <Link to="/" className="bh-item-link" >
                                    <span> Auto Services</span> 
                                    <FontAwesomeIcon icon={faChevronDown} size="sm" color="#2b273c"/>
                                </Link>
                            </div>
                        </div>
                        <div className="bh-item-container">
                            <div className="bh-item">
                                <Link to="/" className="bh-item-link" >
                                    <span> More</span>
                                    <FontAwesomeIcon icon={faChevronDown} size="sm" color="#2b273c"/>
                                </Link>
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
