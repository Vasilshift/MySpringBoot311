const modalEditUser = GM.modal({
    title: 'Edit user',
    closable: true,
    width: '400px'
})

const modalDeleteUser = GM.modal({
    title: 'Delete user',
    closable: true,
})

const sendData = (url, data, method) => {
    const response = fetch(url, {
        method : method,
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: data,
    })
        .then(data => {
            if (!data.ok){
                throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
            }
            return data.json();
        })
}

function getRol(rol){
    if (rol.length === 2) {
        const roles = [{
            id: 2, name: "ROLE_USER",
        },
            { id: 1, name: "ROLE_ADMIN"
            }]
        return roles;
    }
    if (rol.indexOf("USER")){
        const roles = [{
            id: 2, name: "ROLE_USER"
        }]
        return roles;
    }
    if (rol.indexOf("ADMIN")){
        const roles = [{
            id: 1, name: "ROLE_ADMIN"
        }]
        return roles;
    }
}

function deleteUserTest( url, data, method) {
    return fetch(url, {
        method : method,
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: data,
    })
        .then(data =>  data.json())
}

