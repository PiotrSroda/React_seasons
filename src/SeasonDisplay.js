import './SeasonDisplay.css';
import React from 'react'

const seasonConfig = {
  summer: {
    text: `Let's hit the beach!`,
    iconName: 'sun',
    season: 'summer'
  },
  winter: {
    text: "Burr, it's cold!",
    iconName: 'snowflake',
    season: 'winter'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? seasonConfig.summer : seasonConfig.winter;
  } else {
    return lat > 0 ? seasonConfig.winter : seasonConfig.summer;
  }
}

const SeasonDisplay = props => {
  const { text, iconName, season } = getSeason(props.lat, new Date().getMonth());

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

// ITS DIFFERENT - the Stephen grider version comparisons strings which should not be done.
