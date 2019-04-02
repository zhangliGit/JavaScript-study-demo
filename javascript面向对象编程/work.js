let i = 0;

function total() {
    i++;
    postMessage(i)
}
setInterval(() => {
    total()
}, 1000)