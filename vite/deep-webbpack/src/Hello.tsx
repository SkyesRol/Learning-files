import React from 'react'
import avatar from './images/avatar.webp'
import book from './images/book.webp'
import {
    add
} from './math.js'
const Hello = () => {

    return (
        <div>
            <h1>来了 老弟！</h1>
            <img src={avatar} alt="" />
            <img src={book} alt="" />
            {add(1, 2)}   {/* tree shaking */}
        </div>
    )
}

export default Hello