import React from 'react'
import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import People from './components/People'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data)
      console.log('promise resolved')
    })
  }, [])

  console.log('render', persons.length, 'persons')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const present = persons.some((person) => person.name === newName)

    if (present) alert(`${newName} already exists`)
    else {
      const newGuy = {
        name: newName,
        number: newNum,
      }
      setPersons([...persons, newGuy])
      setNewName('')
      setNewNum('')
    }
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter val={searchTerm} ch={handleSearch} />

      <h3>Add a new entry:</h3>

      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumChange={handleNumChange}
        newName={newName}
        newNum={newNum}
      />

      <h3>Numbers</h3>

      <People filteredPersons={filteredPersons} />
    </div>
  )
}

export default App
