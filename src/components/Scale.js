import './Scale.css'

const Scale = (props) => {

    const scaleClickHandler = () =>{
        console.log(props.scale + "clicked");
    }

    return (
        <div>
            <div onClick={scaleClickHandler} className={"scaleText"} >{props.scale}</div>
        </div>
        );
}
export default Scale;