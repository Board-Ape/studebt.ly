import React from 'react';

const SchoolCard = (props) => {
  return (
    <div>
      {props.school['school.name']}
    </div>
  )
}

export default SchoolCard;
