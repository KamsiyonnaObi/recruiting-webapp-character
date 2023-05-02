import React from 'react'
import { useState } from 'react';
import { CLASS_LIST } from '../consts';


const Classes = (props) => {
  return (
    <div>
        <h2>Classes</h2>
        <ul className="class_list">
        {Object.keys(CLASS_LIST).map(cName => {
          //const classMin = CLASS_LIST[className];
          return (
            <button
              key={cName}
              className="class_btn"
              style={{ backgroundColor: props.meetsRequirements(cName) ? 'green' : 'white' }}
            >
              {cName}
            </button>
          )
        })}
      </ul>
    </div>
  )
}

export default Classes