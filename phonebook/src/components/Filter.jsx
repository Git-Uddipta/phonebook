const Filter = (props) => {
    return (
      <>
        Filter By Name:
        <input value={props.val} onChange={props.ch} />
      </>
    )
}
  export default Filter