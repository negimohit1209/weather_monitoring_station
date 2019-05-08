import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setWeather = (weather) => {
    return {
        type: actionTypes.SET_WEATHER,
        weather: weather
    }
}

export const setWeatherDaily = (weather) => {
    return {
        type: actionTypes.SET_WEATHER_DAILY,
        weather: weather
    }
}

export const initWeather = () => {
    return dispatch => {
        axios.get('https://api.thingspeak.com/channels/745010/feeds.json?api_key=XLC1LU022NEKU3G0&results=20')
            .then(response => {
                dispatch(setWeather(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const initDailyWeather = () => {
    return dispatch => {
        axios.get('https://hostelmanagementsystem-e9d3d.firebaseio.com/Data.json')
            .then(response => {
                dispatch(setWeatherDaily(response.data))
            })
            .catch(error => {
                console.log(error);
            })
    }
}