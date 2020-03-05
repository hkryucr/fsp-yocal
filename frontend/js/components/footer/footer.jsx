import React from 'react';
import 'css/components/footer.css';
import 'css/core/ui_font.css';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="main-footer">
                        <div className="main-footer-section">

                        </div>
                        <div className="main-footer-img">
                            <img src="assets/footer-img.png" alt=""/>
                        </div>
                        <div className="small main-footer-copyright ">
                            Copyright © 2004–2020 Yelp Inc. Yelp, Yelp logo, Yelp burst and related marks are registered trademarks of Yelp.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;