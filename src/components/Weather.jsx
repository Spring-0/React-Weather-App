import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import BasicInfo from './BasicInfo';
import Card from './Card';

export default function Weather(props) {
  return (


    <div>
      <div className='flex-grow ml-auto max-w-xl'>
        <div className='backdrop-brightness-75 w-full h-screen'>

          <div>

            <div className='flex justify-end mb-14'>

              <input className="bg-transparent border-b border-gray-350 hover:animate-pulse focus:outline-none flex-grow mr-5 mt-8 text-white ml-5" id="inputTbx" type="text"></input>
              <button className="flex-shrink-0 flex items-center justify-center w-14 h-14 mr-4 rounded-full bg-yellow-50 hover:bg-sky-200 mt-4" onClick={() => props.onCityChange(document.getElementById("inputTbx").value)}><AiOutlineSearch size={35} /></button>

            </div>

            {/* cards go here */}
            <div>
              <Card weatherData={props.weatherData} dataType="overview"/>
              <Card weatherData={props.weatherData} dataType="wind"/>
              <Card weatherData={props.weatherData} dataType="atmosphericConditions"/>
            </div>

          </div>
        </div>
      </div>
      <BasicInfo city={props.city} weatherData={props.weatherData}/>
    </div>




  )
}
