fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(obj => {
            ({ id, name, username, email } = obj);
            const div = document.querySelector(`#id${id}`);
            div.innerHTML = `
                <img src='https://robohash.org/${id}' height='250px' width='250px'>
                <p>${name}</p>
                <p>${username}</p>
                <p>${email}</p>`
        })
    })