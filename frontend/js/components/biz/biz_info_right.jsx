import React from 'react';
import 'css/components/biz/biz_info_right.css'
import { faExternalLinkAlt, faPhoneAlt, faDirections } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'

class BizInfoRight extends React.Component {
    render() {
        const curBusiness = this.props.businesses[this.props.curBusinessId]
        const phoneNum = `(${curBusiness.phone.slice(2, 5)}) ${curBusiness.phone.slice(5, 8)} - ${curBusiness.phone.slice(8)}`
        const mapLocation = `https://www.google.com/maps?q=${curBusiness.latitude},${curBusiness.longitude}`

        return (
            <div className="biz-info-right">
                <div className="biz-info-right-container">
                    <section className="biz-info-right-section">
                        <div className="biz-info-right-section-item">
                            <div className="biz-info-right-section-item-container">
                                <FontAwesomeIcon color="#2b273c" icon={faExternalLinkAlt} size="2x"/>
                                <a href={curBusiness.url}>Visit {curBusiness.businessName.split("_").join(" ")} through Yelp</a>
                            </div>
                        </div>
                        <div className="biz-info-right-section-item">
                            <div className="biz-info-right-section-item-container">
                                <FontAwesomeIcon color="#2b273c" icon={faPhoneAlt}  size="2x" />
                                <span>{phoneNum}</span> 
                            </div>
                        </div>
                        <div className="biz-info-right-section-item">
                            <div className="biz-info-right-section-item-container">
                                <FontAwesomeIcon color="#2b273c" icon={faDirections} size="2x" />
                                <a href={mapLocation}>Get Directions</a>
                            </div>
                        </div>
                        <div className="biz-info-right-section-item">
                            <div className="biz-info-right-section-item-container">
                                <FontAwesomeIcon color="#2b273c" icon={faCommentDots} size="2x" />
                                <a href="google.map.com">Message the Business</a>
                            </div>
                        </div>
                    </section>
                    <section className="biz-info-right-section">
                        <div className="biz-info-right-section-title">
                            Do you want to make a reservation?
                        </div>
                        <div className="biz-info-right-section-content">
                            This is a Yelp clone website. We don't provide online reservation management system. Visit Yelp website to make a reservation.
                        </div>
                        <a href="http://www.yelp.com" className="biz-info-right-section-button">
                            <span>
                                Visit Yelp Website
                            </span>
                        </a>
                    </section>
                </div>
            </div>
        )
    }
}

export default BizInfoRight;