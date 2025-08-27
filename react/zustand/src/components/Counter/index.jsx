import { useCounterStore } from '../../store/count'

const Counter = () => {
    // const state = useCounterStore((state)=>state);
    // const {count,increment,decrement} = state;
    // 解构，但是这样会读取state的每个属性，导致组件重新渲染
    // 建议利用下面的方法精准取值
    const count = useCounterStore((state) => state.count);
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);
    return (
        <>
            Counter: {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}
export default Counter