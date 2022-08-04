import React from 'react';
import "./FieldOptions.css";

const FieldOptions = (props) => {
  const { name, setName, gender, setGender, location, setLocation, school, setSchool, major, setMajor, occupation, setOccupation, religiousBackground, setReligiousBackground, reason, setReason, isLocation, setIsLocation, isSchool, setIsSchool, isOccupation, setIsOccupation, isReligious, setIsReligious, isReason, setIsReason } = props
  console.log("reason", reason);
  return (
    <div className='settings'>
      <h2>Options</h2>
      <form>
        <div className='bio-element'>
          <label for='person-name-textbox'>Name</label>
          <input type='text' name='person-name-textbox' value={name} ></input>
          <label for='gender'> Gender  </label>
            <select name='gender' value={gender}>
              <option>Male</option>
              <option>Female</option>
            </select>
          <button>Random Name</button>
        </div>
        <div className='bio-element'>
          <input type="checkbox" id="location" name="location" checked={true}></input>
          <label for="location">Location</label>
          <input type="text" className="location-textbox" value={location}></input>
          <button>Random Location</button>
        </div>
        <div className='bio-element'>
          <input type="checkbox" id="school" name="school" checked={isSchool}></input>
          <label for="school">School</label>
          <input type="text" className="school-textbox" value={school}></input>
          <button>Random School</button>
          <br></br>
          <label for="degree-textbox">Major</label>
          <input type="text" name="degree-textbox" value={major}></input>
          <button>Random Major</button>
        </div>
        <div className="bio-element">
          <input type="checkbox" id="occupation" name="occupation" checked={isOccupation} ></input>
          <input type="text" name="occupation-textbox" value={occupation}></input>
          <label for="occupation">Occupation</label>
          <button>Random Occupation</button>
        </div>
        <div className="bio-element">
          <input type="checkbox" id="religion" name="religion" checked={isReligious}></input>
          <label for="religion">Religious Background</label>
          <textarea type="text" name="religion-textbox" style={{ width: '525px', height: '100px' }} value={religiousBackground}></textarea>
          <button>Random Religion</button>
        </div>
        <div className="bio-element">
          <input type="checkbox" id="reason" name="reason" checked={isReason}></input>
          <label for="desire"> Reason for meeting with missionaries </label>
          <textarea type="text" name="desire-textbox" style={{width:'525px', height:'100px'}} value={reason} ></textarea>
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