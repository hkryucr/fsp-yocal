import React from 'react';
import 'css/components/biz_search/biz_search_map.css';

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
    }

    render(){
        return (
            <div className="biz-search-map">
                <div className="biz-search-map-container" id="map-container" ref={map => this.mapNode = map}>
                    
                </div>
            </div>
        )
    }
}

export default BizSearchMap;
