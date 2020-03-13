import BizInfoLeft from 'js/components/biz/biz_info_left';
import BizInfoRight from 'js/components/biz/biz_info_right';
import React from 'react';
import 'css/components/biz/biz_info.css';

class BizInfo extends React.Component {
    render() {
        return (
            <div className="biz-info">
                <div className="biz-info-container">
                    <div className="biz-info-layout">
                        <div className="biz-info-layout-container">
                            <BizInfoLeft 
                                deleteReview={this.props.deleteReview}
                                currentUser={this.props.currentUser}
                                curBusinessId={this.props.curBusinessId}
                                businesses={this.props.businesses}
                                hours={this.props.hours}
                                reviews={this.props.reviews}
                                categories={this.props.categories}
                                users={this.props.users}
                                reviewers={this.props.reviewers}
                                history={this.props.history}
                                clearupData={this.props.clearupData}
                            />
                            <BizInfoRight 
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
                </div>
            </div>
        )
    }
}

export default BizInfo;
