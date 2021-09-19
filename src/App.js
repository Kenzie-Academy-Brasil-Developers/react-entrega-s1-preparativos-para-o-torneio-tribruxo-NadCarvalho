import './App.css';
import { useState, useEffect } from 'react';
import TriwizardCup from './Components/TriwizardCup';
import WelcomePage from './Components/WelcomePage';

function App() {
  const [showCup, setShowCup] = useState(false);
  const [wizards, setWizards] = useState([])

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
    .then(response => response.json())
    .then(results => setWizards(results))
  }, [setShowCup])

  return (
    <div className="App">
      { showCup && <TriwizardCup wizards={wizards} /> }
      { !showCup && <WelcomePage onBegin={() => setShowCup(true) }/> }
    </div>
  );
}

export default App;
