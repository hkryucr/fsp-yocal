export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(businesses) {
        let businessObj = {}
        for (let i = 0; i < businesses.length; i++) {
            const curId = businesses[i].id;
            businessObj[curId] = businesses[i]
        }

        for (let i = 0; i < this.markers.length; i++) {
            if (businessObj[this.markers[i]] === undefined) {
                this.removeMarker(this.markers[i]);
            }
        }

        for (let i = 0; i < businesses.length; i++) {
            const { id, businessName, latitude, longitude } = businesses[i];
            if (this.markers[id] === undefined) {
                const newMarker = new google.maps.Marker({
                    id: id,
                    position: {
                        lat: latitude,
                        lng: longitude
                    },
                    map: this.map,
                    businessName: businessName
                });
                this.markers[id] = newMarker;
            }
        }
    }

    removeMarker(marker) {
        this.markers[marker.id].setMap(null);
        delete this.markers[marker.id];
    }

}