function NoteButtonFlat(props){

  const toggleHandler = () => {
    props.onNoteChange(props.note);
  }

    return(
      <div>
        <p>{props.note}</p>
        <label className="switch">
        <input type="checkbox" onChange = {toggleHandler}></input>
        <span className="slider round"></span>
        </label>
      </div>
    );
}
export default NoteButtonFlat;