import * as APIUtil from 'util/hour_api_util';

export const RECEIVE_HOURS = "RECEIVE_HOURS";
export const RECEIVE_HOUR = "RECEIVE_HOUR";

export const receiveHours = (hours) => ({
    type: RECEIVE_HOURS,
    hours
})

export const receiveHour = (hour) => ({
    type: RECEIVE_HOUR,
    hour
})

export const fetchHours = (ids) => (dispatch) => APIUtil.fetchHours(ids).then((res) => {
    return dispatch(receiveHours(res))
})

export const fetchHour = (id) => (dispatch) => APIUtil.fetchHour(id).then((res) => {
    return dispatch(receiveHour(res))
})
