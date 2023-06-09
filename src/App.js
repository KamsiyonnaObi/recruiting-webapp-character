import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';

import Classes from "./components/Classes.js"
import ClassRequirement from './components/ClassRequirement';
import Skills from './components/Skills';

function App() {
  const [attributes, setAttributes] = useState(
    ATTRIBUTE_LIST.map(attribute => ({
      name: attribute,
      value: 10,
      modifier: 0
    }))
  );

  function calculateModifier(value){
    return Math.floor((value - 10) / 2)
   }

  const handleAttributeChange = (index, newValue) => {
    const updatedAttributes = [...attributes]
    updatedAttributes[index].value = newValue
    updatedAttributes[index].modifier = calculateModifier(newValue)
    setAttributes(updatedAttributes)
  }
//     useEffect(() => {   
//  } , [attributes])

function meetsRequirements(className) {
  const classRequirements = CLASS_LIST[className]
  for (const attribute in classRequirements) {
    if (attributes.find(a => a.name === attribute).value < classRequirements[attribute]) {
      return false;
    }
  }
  return true;
}

function findIntelligenceModifier() {
  return attributes.find(a => a.name.toLowerCase() === 'intelligence').modifier
  }

function findStrengthModifier() {
  return attributes.find(a => a.name.toLowerCase() === 'strength').modifier
  }

function findDexterityModifier() {
  return attributes.find(a => a.name.toLowerCase() === 'dexterity').modifier
  }

function findConstitutionModifier() {
  return attributes.find(a => a.name.toLowerCase() === 'constitution').modifier
  }

function findWisdomModifier() {
  return attributes.find(a => a.name.toLowerCase() === 'wisdom').modifier
  }

function findCharismaModifier() {
  return attributes.find(a => a.name.toLowerCase() === 'charisma').modifier
  }
  //console.log(attributes)

  //function to send the character
  function saveCharacter() {
    fetch(
      "https://recruiting.verylongdomaintotestwith.ca/api/{{KamsiyonnaObi}}/character",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(attributes),
      }
    )
      .then((response) => {
        console.log(response.data); //do whatever with response
      })
      .catch((error) => console.error(error)); //for catching any errors that come back

    fetch(
      "https://recruiting.verylongdomaintotestwith.ca/api/{{KamsiyonnaObi}}/character",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response.data); //do whatever with response
      })
      .catch((error) => console.error(error)); //for catching any errors that come back
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <button className="save_btn" onClick={() => saveCharacter()}> Save character </button>
      <section className="App-section">
        <div>
          <h2>Attributes</h2>
          {attributes.map((attribute, index) => (
          <div key={index}>
            <p>{attribute.name}
              <button onClick={() => handleAttributeChange(index, attribute.value - 1)}>-</button>
              <span>{attribute.value}</span>
              <button onClick={() => handleAttributeChange(index, attribute.value + 1)}>+</button>
              {/* {console.log(attribute)} */}
              (Modifier: {attribute.modifier})
            </p>
          </div>
          ))}
        </div>
        <Classes meetsRequirements = {meetsRequirements}/>
        <ClassRequirement />
        <Skills 
          intelligenceModifier = {findIntelligenceModifier()}
          strengthModifier = {findStrengthModifier()}
          dexterityModifier = {findDexterityModifier()}
          constitutionModifier = {findConstitutionModifier()}
          wisdomModifier = {findWisdomModifier()}
          charismaModifier = {findCharismaModifier()}
        />
      </section>
    </div>
  );
}

export default App;
