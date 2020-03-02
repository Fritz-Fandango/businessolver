import React, {useState} from 'react';
import './App.scss';

/**
 *
 * Use of concat for arrays in React
 * source: https://medium.com/javascript-in-plain-english/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
 *
 */

function App() {
  const [countLog, setCountLog] = useState(0);

  const [inputList, setInputList] = useState([]);

  const BusinessSolverButton = (props) => {
    const { buttonNumber } = props;

    const [clickCount, setClickCount] = useState(0);

    return (
      <div>
        <button
          className="busSolverButton"
          onClick={() => setClickCount(clickCount + 1)}
          type="button"
        >
          {`Button: ${buttonNumber} Clicks: ${clickCount}`}
        </button>
      </div>
    );
  };

  const addAnotherButton = () => {
    setCountLog(countLog + 1);

    setInputList(inputList.concat(
      <BusinessSolverButton
        buttonNumber={countLog}
        numClicks={0}
      />
    ));
  };

  const handleDeleteButton = (idx) => {
    const updatedList = inputList.filter((elem, index) => idx !== index);

    setInputList(updatedList);
  }

  return (
    <div>
      <button
        onClick={addAnotherButton}
      >
        Add a button
      </button>
      <div
        className="container"
      >
        {inputList.map((buttonElement, idx) => (
          <div
            key={idx}
            className="locaseWrapper"
          >
            {buttonElement}
            <button
              className="busSolverButton deleteButton"
              onClick={() => handleDeleteButton(idx)}
              type="button"
            >
              {`DELETE BUTTON ${buttonElement.props.buttonNumber}`}
            </button>
          </div>
        )
        )}
      </div>
    </div>
  );
}

export default App;
