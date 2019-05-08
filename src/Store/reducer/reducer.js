import * as actiontypes from '../action/actionTypes';
const initialState = {
    tempSelector: "REALTIME",
    humiditySelector: "REALTIME",
    temperature: [],
    humidity: [],
    temperatureDaily: [],
    humidityDaily: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actiontypes.SET_WEATHER: 
            let temperature = [], humidity=[];
            action.weather.feeds.forEach(element => {
                temperature.push({created_at: element.created_at, value: parseInt(element.field1)})
                humidity.push({created_at: element.created_at, value: parseInt(element.field2)});
            })
            return {
                ...state,
                temperature: temperature,
                humidity: humidity
            }
        case actiontypes.SET_WEATHER_DAILY:
            let temp = [], humi=[]
            return {
                ...state,
                temperatureDaily: [...action.weather],
                humidityDaily: [...action.weather]
            }
        default: return state
    }
}

export default reducer;