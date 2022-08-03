import React from 'react';
import FieldOptions from './FieldOptions';
import Result from './Result';
import "./Main.css";

const Main = () => {
  return (
      <div className='align-item'>
          <FieldOptions />
          <Result/>
    </div>
  )
}

export default Main