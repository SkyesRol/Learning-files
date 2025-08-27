import React from "react"

interface Props {
    userName: string;
    // typescript中除了内置的类型外，也可以有一些自定义类型 class interface
    // React 提供的类型 事件类型 ChangeEvent
    // type = 'radio' type='checkbox'
    // HTMLInputElement event.target.value?
    // ts对重要的地方进行约束 该约束的地方进行约束，减少出错
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const NameEditComponent: React.FC<Props> = (props) => {
    return (
        <>
            <label >Update name:</label>
            <input type="text" value={props.userName} onChange={props.onChange} />
        </>
    )
}
export default NameEditComponent