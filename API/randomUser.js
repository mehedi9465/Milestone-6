const getUsers = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(users => displayUsers(users));
}

const displayUsers = users =>{
    const realUsers = users.results;
    console.log(realUsers);
    const userDiv = document.getElementById('users');
    realUsers.forEach(user => {
        const img = document.createElement('img');
        img.setAttribute('src', user.picture.large);
        img.style.width = '150px';
        userDiv.appendChild(img);
    });
}

getUsers();