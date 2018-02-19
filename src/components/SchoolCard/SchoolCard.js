import React from 'react';
import './SchoolCard.css'

const SchoolCard = (props) => {
  console.log(props);
  return (
    <div className='all-cards-container'>
      <div className='all-cards'>
        <h1 className='school school-name'>{props.school.name}</h1>
        <h2 className='school school-in-state-tuition'>Tuition In-State: ${props.school.tuitionInState}</h2>
        <h2 className='school school-out-of-state-tuition'>Tuition Out-Of-State: ${props.school.tuitionOutState}</h2>
        <h2 className='school location school-state'>{props.school.state}</h2>
        <h2 className='school location school-city'>{props.school.city}</h2>
        <h2 className='school location school-zip'>{props.school['school.zip']}</h2>
        <div className='school url'><a className='location school-url' href={props.school['school.school_url']} target='_blank'>Visit Their Website</a></div>
      </div>
    </div>
  )
}

export default SchoolCard;
