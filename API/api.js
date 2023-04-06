fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => process(data));
function elecmentCreate(){
    const li = document.createElement('li');
    return li;
}

function process(data){
    const UL = document.getElementById('items');
    for(const item of data){
        const li = elecmentCreate();
        li.innerText = item.name;
        UL.appendChild(li);
    }
}