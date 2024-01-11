const PersonForm = (props) => {
  return (
    <>
      <form onSubmit={props.addPerson}>
        <div>
          Name:{' '}
          <input value={props.newName} onChange={props.handleNameChange} />
        </div>
        <div>
          Number:{' '}
          <input value={props.newNum} onChange={props.handleNumChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </>
  )
}
export default PersonForm
