import React from "react";

import classes from '../Weather.module.css'


type weatherOptionsType = {
    iconName: string
    title: string,
    subTitle: string
    gradient?: [string, string, string?]
}


export const weatherOptions = {
    Rain: {
        iconName: '☔',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'На улице дождь',
        subTitle: 'Не забудьте зонтик'
    } as weatherOptionsType,
    Snow: {
        iconName: '❄',
        // iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'Идет снег',
        subTitle: 'Оденься потеплее'
    } as weatherOptionsType,
    Drizzle: {
        iconName: '🌧',
        // iconName: 'weather-rainy',
        gradient: ['#3A7BD5', '#3A6073'],
        title: 'Моросит чуть-чуть',
        subTitle: 'Не заболей'
    } as weatherOptionsType,
    Thunderstorm: {
        iconName: '🌩',
        // iconName: 'weather-lightning',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'Сейчас гроза',
        subTitle: 'На улицу не ходи'
    } as weatherOptionsType,
    Dust: {
        iconName: '💨',
        //  iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#947168'],
        title: 'Там пыльно',
        subTitle: 'Будь аккуратнее'
    } as weatherOptionsType,
    Mist: {
        iconName: '💨',
        //  conName: 'weather-hazy',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'Очень туманно',
        subTitle: 'Прям как в Англии'
    } as weatherOptionsType,
    Smoke: {
        iconName: '💨',
        // iconName: 'weather-windy',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'Почти как туман',
        subTitle: 'Но не туман'
    } as weatherOptionsType,
    Haze: {
        iconName: '💨',
        //iconName: 'weather-hazy',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'Почти как туман',
        subTitle: 'Но не туман'
    } as weatherOptionsType,
    Sand: {
        iconName: '💨',
        //  iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'Там пыльно',
        subTitle: 'Будь аккуратнее'
    } as weatherOptionsType,
    Ash: {
        iconName: '💨',
        //  iconName: 'weather-hazy',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'Там пыльно',
        subTitle: 'Будь аккуратнее'
    } as weatherOptionsType,
    Squall: {
        iconName: '💨',
        //   iconName: 'weather-hazy',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'На улице не знаю даже что',
        subTitle: 'Не ходи, оно тебе не надо'
    } as weatherOptionsType,
    Tornado: {
        iconName: '🌪',
        //   iconName: 'weather-hazy',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'Бушует торнадо',
        subTitle: 'Сиди дома'
    } as weatherOptionsType,
    Clear: {
        iconName: '🌈',
        //    iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Погода супер',
        subTitle: 'Сходи, погоняй мяч'
    } as weatherOptionsType,
    Clouds: {
        iconName: '⛅',
        //    iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Облачно',
        subTitle: 'Гулять можно'
    } as weatherOptionsType,

}

type WeatherType = {
    temp: number,
    condition: keyof typeof weatherOptions;
}

export const Weather: React.FC<WeatherType> = ({temp, condition}) => {

    return (<div className={classes.halfContainer} style={{ backgroundImage: `linear-gradient(to right, ${weatherOptions[condition].gradient})`, }}>
            <div className={classes.temp}>  {weatherOptions[condition].iconName}</div>
            <div className={classes.temp}> {temp}° </div>
            <div className={classes.title}> {weatherOptions[condition].title} </div>
            <div className={classes.subTitle}> {weatherOptions[condition].subTitle} </div>
            <div className={classes.close}> спрятать </div>
        </div>
  )
}

 // Weather.propTypes = {
 //    temp: PropTypes.number.isRequired,
 //    condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain',
 //         'Snow', 'Dust', 'Mist','Smoke',
 //         'Haze', 'Fog', 'Sand',
 //         'Ash', 'Squall', 'Tornado',
 //         'Clear', 'Clouds']).isRequired }

