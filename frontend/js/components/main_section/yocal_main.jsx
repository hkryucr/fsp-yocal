import React from 'react';
import CustomMain from 'js/components/main_section/custom_main';
import MainSection from 'js/components/main_section/main_section';
import 'css/yocal_main.css';
import 'css/components/yocal_body.css';

class YocalMain extends React.Component{
    componentDidMount(){
        this.props.fetchBusinesses({ text: "" });
    }

    render( ){
        console.log(this.props)
        if (_.isEmpty(this.props.businesses) ||
            _.isEmpty(this.props.categoryList) ||
            _.isEmpty(this.props.businessList)
        ) {
            return null;
        }

        return(
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
                        />
                    </div>
                </div>
                {/* <BusinessSearch/> */}
                {/* Reviews Await Page */}
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
