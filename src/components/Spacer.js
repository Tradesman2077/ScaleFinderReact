function Spacer(){
    return(
      <div style={{visibility: "hidden"}}>
        <p> </p>
        <label className="switch">
        <input type="checkbox" ></input>
        <span className="slider round"></span>
        </label>
      </div>
    );
}
export default Spacer;