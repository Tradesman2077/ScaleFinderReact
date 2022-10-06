import './App.css';
import NoteRow from './components/NoteRow';
import NoteRowFlats from './components/NoteRowFlats';
import React, {useState} from 'react';
import scales from './scales.json'
import Scale from './components/Scale.js';
import RenderedScale from './components/RenderedScale';

function App () {
  const scaleObj = scales;
  const [mainArr, changeArray] = useState([]);
  const [returnedScales, updateReturnedScales] = useState([]);
  const [clickedScale, clickedScaleChanged] = useState([]);

  const scaleClickedHandler = (scale) => {
    clickedScaleChanged(scale);
  }

  const renderedScales = returnedScales.map(scale => (<Scale onScaleClicked={scaleClickedHandler} scale = {scale}/>));

  const noteChangeHandler = (note) => {
    if(!mainArr.includes(note)){
      changeArray(prevArr => {
        updateReturnedScales(checkScales([...prevArr, note], scaleObj));
        return [...prevArr, note];
      });
    }
    else{
      const index = mainArr.indexOf(note);
      mainArr.splice(index, 1);
      changeArray(prevArr => {
        updateReturnedScales(checkScales([...prevArr, note], scaleObj));
        return [...prevArr];
      });
    }
  }
  return (
    <div className="App">
      <h1>scaleFinder</h1>
      <p>Selected notes : {mainArr}</p>
      <NoteRowFlats onNoteChange = {noteChangeHandler} />
      <NoteRow onNoteChange = {noteChangeHandler} />
      <p></p>
      <RenderedScale scale = {clickedScale}/> 
      <div>{renderedScales}</div>
    </div>
  );
}
const checkScales = (arrayToCheck, scaleObj) => {
  ///check if notes are in scale and return a list of scales
  let listOfReturnedScales = [];
  let checker = (arr, target) => target.every(v => arr.includes(v));

  for(var key in scaleObj){
    const notes = scaleObj[key].split(',');
    if(checker(notes, arrayToCheck)){
      listOfReturnedScales.push(key + ':' + scaleObj[key]);
    }
  }
  return listOfReturnedScales;
}
export default App;