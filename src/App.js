import React, { useState } from 'react'
import './App.scss';

/**
 *
 * Use of concat for arrays in React
 * source: https://medium.com/javascript-in-plain-english/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
 *
 */

const App = () => {
  // Setting states
  const [currentCount, setCurrentCount] = useState(0);

	const [ buttons, setButtons ] = useState([])

	// Create and delete operations
	const addButton = () => {
    setCurrentCount(currentCount + 1);

    const button = {
      id: currentCount,
      number: currentCount,
      numClicks: 0
    }

		setButtons([...buttons, button]);
	}

  const updateClickCount = (id) => {
    buttons.filter((button) => ((button.id === id) ? button.numClicks++ : button.numClicks))

    setButtons([...buttons])
  }

  const deleteButton = (id) => {
		setButtons(buttons.filter(button => button.id !== id))
	}

	return (
    <div>
      <button onClick={addButton}>Add a button</button>
      <div className="container">
        {buttons.length < 1 ? (
          <div>
            <p>No buttons added</p>
          </div>
          ) : (
          buttons.map(button => (
            <div key={button.id}>
              <div>
              <button
                className="busSolverButton"
                onClick={() => updateClickCount(button.id)}
                type="button"
              >
                {`Button: ${button.number} Clicks: ${button.numClicks}`}
              </button>
            </div>
            <button
              className="busSolverButton deleteButton"
              onClick={() => deleteButton(button.id)}
              type="button"
            >
              {`DELETE BUTTON ${button.number}`}
            </button>
          </div>
        ))
      )}
		</div>
  </div>
)}

export default App
