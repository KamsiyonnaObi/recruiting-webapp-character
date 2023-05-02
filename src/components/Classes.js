import React from 'react'
import { useState } from 'react';
import { CLASS_LIST } from '../consts';
import ClassRequirement from './ClassRequirement';


const Classes = (props) => {

    const [selectedClass, setSelectedClass] = useState(null)

    const handleClick = (className) => {
        setSelectedClass(className)
    }

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
              onClick={() => handleClick(cName)}
              style={{ backgroundColor: props.meetsRequirements(cName) ? 'green' : 'white' }}
            >
              {cName}
            </button>
          )
        })}
      </ul>
      {selectedClass && <ClassRequirement classDetails={selectedClass}/>}
    </div>
  )
}

export default Classes