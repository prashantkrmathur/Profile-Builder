import React from 'react';
import "./FieldOptions.css";

const FieldOptions = () => {
  return (
    <div className='settings'>
      <h2>Options</h2>
      <form>
        <div className='bio-element'>
          <label for='person-name-textbox'>Name</label>
          <input type='text' name='person-name-textbox' ></input>
          <label for='gender'> Gender  </label>
            <select name='gender'>
              <option>Male</option>
              <option>Female</option>
            </select>
          <button>Random Name</button>
        </div>
        <div className='bio-element'>
          <input type="checkbox" id="location" name="location"></input>
          <label for="location">Location</label>
          <input type="text" className="location-textbox"></input>
          <button>Random Location</button>
        </div>
        <div className='bio-element'>
          <input type="checkbox" id="school" name="school"></input>
          <label for="school">School</label>
          <input type="text" className="school-textbox"></input>
          <button>Random School</button>
          <br></br>
          <label for="degree-textbox">Major</label>
          <input type="text" name="degree-textbox"></input>
          <button>Random Major</button>
        </div>
        <div className="bio-element">
          <input type="checkbox" id="occupation" name="occupation"></input>
          <label for="occupation">Occupation</label>
          <button>Random Occupation</button>
        </div>
        <div className="bio-element">
          <input type="checkbox" id="religion" name="religion"></input>
          <label for="religion">Religious Background</label>
          <textarea type="text" name="religion-textbox"></textarea>
          <button>Random Religion</button>
        </div>
        <div className="bio-element">
          <label for="desire"> Reason for meeting with missionaries</label>
          <textarea type="text" name="desire-textbox"></textarea>
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