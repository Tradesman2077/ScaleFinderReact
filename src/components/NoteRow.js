import NoteButton from "./NoteButton";
function NoteRow(props){

  const noteChangeHandler = (arrFromNote) => {
    props.onNoteChange(arrFromNote);
  }
    return(
      <div className="flex-container">
        <NoteButton note={"C"} onNoteChange = {noteChangeHandler}/>
        <NoteButton note={"D"} onNoteChange = {noteChangeHandler}/>
        <NoteButton note={"E"} onNoteChange = {noteChangeHandler}/>
        <NoteButton note={"F"} onNoteChange = {noteChangeHandler}/>
        <NoteButton note={"G"} onNoteChange = {noteChangeHandler}/>
        <NoteButton note={"A"} onNoteChange = {noteChangeHandler}/>
        <NoteButton note={"B"} onNoteChange = {noteChangeHandler}/>
      </div>
    );
}
export default NoteRow;