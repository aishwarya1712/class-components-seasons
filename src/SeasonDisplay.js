import './SeasonDisplay.css'
import React from "react";


const seasonConfig = {
    summer: {
        season: "summer",
        text: "Let's hit the beach!",
        icon: "massive sun"
    },
    winter: {
        season: "winter",
        text: "Brr, it's cold!",
        icon: "massive snowflake"
    }
}
const getSeason = (lat, month) => {
    if(month > 2 & month < 9){
        return lat > 0 ? seasonConfig.summer: seasonConfig.winter
    }
    return lat > 0 ? seasonConfig.winter : seasonConfig.summer
}
const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth)
    console.log(season.season)
    return (
        <div>
              <i className={`${season.icon} icon icon-left`}></i>
              <h1 className="text-center">{season.text}</h1>
              <i className={`${season.icon} icon icon-right`}></i>
        </div>
    )
}

export default SeasonDisplay;