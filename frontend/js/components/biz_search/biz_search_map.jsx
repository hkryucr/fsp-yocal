import React from 'react';
import 'css/components/biz_search/biz_search_map.css';
import MarkerManager from 'util/marker_manager';

class BizSearchMap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(Object.values(this.props.businesses));

        this.map.addListener('idle', () => {
            const bounds = this.map.getBounds();
            const ne = bounds.getNorthEast();
            const sw = bounds.getSouthWest();
            const boundsObj = {
                northEast: {
                    lat: ne.lat(),
                    lng: ne.lng()
                },
                southWest: {
                    lat: sw.lat(),
                    lng: sw.lng()
                }
            };
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("this is running?")
        if (!(_.isEmpty(this.props.businesses))) {
            const businessArr = Object.values(this.props.businesses);
            this.MarkerManager.updateMarkers(businessArr);
        }
    }   

    render(){
        console.log(this.props)
        return (
            <div className="biz-search-map">
                <div className="biz-search-map-container" id="map-container" ref={map => this.mapNode = map}>
                    
                </div>
            </div>
        )
    }
}

export default BizSearchMap;
