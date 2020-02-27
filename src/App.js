import React, {useState} from 'react';
import './App.css';

const BusinessSolverButton = (props) => {
  const { length } = props;

  return (
    <button
      className="busSolverButton"
      type="button"
    >
      Button # {length + 1}
    </button>
  );
};

const BusinessSolverForm = () => {
  const [inputList, setInputList] = useState([]);

  const addAnotherButton = (event) => {
    setInputList(inputList.concat(<BusinessSolverButton key={inputList.length} length={inputList.length} />));
  };

  return (
    <div>
      <button onClick={addAnotherButton}>Add a button</button>
      <div>
        {inputList}
      </div>
    </div>
  );
};

function App() {
  return (
    <BusinessSolverForm />
  )
}

export default App;
