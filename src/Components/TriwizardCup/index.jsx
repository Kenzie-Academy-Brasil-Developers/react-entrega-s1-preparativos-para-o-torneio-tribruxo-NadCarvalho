import Student from '../Student'
import './style.css'
import { useEffect, useState } from 'react'


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const TriwizardCup = ({ wizards }) => {
  const [chosen, setChosen] = useState([])
  const getChampions = () => {
    const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
    const excludeHouse = getRandomInt(houses.length - 1)
    const chosenHouses = houses.filter((house) => houses[excludeHouse] !== house)
    chosenHouses.sort(() => (Math.random() > .4) ? 1 : -1)
    const chosenStudentsByHouse = chosenHouses.map((house) => wizards.filter((student) => student.house === house))
    const finalists = chosenStudentsByHouse.map((students) => {
      const getRandomFinalist = getRandomInt(students.length - 1)
      return students[getRandomFinalist]
    })
    setChosen(finalists)
  }
  useEffect(() => {
    getChampions()
  }, [])

  return (
    <div className="TriwizardCup">
      <ul className="wizards">
        {
          chosen.map(
            (wizard, index) => {
              return (
                <li key={index}>
                  <Student info={wizard} />
                </li>
              )
            })
        }
      </ul>
      <button onClick={() => getChampions() }>Tentar novamente</button>
    </div>
  )
}

export default TriwizardCup
