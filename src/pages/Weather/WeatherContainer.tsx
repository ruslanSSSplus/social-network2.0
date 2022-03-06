import React, {useEffect, useState} from 'react';
import {Loading} from "./Loading/Loading";
import {Weather, weatherOptions} from "./Weather/Weather";
import {weatherAPI} from "../../api/weather-api";




export const WeatherContainer : React.FC =()=>{


    let [isLoading, setIsLoading] = useState(true)
    let [temp, setTemp] = useState(1)
    let [condition, setCondition] = useState('' as  keyof typeof weatherOptions)

    let gerPosition = async (pos: any) => {
        let crd = pos.coords;
     await getWeather(crd.latitude, crd.longitude)
    }


 let getWeather = async (latitude: number, longitude: number) => {

      const {data: {main: {temp}, weather}} = await weatherAPI.getWeather(latitude, longitude)
      setTemp(temp)
     setCondition( weather[0].main as  keyof typeof weatherOptions)
     setIsLoading(false)
  }


   const getLocation = async () => {

        try{
            await navigator.geolocation.getCurrentPosition(gerPosition);
        } catch (error) {
           alert("can't detect location")
        }
    }

 useEffect( () => {
    getLocation()
 }, [])


    return (
    isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} />
    )
}

