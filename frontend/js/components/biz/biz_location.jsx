import React from 'react';
import 'css/components/biz/biz_location.css';
import { withRouter } from 'react-router-dom';

class BizLocation extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: parseFloat(this.props.curBusiness.latitude), lng: parseFloat(this.props.curBusiness.longitude) }, // this is SF
            zoom: 13
        };
        
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        const newMarker = new google.maps.Marker({
            id: 0,
            position: {
                lat: this.props.curBusiness.latitude,
                lng: this.props.curBusiness.longitude
            },
            map: this.map,
            businessName: this.props.curBusiness.businessName,
        });
    }
    
    render() {
        console.log(this.props, "biz_location")

        const curBusiness = this.props.curBusiness;
        const directLocation = `https://www.google.com/maps?q=${curBusiness.latitude},${curBusiness.longitude}`

        return (
            <div className="biz-location">
                <div className="biz-location-map" id="map-container" ref={map => this.mapNode = map}>
                </div>
                <div className="biz-location-map-content">
                    <div className="biz-location-map-content-container">
                        <div className="biz-location-map-content-left">
                            <div>{curBusiness.address1}</div>
                            <div>{curBusiness.address2}</div>
                            <div>{curBusiness.city}, {curBusiness.state} {curBusiness.zipcode}</div>
                            <div>{curBusiness.businessName.split("_").join(" ")}</div>
                        </div>
                    </div>
                    <div className="biz-location-map-content-left">
                        <div className="biz-location-map-dir">
                            <div className="biz-location-map-dir-button">
                                <a href={directLocation}>Direction</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BizLocation);