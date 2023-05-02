import React from 'react'
import { useState, useEffect } from 'react';

import { SKILL_LIST } from '../consts';

const Skills = (props) => {
    
  const [points, setPoints] = useState(10 + (4 * props.intelligenceModifier))
  const [pointsSpent, setPointsSpent] = useState(0)
  const [skills, setSkills] = useState(
    SKILL_LIST.map(skill => ({
      name: skill.name,
      attributeModifier: skill.attributeModifier,
      value: 0
    }))
  )
  //change to intellingence points?

  //Set Total Points everytime Intelligence Modifier changes
  useEffect(() => {
    const newPoints = 10 + (4 * props.intelligenceModifier)
    setPoints(newPoints)
    setPoints(newPoints >= 10 ? newPoints : 10) //Ensure Character has at least 10 points

  }, [props.intelligenceModifier])
  
  useEffect(() => {
    const newPointsSpent = skills.reduce((total, skill) => total + skill.value, 0);
    setPointsSpent(newPointsSpent);
  }, [skills])
  //console.log(pointsSpent)

  const handleSkillChange = (index, newValue) => {
    const updatedSkills = [...skills]
    const skill = updatedSkills[index]
    const maxPoints = points - pointsSpent + skill.value
    //handle minimum and maximum points
    if (newValue < 0) {
      newValue = 0;
    } else if (newValue > maxPoints) {
      newValue = maxPoints
    }
    skill.value = newValue
    setSkills(updatedSkills)
    setPointsSpent(pointsSpent + (newValue - skill.value)) // update points remaining
  }

  return (
    <div className="skills_container">
        <h2>Skills</h2>
        <p>Total Points: {points}</p>
        <p>Points remaining: {points - pointsSpent}</p>
        {skills.map((skill, index) => {
            const modifier = props[skill.attributeModifier.toLowerCase() + 'Modifier']
            const total = skill.value + modifier
            return (
            <div key={index}>
                <p>{skill.name} - points: {skill.value} 
                <button onClick={() => handleSkillChange(index, skill.value - 1)}>-</button>
                <button onClick={() => handleSkillChange(index, skill.value + 1)}>+</button> 
                modifier ({skill.attributeModifier}): {modifier} total: {total}
                {/* {console.log(skill.attributeModifier)} */}
                </p>
            </div>
        )
      })}
    </div>
  )
}

export default Skills