export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = [];
    }

    updateMarkers(businesses, history) {
        let businessObj = {}
        for (let i = 0; i < businesses.length; i++) {
            const curId = businesses[i].id;
            businessObj[curId] = businesses[i]
        }

        for (let i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
        }

        this.markers = []

        for (let i = 0; i < businesses.length; i++) {
            const { id, businessName, latitude, longitude, photoUrls, reviewCount, rating, categories } = businesses[i];
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

                const infoWindow = new google.maps.InfoWindow({
                  disableAutoPan: true
                });

                google.maps.event.addListener(newMarker, 'mouseover', function(){
                    infoWindow.setContent('<div class="' + 'g-map-infowindow' + '">' + '<img src="' + photoUrls[0].photoUrl + '" style="' + 'height:180px; width:180px; object-fit:cover; border-radius: 4px' + '"/>' + '<div class="' + 'g-map-infowindow-title' + '">' + businessName.split("_").join(" ") + '</div>' + '<div class="' + 'g-map-infowindow-rating' + '">' + '<span class="' + 'g-map-infowindow-rating-span' + '">' + rating + '</span>' + " rating out of " + '<span class="' + 'g-map-infowindow-rating-span' + '">' + reviewCount + '</span>'+ " reviews" + '</div>' + '<div>' + categories + '</div>' + '</div>');
                    infoWindow.open(this.map, newMarker);

                    document.getElementsByClassName("biz-search-content-item")[i + 1].focus({ preventScroll: false });
                })

                google.maps.event.addListener(newMarker, 'mouseout', function () {
                    infoWindow.setContent('this is marker');
                    infoWindow.close(this.map, newMarker);
                })

                google.maps.event.addListener(newMarker, 'click', function (e) {
                    if(history) return history.push(`/biz/${id}`)
                })

                this.markers.push(newMarker);
            }
        }
    }
}
