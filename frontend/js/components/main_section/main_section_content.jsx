import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

class MainSectionContent extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render (){
        return (
            <div className="main-section-container-content">
                <div className="logo">
                    <img src="/assets/yelp_logo.png" className="logo-image" />
                </div>
                <form onSubmit={this.handleSubmit} className="search-form">
                    <div className="search-form-container">
                        <div className="search-form-arrange-unit">
                            <div className="pseudo-input-label-search">
                                <span className="pseudo-input-wrapper">
                                    <span className="find-span">Find</span>
                                    <span className="pseudo-input-field-holder">
                                        <input type="text" placeholder="burgers, barbers, spas, handymen..." />
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="search-form-middle-border"></div>
                        <div className="search-form-arrange-unit arrange-unit-right">
                            <div className="pseudo-input-label-near">
                                <span className="pseudo-input-wrapper">
                                    <span className="near-span">Near</span>
                                    <span className="pseudo-input-field-holder">
                                        <input type="text" placeholder="San Francisco, CA" />
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="search-form-button">
                            <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default MainSectionContent;
