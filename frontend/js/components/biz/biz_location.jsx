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
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }
    
    render() {
        return (
            <div className="biz-location">
                <div className="biz-location-map" id="map-container" ref={map => this.mapNode = map}>
                    location
                </div>
                <div className="biz-location-map-content">
                    <div className="biz-location-map-content-container">
                        <div className="biz-location-map-content-left">
                            <div cla>Pier 39</div>
                            <div>Ste A-202</div>
                            <div>San Francisco, CA 94133</div>
                            <div>Fisherman's Wharf, North Beach/Telegraph Hill</div>
                        </div>
                    </div>
                    <div className="biz-location-map-content-left">
                        <div className="biz-location-map-dir">
                            <div className="biz-location-map-dir-button">
                                <span>Get directions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BizLocation);