import React from 'react';
import BizLocation from 'js/components/biz/biz_location';
import BizHour from 'js/components/biz/biz_hour';
import 'css/components/biz/biz_location_hours.css';

class BizInfoLeftLocationHours extends React.Component {
    render(){
        const demodata = [
            {
                start: "1100",
                end: "2100",
                day: 0,
                business_id: 1
            },
            {
                start: "1100",
                end: "2100",
                day: 1,
                business_id: 1
            },
            {
                start: "1100",
                end: "2100",
                day: 2,
                business_id: 1
            },
            {
                start: "1100",
                end: "2100",
                day: 3,
                business_id: 1
            },
            {
                start: "1100",
                end: "2200",
                day: 4,
                business_id: 1
            },
            {
                start: "1100",
                end: "2200",
                day: 5,
                business_id: 1
            },
            {
                start: "1100",
                end: "2100",
                day: 6,
                business_id: 1
            }
        ]

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
                                {demodata.map((hour, idx)=><BizHour key={idx} hour={hour}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizInfoLeftLocationHours;
