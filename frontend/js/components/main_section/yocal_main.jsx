import React from 'react';
import CustomMain from 'js/components/main_section/custom_main';
import MainSection from 'js/components/main_section/main_section';
import 'css/yocal_main.css';
import 'css/components/yocal_body.css';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class YocalMain extends React.Component{
    componentDidMount(){
        this.props.clearupData();
        this.props.fetchBusinesses({ text: "" });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.search != prevProps.location.search) {
            this.props.clearupData();
            this.props.fetchBusinesses({ text: "" });
        }
    }

    render( ){
        if (_.isEmpty(this.props.businesses) ||
            _.isEmpty(this.props.categoryList) ||
            _.isEmpty(this.props.businessList)
        ) {
            return (
                <div style={{ display: "flex", margin: "100px 0", justifyContent: "center", alignItems: "center", height: "60%" }}>
                    <img src="assets/Preloader_2.gif" style={{ textAlign: "center", height: "100px", width: "100px", objectFit: "cover"}}/>
                </div>
            );
        }

        return (
            <div className="yocal-main">
                <div className="yocal-main-container">
                    <div className="yocal-body">
                        <MainSection 
                            businesses={this.props.businesses}
                            categoryList={this.props.categoryList}
                            businessList={this.props.businessList}
                            currentUser={this.props.currentUser}
                            logout={this.props.logout}
                            fetchBusinesses={this.props.fetchBusinesses}
                            updateFilter={this.props.updateFilter}
                            history={this.props.history}
                    />
                    </div>
                </div>
                <CustomMain 
                    businesses={this.props.businesses}
                    categoryList={this.props.categoryList}
                    businessList={this.props.businessList}
                    currentUser={this.props.currentUser}
                    logout={this.props.logout}
                />
            </div>
        )        
    }
}

export default YocalMain;
