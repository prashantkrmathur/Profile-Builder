import React from 'react';
import "./FieldOptions.css";

const FieldOptions = (props) => {
  const { name, setName, gender, setGender, location, setLocation, school, setSchool, major, setMajor, occupation, setOccupation, religiousBackground, setReligiousBackground, reason, setReason, isLocation, setIsLocation, isSchool, setIsSchool, isOccupation, setIsOccupation, isReligious, setIsReligious, isReason, setIsReason } = props
  console.log("reason", reason);

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

  const rndId = randomIntFromInterval(0, 1000);

  return (
    <div className='settings'>
      <h2>Options</h2>
      <form>
        <div className='bio-element'>
          <label for='person-name-textbox'>Name</label>
          <input type='text' name='person-name-textbox' onChange={handleNameChange} value={name} ></input>
          <label for='gender'> Gender  </label>
            <select name='gender' onChange={handleGenderChange} value={gender}>
              <option>Male</option>
              <option>Female</option>
            </select>
          <button>Random Name</button>
        </div>
        <div className='bio-element'>
          <input type="checkbox" id="location" name="location" onChange={() => setIsLocation(!isLocation)} checked={isLocation}></input>
          <label for="location">Location</label>
          <input type="text" className="location-textbox" onChange={handleLocation} value={location}></input>
          <button>Random Location</button>
        </div>
        <div className='bio-element'>
          <input type="checkbox" id="school" name="school" onChange={() => setIsSchool(!isSchool)} checked={isSchool}></input>
          <label for="school">School</label>
          <input type="text" className="school-textbox" onChange={handleSchool} value={school}></input>
          <button>Random School</button>
          <br></br>
          <label for="degree-textbox">Major</label>
          <input type="text" name="degree-textbox" onChange={handleMajor} value={major}></input>
          <button>Random Major</button>
        </div>
        <div className="bio-element">
          <input type="checkbox" id="occupation" name="occupation" onChange={() => setIsOccupation(!isOccupation)} checked={isOccupation} ></input>
          <label for="occupation">Occupation</label>
          <input type="text" name="occupation-textbox" onChange={handleOccupation} value={occupation}></input>
          <button>Random Occupation</button>
        </div>
        <div className="bio-element">
          <input type="checkbox" id="religion" name="religion" onChange={() => setIsReligious(!isReligious) } checked={isReligious}></input>
          <label for="religion">Religious Background</label>
          <textarea type="text" name="religion-textbox" onChange={handleReligion} style={{ width: '525px', height: '100px' }} value={religiousBackground}></textarea>
          <button>Random Religion</button>
        </div>
        <div className="bio-element">
          <input type="checkbox" id="reason" name="reason" onChange={() => setIsReason(!isReason)} checked={isReason}></input>
          <label for="desire"> Reason for meeting with missionaries </label>
          <textarea type="text" name="desire-textbox" onChange={handleReason}n style={{width:'525px', height:'100px'}} value={reason} ></textarea>
          <button className="restoration">Restoration</button>
          <button className="plan-of-salvation">Plan of Salvation</button>
          <button className="gospel-of-christ">Gospel of Christ</button>
          <button className="law-of-chastity">Law of Chastity</button>
          <button className="word-of-wisdom">Word of Wisdom</button>
          <button>Any Lesson</button>
          </div>
      </form>
    </div>
  )
}

export default FieldOptions