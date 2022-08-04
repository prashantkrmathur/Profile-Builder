import React, { useState } from 'react';
import FieldOptions from './FieldOptions';
import Result from './Result';
import "./Main.css";

const Main = () => {
  const [name, setName] = useState('Prashant Kumar');
  const [gender, setGender] = useState('Male');
  const [location, setLocation] = useState('Nawada Bihar');
  const [isLocation, setIsLocation] = useState(true);
  const [school, setSchool] = useState('Haldia Institute of Technology');
  const [isSchool, setIsSchool] = useState(true);
  const [major, setMajor] = useState('B.tech In Information Technology');
  const [occupation, setOccupation] = useState('Software Development Engineer');
  const [isOccupation, setIsOccupation] = useState(true);
  const [religiousBackground, setReligiousBackground] = useState('Hindu');
  const [isReligious, setIsReligious] = useState(true);
  const [reason, setReason] = useState('To understand the culture');
  const [isReason, setIsReason] = useState(true);
  
  return (
      <div className='align-item'>
      <FieldOptions
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        location={location}
        setLocation={setLocation}
        isLocation={isLocation}
        setIsLocation={setIsLocation}
        school={school}
        setSchool={setSchool}
        isSchool={isSchool}
        setIsSchool={setIsSchool}
        major={major}
        setMajor={setMajor}
        occupation={occupation}
        setOccupation={setOccupation}
        isOccupation={isOccupation}
        setIsOccupation={setIsOccupation}
        religiousBackground={religiousBackground}
        isReligious={isReligious}
        setIsReligious={setIsReligious}
        setReligiousBackground={setReligiousBackground}
        reason={reason}
        setReason={setReason}
        isReason={isReason}
        setIsReason={setIsReason}
      />
      <Result/>
    </div>
  )
}

export default Main