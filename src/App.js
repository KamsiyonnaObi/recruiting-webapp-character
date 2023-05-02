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



  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
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
        <Skills />
      </section>
    </div>
  );
}

export default App;
