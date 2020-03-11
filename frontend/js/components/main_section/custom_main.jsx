import React from 'react';
import 'css/components/custom_main.css';

import ReviewAwait from 'js/components/main_section/review_await';


class CustomMain extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="custom-main">
                <div className="custom-main-container">
                    <div className="custom-main-layout">
                        <ReviewAwait 
                            businesses={this.props.businesses}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomMain;
