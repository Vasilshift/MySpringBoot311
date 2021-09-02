const modalEditUser = GM.modal({
    title: 'Edit user',
    closable: true,
    content: '',
    width: '500px'
})

const modalDeleteUser = GM.modal({
    title: 'Delete user',
    closable: true,
    content: '',
    width: '500px'
})

// const sendData = (url, data, method) => {
//     const response = fetch(url, {
//         method : method,
//         headers: {
//             "Content-Type": "application/json;charset=utf-8"
//         },
//         body: data,
//     })
//         .then(data => {
//             if (!data.ok){
//                 throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
//             }
//             return data.json();
//         })
// }

function rolesForm(r) {                                                     //get roles from form
    let roles = [];
    $(r).find("option:selected").each(function () {
        roles.push({id: $(this).val(), name: $(this).attr("name") })
    });
    return roles;
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

const getTable = () => {
    fetch("http://localhost:8080/api/users")
        .then(res => res.json())
        .then(user => {
                let test = "";
                user.forEach((u) => {
                    test += `<tr>
                             <td>${u.id}</td>
                             <td>${u.name}</td>
                             <td>${u.age}</td>
                             <td>${u.email}</td>
                             <td>${rol(u)}</td>
                            <td><a href="#" class="btn btn-primary" data-btn="editUser" data-id='${u.id}'>Edit</a></td>
                            <td><a href="#" class="btn btn-danger" data-btn="deleteUser" data-id='${u.id}'>Delete</a></td>
                            </tr>`
                })
                document.querySelector(".table-users-object").innerHTML = test
            }
        )
}







// Example POST method implementation:
// async function getAllData(url = 'http://localhost:8080/api/users', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }










// function restartAllUser() {                                                     //table refreshing
//     let UserTableBody = $(".table-users")
//     UserTableBody.children().remove();
//
//     fetch("http://localhost:8080/api/users/")
//         .then((response) => {
//             response.json().then(data => data.forEach(function (item, i, data) {
//                 let TableRow = createTableRow(item);
//                 UserTableBody.append(TableRow);
//             }));
//         }).catch(error => {
//         console.log(error);
//     });
// }