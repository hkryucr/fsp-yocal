import React from 'react';
import BizLocation from 'js/components/biz/biz_location';
import BizHour from 'js/components/biz/biz_hour';
import 'css/components/biz/biz_location_hours.css';

class BizInfoLeftLocationHours extends React.Component {
    render(){
        if ((_.isEmpty(this.props.businesses) || _.isEmpty(this.props.hours))) {
            return null;
        }

        const curBusiness = this.props.businesses[this.props.curBusinessId];
        const curHours = curBusiness.hourIds.map((id, idx) => {
            return this.props.hours[id];
        });

        return (
            <div className="biz-location-hours">
                <div className="biz-location-hours-container">
                    <div className="biz-sub-title-wrapper">
                        <div className="biz-sub-title">
                            Location & Hours
                        </div>
                    </div>
                    <div className="biz-location-hours-layout">
                        <BizLocation/>
                        <div className="biz-hours">
                            <div className="biz-hours-container">
                                {curHours.map((hour, idx)=><BizHour key={idx} hour={hour}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizInfoLeftLocationHours;
