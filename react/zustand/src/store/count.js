import { create } from 'zustand'

// 封装了一个hook函数
export const useCounterStore = create((set) => ({
    // 对象
    // 状态
    // 修改状态的方法
    count: 0,
    // reducer 函数，规定状态怎么变
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 }))
}))
