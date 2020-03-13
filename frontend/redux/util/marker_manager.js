import React from 'react';
import { Link } from 'react-router-dom';

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
            const { id, businessName, latitude, longitude, photoUrls, reviewCount, rating, categories } = businesses[i];
            const firstImg = photoUrls[0]
            if (this.markers[id] === undefined) {
                const newMarker = new google.maps.Marker({
                    id: id,
                    position: {
                        lat: latitude,
                        lng: longitude
                    },
                    map: this.map,
                    businessName: businessName,
                });
                
                newMarker.setLabel({ 
                    text: `${i + 1}`,
                    color: `rgb(255, 255, 255)`,
                    fontWeight: `bold`,
                    fontSize: `12px`
                    })               

                const infoWindow = new google.maps.InfoWindow()

                google.maps.event.addListener(newMarker, 'mouseover', function(){
                    infoWindow.setContent('<div class="' + 'g-map-infowindow' + '">' + '<img src="' + photoUrls[0].photoUrl + '" style="' + 'height:200px; width:200px; object-fit:cover; border-radius: 4px' + '"/>' + '<div class="' + 'g-map-infowindow-title' + '">' + businessName.split("_").join(" ") + '</div>' + '<div class="' + 'g-map-infowindow-rating' + '">' + '<span class="' + 'g-map-infowindow-rating-span' + '">' + rating + '</span>' + " rating out of " + '<span class="' + 'g-map-infowindow-rating-span' + '">' + reviewCount + '</span>'+ " reviews" + '</div>' + '<div>' + categories + '</div>' + '</div>');
                    infoWindow.open(this.map, newMarker);
                })

                google.maps.event.addListener(newMarker, 'mouseout', function () {
                    infoWindow.setContent('this is marker');
                    infoWindow.close(this.map, newMarker);
                })

                this.markers[id] = newMarker;
            }
        }
    }

    // removeMarker(marker) {
    //     this.markers[marker.id].setMap(null);
    //     delete this.markers[marker.id];
    // }

}
