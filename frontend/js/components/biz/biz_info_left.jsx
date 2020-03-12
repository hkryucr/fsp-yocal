import React from 'react';
import 'css/components/biz/biz_info_left.css'
import BizInfoLeftHeader from 'js/components/biz/biz_info_left_header';
import BizInfoLeftLocationHours from 'js/components/biz/biz_info_left_location_hours';
import BizInfoLeftReviews from 'js/components/biz/biz_info_left_reviews';

class BizInfoLeft extends React.Component {
    render() {
        return (
            <div className="biz-info-left">
                <div className="biz-info-left-container">
                    <BizInfoLeftHeader 
                        currentUser={this.props.currentUser}
                        curBusinessId={this.props.curBusinessId}
                        businesses={this.props.businesses}
                        hours={this.props.hours}
                        reviews={this.props.reviews}
                        categories={this.props.categories}
                        users={this.props.users}
                        reviewers={this.props.reviewers}
                        history={this.props.history}
                    />
                    <BizInfoLeftLocationHours
                        currentUser={this.props.currentUser}
                        curBusinessId={this.props.curBusinessId}
                        businesses={this.props.businesses}
                        hours={this.props.hours}
                        reviews={this.props.reviews}
                        categories={this.props.categories}
                        users={this.props.users}
                        reviewers={this.props.reviewers}
                    />
                    <BizInfoLeftReviews 
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

export default BizInfoLeft;
