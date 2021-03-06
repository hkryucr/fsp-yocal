import React from 'react';
import { faUserFriends, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'css/components/utils/userinfo.css';

class UserInfo extends React.Component{
    constructor(props) {
        super(props);
        this.city = [
            "Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim", "Santa Ana", "Riverside", "Stockton", "Chula Vista", "Irvine", "Fremont", "San Bernardino", "Modesto", "Fontana", "Oxnard", "Moreno Valley", "Huntington Beach", "Glendale", "Santa Clarita", "Garden Grove", "Oceanside", "Rancho Cucamonga", "Santa Rosa", "Ontario", "Lancaster", "Elk Grove", "Corona", "Palmdale", "Salinas", "Pomona", "Hayward", "Escondido", "Torrance", "Sunnyvale", "Orange", "Fullerton", "Pasadena", "Thousand Oaks", "Visalia", "Simi Valley", "Concord", "Roseville", "Victorville", "Santa Clara", "Vallejo", "Berkeley", "El Monte", "Downey", "Costa Mesa", "Inglewood", "Carlsbad", "Fairfield", "West Covina", "Murrieta", "Richmond", "Norwalk", "Antioch", "Temecula", "Burbank", "Daly City", "Rialto", "Santa Maria", "El Cajon", "San Mateo", "Clovis", "Compton", "Jurupa Valley", "Vista", "South Gate", "Mission Viejo", "Vacaville", "Carson", "Hesperia", "Santa Monica", "Westminster", "Redding", "Santa Barbara", "Chico", "Newport Beach", "San Leandro", "San Marcos", "Whittier", "Hawthorne", "Citrus Heights", "Tracy", "Alhambra", "Livermore", "Buena Park", "Menifee", "Hemet", "Lakewood", "Merced", "Chino", "Indio", "Redwood City", "Lake Forest", "Napa", "Tustin", "Bellflower", "Mountain View", "Chino Hills", "Baldwin Park", "Alameda", "Upland", "San Ramon", "Folsom", "Pleasanton", "Union City", "Perris", "Manteca", "Lynwood", "Apple Valley", "Redlands", "Turlock", "Milpitas", "Redondo Beach", "Rancho Cordova", "Yorba Linda", "Palo Alto", "Davis", "Camarillo", "Walnut Creek", "Pittsburg", "South San Francisco", "Yuba City", "San Clemente", "Laguna Niguel", "Pico Rivera", "Montebello", "Lodi", "Madera", "Santa Cruz", "La Habra", "Encinitas", "Monterey Park", "Tulare", "Cupertino", "Gardena", "National City", "Rocklin", "Petaluma", "San Rafael", "La Mesa", "Arcadia", "Fountain Valley", "Diamond Bar", "Woodland", "Santee", "Lake Elsinore", "Porterville", "Paramount", "Eastvale", "Rosemead", "Hanford", "Highland", "Brentwood", "Novato", "Colton", "Cathedral City", "Delano", "Yucaipa", "Watsonville", "Placentia", "Glendora", "Gilroy", "Palm Desert", "Cerritos", "West Sacramento", "Aliso Viejo", "Poway", "La Mirada", "Cypress", "Dublin", "Covina", "Azusa", "Palm Springs", "San Luis Obispo", "Ceres", "San Jacinto", "Lincoln", "Newark", "Lompoc", "El Centro", "Danville", "Bell Gardens", "Coachella", "Rancho Palos Verdes", "San Bruno", "Rohnert Park", "Brea", "La Puente", "Campbell", "San Gabriel", "Beaumont", "Morgan Hill", "Culver City", "Calexico", "Stanton", "La Quinta", "Pacifica", "Montclair", "Oakley", "Monrovia", "Los Banos", "Martinez"];
    }

    titleize(string) {
        if (string.length === 0) {
            return ""
        } else {
            return (string.charAt(0).toUpperCase() + string.slice(1))
        }
    }

    render(){

        const currentUser = this.props.currentUser;
        if (!currentUser) {
            return null;
        }

        return(
            <div className="userinfo-container">
                <div className="userinfo-photo">
                    <img src={currentUser.photoUrl} />
                </div>
                <div className="userinfo-content">
                    <div className="userinfo-content-name">{this.titleize(currentUser.firstname) + " " + currentUser.lastname.slice(0, 1).toUpperCase() + "."}</div>
                    <div className="userinfo-content-location">{this.city[Math.floor(Math.random() * this.city.length)]}, CA</div>
                    <div className="userinfo-content-friend-location-wrapper">
                        <div className="userinfo-content-friends">
                            <FontAwesomeIcon icon={faUserFriends} color="#f15c00" />
                            <span>{currentUser.savedBusinessIds.length}</span>
                        </div>
                        <div className="userinfo-content-reviews">
                            <FontAwesomeIcon icon={faStarHalfAlt} color="#f15c00" />
                            <span>{currentUser.reviewIds.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo;
