import Spacer from "./Spacer";
import NoteButtonFlat from "./NoteButtonFlat";

function NoteRowFlats(props){

  const noteChangeHandler = (arrFromNote) => {
    props.onNoteChange(arrFromNote);
  }
    return(
      <div className="flex-container" >
        <NoteButtonFlat note={"C#"} onNoteChange = {noteChangeHandler}/>
        <NoteButtonFlat note={"D#"} onNoteChange = {noteChangeHandler}/>
        <Spacer />
        <NoteButtonFlat note={"F#"} onNoteChange = {noteChangeHandler}/>
        <NoteButtonFlat note={"G#"} onNoteChange = {noteChangeHandler}/>
        <NoteButtonFlat note={"A#"} onNoteChange = {noteChangeHandler}/>
      </div>
    );
}
export default NoteRowFlats;
