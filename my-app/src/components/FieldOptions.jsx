import React from 'react';
import { city } from './constant/Location';
import { UserName } from './constant/UserName';
import { schoolData } from './constant/School'
import "./FieldOptions.css";
import { MajorData } from './constant/Major';
import { occupationData } from './constant/Occupation';
import { religiousViews } from './constant/ReligiousViews';
import { reasonData } from "./constant/Reason.js"

const FieldOptions = (props) => {
  const { name, setName, gender, setGender, location, setLocation, school, setSchool, major, setMajor, occupation, setOccupation, religiousBackground, setReligiousBackground, reason, setReason, isLocation, setIsLocation, isSchool, setIsSchool, isOccupation, setIsOccupation, isReligious, setIsReligious, isReason, setIsReason } = props

  const handleNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }
  const handleGenderChange = (event) => {
    event.preventDefault();
    setGender(event.target.value);
  }
  const handleLocation = (event) => {
    event.preventDefault();
    setLocation(event.target.value);
  }
  const handleSchool = (event) => {
    event.preventDefault();
    setSchool(event.target.value);
  }
  const handleMajor = (event) => {
    event.preventDefault();
    setMajor(event.target.value);
  }
  const handleOccupation = (event) => {
    event.preventDefault();
    setOccupation(event.target.value);
  }
  const handleReligion = (event) => {
    event.preventDefault();
    setReligiousBackground(event.target.value);
  }
  const handleReason = (event) => {
    event.preventDefault();
    setReason(event.target.value);
  }
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const rndId = randomIntFromInterval(1, 1000);
  const handleRandomName = () => {
    UserName.map((el) => {
      if (rndId === el.id) {
        setName(el.first_name + " " + el.last_name);
        setGender(el.gender)
      }
    })
  }
  const handleRandomLocation = () => {
    city.map((el) => {
      if (rndId === el.id) {
        setLocation(el.location)
      }
    })
  }
  const handleRandomSchool = () => {
    schoolData.map((el) => {
      if (rndId === el.id) {
        setSchool(el.school)
      }
    })
  }
  const handleRandomMajor = () => {
    MajorData.map((el) => {
      if (rndId === el.id) {
        setMajor(el.major)
      }
    })
  }
  const handleRandomOccupation = () => {
    occupationData.map((el) => {
      if (rndId === el.id) {
        setOccupation(el.profession);
      }
    })
  }
  const handleReligiousView = () => {
    let id = randomIntFromInterval(1,8)
    religiousViews.map((el) => {
      if (id === el.id) {
        setReligiousBackground(el.religionView);
      }
    })
  }
  const handleRandomReason = () => {
    let id = randomIntFromInterval(1, 14)
    reasonData.map((el) => {
      if (id === el.id) {
        setReason(el.religionView);
      }
    })
  }
  return (
    <div className='settings'>
      <h2>Options</h2>
      <div className='bio-element'>
        <label for='person-name-textbox'>Name</label>
        <input type='text' name='person-name-textbox' onChange={handleNameChange} value={name} ></input>
        <label for='gender'> Gender  </label>
        <select name='gender' onChange={handleGenderChange} value={gender}>
          <option>Male</option>
          <option>Female</option>
        </select>
        <button onClick={handleRandomName}>Random Name</button>
      </div>
      <div className='bio-element'>
        <input type="checkbox" id="location" name="location" onChange={() => setIsLocation(!isLocation)} checked={isLocation}></input>
        <label for="location">Location</label>
        <input type="text" className="location-textbox" onChange={handleLocation} value={location}></input>
        <button onClick={handleRandomLocation}>Random Location</button>
      </div>
      <div className='bio-element'>
        <input type="checkbox" id="school" name="school" onChange={() => setIsSchool(!isSchool)} checked={isSchool}></input>
        <label for="school">School</label>
        <input type="text" className="school-textbox" onChange={handleSchool} value={school}></input>
        <button onClick={handleRandomSchool}>Random School</button>
        <br></br>
        <label for="degree-textbox">Major</label>
        <input type="text" name="degree-textbox" onChange={handleMajor} value={major}></input>
        <button onClick={handleRandomMajor}>Random Major</button>
      </div>
      <div className="bio-element">
        <input type="checkbox" id="occupation" name="occupation" onChange={() => setIsOccupation(!isOccupation)} checked={isOccupation} ></input>
        <label for="occupation">Occupation</label>
        <input type="text" name="occupation-textbox" onChange={handleOccupation} value={occupation}></input>
        <button onClick={handleRandomOccupation}>Random Occupation</button>
      </div>
      <div className="bio-element">
        <input type="checkbox" id="religion" name="religion" onChange={() => setIsReligious(!isReligious)} checked={isReligious}></input>
        <label for="religion">Religious Background</label>
        <textarea type="text" name="religion-textbox" onChange={handleReligion} style={{ backgroundColor: '#fff7', width: '525px', height: '100px' }} value={religiousBackground}></textarea>
        <button onClick={handleReligiousView}>Random Religion</button>
      </div>
      <div className="bio-element">
        <input type="checkbox" id="reason" name="reason" onChange={() => setIsReason(!isReason)} checked={isReason}></input>
        <label for="desire"> Reason for meeting with missionaries </label>
        <textarea type="text" name="desire-textbox" onChange={handleReason} style={{ width: '525px', height: '100px', backgroundColor:'#fff7' }} value={reason} ></textarea>
        <button className="restoration" onClick={handleRandomReason} style={{ backgroundColor:'#db9b'}}>Restoration</button>
        <button className="plan-of-salvation" onClick={handleRandomReason} style={{ backgroundColor: '#adab' }}>Plan of Salvation</button>
        <button className="gospel-of-christ" onClick={handleRandomReason} style={{ backgroundColor: '#aadb' }}>Gospel of Christ</button>
        <button className="law-of-chastity" onClick={handleRandomReason} style={{ backgroundColor: '#eabb' }}>Law of Chastity</button>
        <button className="word-of-wisdom" onClick={handleRandomReason} style={{ backgroundColor: '#c9cb' }}>Word of Wisdom</button>
        <button onClick={handleRandomReason}>Any Lesson</button>
      </div>
    </div>
  )
}

export default FieldOptions