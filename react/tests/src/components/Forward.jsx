import React, { useEffect } from "react";
import { forwardRef } from 'react';

const LogButton = function LogButton(props) {
    const { ref1, ref2 } = props;

    return (
        <>
            <button ref={ref1} className="Button">
                Click,Children
            </button>
            <input id='001' ref={ref2} placeholder="输入内容" />

        </>
    );
}


const ForwardRef = () => {
    const buttonRef = React.useRef(null);
    const inputRef = React.useRef(null);

    useEffect(() => {
        console.log(buttonRef.current);
        console.log(inputRef.current);


    }, [])
    const handleClick = () => {
        buttonRef.current.focus();
    }
    const handleInputClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <LogButton ref1={buttonRef} ref2={inputRef} />
            <button onClick={handleClick}>Focus the button</button>
            <button onClick={handleInputClick}>Focus the input</button>

        </div>
    );
}

export default ForwardRef;