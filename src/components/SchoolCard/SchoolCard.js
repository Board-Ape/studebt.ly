import React from 'react';
import './SchoolCard.css'

const SchoolCard = (props) => {
  return (
    <div className='all-cards-container'>
      <div className='all-cards'>
        <h1 className='school school-name'>{props.school['school.name']}</h1>
        <h2 className='school school-state'>{props.school['school.state']}</h2>
        <h2 className='school school-city'>{props.school['school.city']}</h2>
        <h2 className='school school-zip'>{props.school['school.zip']}</h2>
        <h2 className='school school-school-url'>{props.school['school.school_url']}</h2>
      </div>
    </div>
  )
}

export default SchoolCard;
