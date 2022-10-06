import './Scale.css';
import RenderedScale from './RenderedScale';
import { useState } from 'react';

const Scale = (props) => {

    const scaleChangeHandler = () =>{
        props.onScaleClicked(props.scale);
    }
    return(
        <div onClick={scaleChangeHandler} className={"scaleText"}>{props.scale}</div>
    );
}

export default Scale;