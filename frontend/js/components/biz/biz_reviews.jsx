import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BizReviews extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="biz-search-form">
                <div className="biz-search-form-container">
                    <div className="biz-search-form-arrange-unit">
                        <div className="pseudo-input-label-near">
                            <span className="pseudo-input-wrapper">
                                <span className="pseudo-input-field-holder-biz">
                                    <input type="text" placeholder="Search within reviews" />
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="biz-search-form-button">
                        <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
                    </div>
                </div>
            </form>
        )
    }
}

export default BizReviews;
