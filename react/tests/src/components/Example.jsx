import React, { useEffect } from 'react';

function EventDelegationExample() {
    const handleButtonClick = (event) => {
        console.log('Button clicked');
        console.log('Event target:', event.target); // 按钮元素
        console.log('Current target:', event.currentTarget); // 按钮元素
        console.log('Native event target:', event.nativeEvent.target); // 按钮元素
        console.log('Document event listeners:', document.documentElement.outerHTML);
    };

    useEffect(() => {
        console.log('Event listeners on document:', document.documentElement.outerHTML);
    }, []);

    return (
        <div style={{ padding: '20px', border: '1px solid black' }}>
            <button onClick={handleButtonClick}>Click me</button>
        </div>
    );
}

export default EventDelegationExample;
