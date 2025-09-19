// 一堆任务
// 顺序 results []
// deps ?




const tasks = [
    {
        id: 'A',
        run: () => new Promise(
            res => setTimeout(
                () => res('A done'), 5000
            )),
        deps: []
    },
    {
        id: 'B',
        run: () => Promise.resolve('B done'),
        deps: ['A']
    },
    {
        id: 'C',
        run: () => Promise.resolve('C done'),
        deps: ['A']
    },
    {
        id: 'D',
        run: () => Promise.resolve('D done'),
        deps: ['B', 'C']
    }
]

async function runTasks(tasks) {
    // 便于查找task id 找到 task deps，HashMap
    const taskMap = new Map(tasks.map(task => [task.id, task]));
    //console.log(taskMap);
    const inDegree = new Map(tasks.map(t => [t.id, t.deps.length]));
    const res = {};
    let ready = tasks.filter(t => t.deps.length === 0).map(t => t.id)
    //console.log(ready);

    // 某个id任务 的执行和执行完后 依赖它的任务的deps.length - 1
    async function run(id) {
        const task = taskMap.get(id)
        const output = await task.run();
        res[id] = output;
        for (const [tid, t] of taskMap) {
            if (t.deps.includes(id)) {
                inDegree.set(tid, inDegree.get(tid) - 1);


                if (inDegree[tid] === 0) {
                    ready.push(tid)
                }
            }
        }
    };

    while (ready.length > 0) {
        // 取出当前可以执行的任务
        const currentBatch = [...ready]; // ready 动态 引用式拷贝 如果直接 =  Ready，那么修改currentBatch就修改了ready
        ready = [];
        await Promise.all(currentBatch.map(run))
    }



    return res;
}
runTasks(tasks).then(res => console.log(res));
