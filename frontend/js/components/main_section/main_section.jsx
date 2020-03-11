import React from 'react';
import MainSectionHeader from 'js/components/main_section/main_section_header';
import MainSectionContent from 'js/components/main_section/main_section_content';
import MainSectionCategories from 'js/components/main_section/main_section_categories';
import MainSectionPhoto from 'js/components/main_section/main_section_photo';
import 'css/components/main_section.css'
import 'css/core/ui_font.css'

class MainSection extends React.Component {
    render() {
        return (
            <div className="main-section">
                <div className="main-section-container">
                    <MainSectionHeader 
                        currentUser={this.props.currentUser} 
                        logout={this.props.logout}
                    />
                    <MainSectionContent
                        businesses={this.props.businesses}
                        categoryList={this.props.categoryList}
                        businessList={this.props.businessList}
                        fetchBusinesses={this.props.fetchBusinesses}
                    />
                    <MainSectionCategories />
                    <MainSectionPhoto/>
                </div>  
            </div>
        )
    }
}

export default MainSection;
