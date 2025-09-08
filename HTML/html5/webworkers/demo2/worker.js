

self.onmessage = function (e) {
    console.log(e);

    for (let i = 0; i <= 4000000000; i++) {
        if (i === 4000000000) {
            self.postMessage(i)
        }
    }

}

