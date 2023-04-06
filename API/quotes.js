fetch('https://api.kanye.rest/')
.then(res => res.json())
.then(data => loadData(data));

function loadData(data){
    const UL = document.getElementById('quotesArea');
    const Li = document.createElement('li');
    Li.innerText = data.quote;
    UL.appendChild(Li);
}