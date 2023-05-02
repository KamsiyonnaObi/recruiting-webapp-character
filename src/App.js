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
      value: 10
    }))
  );

  const handleAttributeChange = (index, newValue) => {
    const updatedAttributes = [...attributes]
    updatedAttributes[index].value = newValue
    setAttributes(updatedAttributes)
  }
//     useEffect(() => {   
//  } , [attributes])
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
            </p>
          </div>
          ))}
        </div>
        <Classes />
        <ClassRequirement />
        <Skills />
      </section>
    </div>
  );
}

export default App;
