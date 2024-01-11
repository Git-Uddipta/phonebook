const People = (props) => {
  return (
    <ul>
      {props.filteredPersons.map((person, index) => (
        <li key={index}>
          {person.name}-{person.number}{' '}
        </li>
      ))}
    </ul>
  )
}
export default People
