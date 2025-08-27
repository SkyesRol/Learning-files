export default [
    // /api/todos
    {
        url: '/api/todos',
        method: 'get',
        response: () => {
            const todos = [
                {
                    id: 1,
                    title: 'todo1',
                    completed: false
                },
                {
                    id: 2,
                    title: 'todo2',
                    completed: true
                }
            ]
            return {
                code: 0,
                msg: 'success',
                data: todos,
            }
        }
    },
    // /api/repos
    {
        url: '/api/repos',
        method: 'get',
        response: () => {
            const repos = [
                {
                    id: 1,
                    name: 'betterNCM',
                    description: 'repo1 description',
                },
                {
                    id: 2,
                    name: 'ChatAnyWhere',
                    description: 'repo2 description',
                }
            ]
            return repos;
        }
    }
]