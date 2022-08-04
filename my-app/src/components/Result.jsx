import React from 'react';
import './FieldOptions.css'

const Result = (props) => {
  const { name, gender, location, isLocation, school, isSchool, major, occupation, isOccupation, religiousBackground, isReligious, reason, isReason } = props;
  return (
    <div className='settings'>
      <h2>Result</h2>
      <div style={{ fontSize: '22px' }} className='bio-output'>
        {isLocation && <span>{`${name}`} is from {`${location}`}.</span>}
        {isSchool && <span>{gender === 'Male' ? 'He' : 'She'} is studying {`${major}`} from {`${school}`}. </span>}
        {isOccupation && <span>{gender === 'Male' ? 'He' : 'She'} currently works as a {`${occupation}`}. </span>}
        {isReligious && <span>{gender === 'Male' ? 'He' : 'She'} raised {`${religiousBackground}`}. </span>}
        {isReason && <span>{gender === 'Male' ? 'He' : 'She'}  {`${reason}`}. </span>}
      </div>
    </div>
  )
}

export default Result