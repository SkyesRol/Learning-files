import React from 'react'
// 如何约束函数的返回值为ReactNode？ JSX
// 如何约定字节需要一个name 的 prop
interface Props {
    name: string
}
// typescript 类型约束， 重要的地方一定要类型约束
// 参数，返回值比较重要，要约束
// 泛型 泛指内部的类型
// React.FC 约定了返回值要是一个组件
const HelloComponent: React.FC<Props> = (props) => {  // FC  Function Component
    // return undefined 
    return (
        <h1>
            Hello User:{props.name}
        </h1>
    )
}

export default HelloComponent;