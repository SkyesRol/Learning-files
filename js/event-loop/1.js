async function test() {
    console.log("start");
    await Promise.resolve();
    console.log("end");
}

test();

process.nextTick(() => {
    console.log("nextTick");
});

Promise.resolve().then(() => {
    console.log("promise");
});
