import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

import './Dropdown.css';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useLayoutEffect(() => {
        if (isOpen && dropdownRef.current) {
            // 调整下拉菜单的位置
            const buttonRect = document.querySelector('button').getBoundingClientRect();
            const dropdownRect = dropdownRef.current.getBoundingClientRect();
            const top = buttonRect.bottom - dropdownRect.height;
            dropdownRef.current.style.top = `${top}px`;
        }
    }, [isOpen]);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
            {isOpen && (
                <div ref={dropdownRef} className="dropdown-content">
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                    <p>Item 4</p>
                    <p>Item 5</p>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
