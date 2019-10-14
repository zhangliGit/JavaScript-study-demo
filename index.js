const express = require('express');
const app = express();
app.use(express.static(__dirname + '/'));

app.listen(3002, () => {
    console.log('端口号3002已启动')
})