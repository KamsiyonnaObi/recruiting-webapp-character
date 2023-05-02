import React from 'react'
import { CLASS_LIST } from '../consts';

const ClassRequirement = (props) => {

    if (!props.classDetails) {
        return null;
    }

    const classMin = CLASS_LIST[props.classDetails]

  return (
    <div>
        <h2>ClassRequirement</h2>
        <ul>
            {Object.keys(classMin).map((attrName) => (
            <li key={attrName}>
                {/* {console.log(classMin[attrName])} */}
                {attrName}: {classMin[attrName]}
            </li>
            ))}
        </ul>
        <button onClick={props.handleClose}>Close</button>
    </div>
  )
}

export default ClassRequirement