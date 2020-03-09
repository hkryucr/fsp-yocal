import React from 'react';
import BizCarousel from 'js/components/biz/biz_carousel';
import BizInfo from 'js/components/biz/biz_info';
import 'css/components/biz/biz_main.css';

class BizMain extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="biz-main">
                <div className="biz-main-container">
                    <BizCarousel 
                        currentUser={this.props.currentUser}
                        curBusinessId={this.props.curBusinessId}
                        businesses={this.props.businesses}
                        hours={this.props.hours}
                        reviews={this.props.reviews}
                        categories={this.props.categories}
                        users={this.props.users}
                        reviewers={this.props.reviewers}
                    />
                    <BizInfo 
                        currentUser={this.props.currentUser}
                        curBusinessId={this.props.curBusinessId}
                        businesses={this.props.businesses}
                        hours={this.props.hours}
                        reviews={this.props.reviews}
                        categories={this.props.categories}
                        users={this.props.users}
                        reviewers={this.props.reviewers}
                    />
                </div>
            </div>
        )
    }
}

export default BizMain;
