import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>Click from Child</button>;
});

function Parent() {
    const [count, setCount] = useState(0);
    const handleClick =
        useCallback(() => {
            console.log("Button clicked");
        }, []); // 无依赖，函数始终不变

    return (
        <>
            <Child onClick={handleClick} />
            <button onClick={() => setCount(count + 1)}>Parent: {count}</button>
        </>
    );
}

export default Parent;
