



formtest.addEventListener('submit', async function (e) {
    e.preventDefault();
    let data = {
        text: this.term.value,
        timestamp: Date.now()
    };
    console.log(data);
    let res = await fetch('/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    let answer = await res.text();
    console.log(answer);
    console.timeEnd('fetch')
});




