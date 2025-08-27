import { create } from "zustand";


export const useTodosStore = create((set) => ({
    todos: [{
        id: 1,
        text: '打瓦',
        completed: false,
    }],
    addTodo: (text) => set((state) => ({
        todos: [
            ...state.todos,
            {
                id: state.todos.length + 1,
                text,
                completed: false,
            }

        ]
    })),
    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            }
            return todo;
        })
    })),
    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
    })),


}))

