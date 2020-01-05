setTimeout(() => {
    console.log(self)
    fetch('http://localhost:3004/get').then(res => {
        return res.json()
    }).then(data => {
        console.log(data)
    })
}, 2000);