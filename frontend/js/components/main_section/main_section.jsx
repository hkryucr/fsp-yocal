import React from 'react';
import { faSearch, faUtensils, faHome, faTruckLoading, faHiking } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'css/components/main_section.css'
import 'css/core/ui_font.css'

class MainSection extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        
    }

    render() {
        return (
            <div className="main-section">
                <div className="main-section-container">
                    <div className="main-section-container-header">
                        <div className="main-section-container-header-left">
                            <div className="main-section-container-header-item medium">Write a Review</div>
                            <div className="main-section-container-header-item medium">Events</div>
                            <div className="main-section-container-header-item medium">Talk</div>
                        </div>
                        <div className="main-section-container-header-right">
                            <div className="main-section-container-header-item medium">Log In</div>
                            <div className="main-section-container-header-item medium signup-button">Sign Up</div>
                        </div>
                    </div>
                    <div className="main-section-container-content">
                        <div className="logo">
                            <img src="/assets/yelp_logo.png" className="logo-image"alt=""/>
                        </div>
                        <form onSubmit={this.handleSubmit} className="search-form">
                            <div className="search-form-container">
                                <div className="search-form-arrange-unit">
                                    <div className="pseudo-input-label-search">
                                        <span className="pseudo-input-wrapper">
                                            <span className="find-span">Find</span>
                                            <span className="pseudo-input-field-holder">
                                                <input type="text" placeholder="burgers, barbers, spas, handymen..."/>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-form-arrange-unit arrange-unit-right">
                                    <div className="pseudo-input-label-near">
                                        <span className="pseudo-input-wrapper">
                                            <span className="near-span">Near</span>
                                            <span className="pseudo-input-field-holder">
                                                <input type="text" value="San Francisco, CA" />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-form-button">
                                    <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <ul className="categories-tags">
                        <li className="categories-tag medium">
                            <FontAwesomeIcon icon={faUtensils}/>
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
                    <div className="main-photo-info">
                        <div className="main-photo-info-container">
                            <div className="main-photo-place medium">Yeite Cafe</div>
                            <div className="main-photo-credit medium">Photo by Adri M.</div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default MainSection;