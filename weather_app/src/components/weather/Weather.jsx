import React, { useEffect,useState } from 'react'
import './Weather.css'
import { CiSearch } from "react-icons/ci";
import { SiAccuweather } from "react-icons/si";
import IconCard from '../icon-card/IconCard';
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
const Weather = () => {
  const [weatherState,setweatherState]=useState(false)
  const search=async(city)=>{
    try{
      const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`
      const response=await fetch(URL);
      const data=await response.json()
      console.log(data)
      setweatherState({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temperature:Math.floor(data.main.temp),
        location:data.name,
        icon:`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      })
    }catch(error){
        console.log(error)
    }
  }
  useEffect(()=>{
    search("Jeddah")
  },[])
  const image=<img src={weatherState.icon} className='weather-icon'/>||<SiAccuweather size={120} color={'yellow'}/>;
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" className="styles" placeholder='Search' />
        <CiSearch  size={55}  className='search'/> 
      </div>
      {image}
      {/* <img src={weatherState.icon} className='weather-icon' alt={<SiAccuweather size={120} color={'yellow'}/>} /> */}
      <p className='temperature'>{weatherState.temperature}°C</p>
      <p className="location">{weatherState.location}</p>
      <div className="weather-data">
        <IconCard  icon={<WiHumidity size={40} />} temp={`${weatherState.humidity} %`} title={'Humidity'}/>
        <IconCard  icon={<FaWind size={40}/>} temp={`${weatherState.windSpeed} km/h`} title={'Wind'}/>
      </div>
    </div>
  )
}

export default Weather
