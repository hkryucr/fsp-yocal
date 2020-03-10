import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class BizHeaderSearch extends React.Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render(){
        return (
            <div className="header-search">
                <div className="biz-header-container-content">
                    <form onSubmit={this.handleSubmit} className="header-search-form">
                        <div className="header-search-form-container">
                            <div className="header-search-form-arrange-unit">
                                <div className="pseudo-input-label-header-search">
                                    <span className="pseudo-input-wrapper-biz">
                                        <span className="pseudo-input-field-holder-biz">
                                            <input type="text" placeholder="burgers, barbers, spas, handymen..." />
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="header-search-form-arrange-unit arrange-unit-right">
                                <div className="header-search-form-middle-border"></div>
                                <div className="pseudo-input-label-near">
                                    <span className="pseudo-input-wrapper">
                                        <span className="pseudo-input-field-holder-biz">
                                            <input type="text" placeholder="San Francisco, CA" />
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="header-search-form-button">
                                <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default BizHeaderSearch