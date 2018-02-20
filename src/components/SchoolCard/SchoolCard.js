import React from 'react';
import './SchoolCard.css'


const SchoolCard = (props) => {
  return (
    <div className='all-cards-container'>
      <div className='all-cards'>
        <h1 className='school school-name'>{props.school.name}</h1>
        <h3 className='school location school-state'><img className='placeholder-icon' src={require('./placeholder.png')}/> {props.school.city}, {props.school.state}. {props.school.zip}</h3>
        <h2 className='school school-in-state-tuition'>Tuition In-State: ${props.school.tuitionInState}</h2>
        <h2 className='school school-out-of-state-tuition'>Tuition Out-Of-State: ${props.school.tuitionOutState}</h2>
        <div className='school url'><a className='location school-url' href={props.school.url} target='_blank'>Visit Their Website</a></div>
      </div>
    </div>
  )
}

export default SchoolCard;
