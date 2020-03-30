import React from 'react';
import 'css/components/utils/model.css';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Modal extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        const modal = document.getElementById("modal");
        const moodelBackground = document.getElementById("modal-background");
        const closeButton = document.getElementById("modal-close-button");

        closeButton.addEventListener("click", function () {
            modal.classList.toggle("closed");
            moodelBackground.classList.toggle("closed");
        });
    }

    render(){
        return (
            <>
                <div className="modal closed" id="modal">
                    <div className="modal-container">
                        <div className="modal-x-mark" id="modal-close-button">
                            <FontAwesomeIcon icon={faTimes} color="#2c2c2c30" size="1x" />
                        </div>
                        <h1 className="modal-title">Notification</h1>
                        <div className="modal-content">
                            <div className="modal-item">
                                <span><FontAwesomeIcon icon={faSquare} color="black" size="2x" /></span>
                                <span>
                                    <b>Yocal is a clone app of Yelp.</b> Despite the efforts of cloning the original Yelp website as much as possible, <b className="modal-bold"> buttons such as Events, Talk, For Businesses, etc., are not available, </b> mainly due to the limited access to the real data.
                                </span>
                            </div>
                            <div className="modal-item">
                                <span><FontAwesomeIcon icon={faSquare} color="black" size="2x" /></span>
                                <span>
                                    All the information about businesses and reviews in Yocal is built on the real data from Yelp Fusion API, <b className="modal-bold">however, it might not be accurate and could be overwritten by other Yocal users.</b> 
                                </span>
                            </div>
                            <div className="modal-item">
                                <span><FontAwesomeIcon icon={faSquare} color="black" size="2x" /></span>
                                <span>
                                    To get real information about businesses in your neighborhood, please visit <a href="http://yelp.com">Yelp.com</a>.
                                </span>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="modal-background closed" id="modal-background">
                </div>
            </>
        )
    }
}

export default Modal;