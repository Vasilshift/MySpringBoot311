
const modalEditUser = GM.modal({
    title: 'Edit user',
    closable: true,
    content: `     
  
    `,
    width: '400px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler() {
                console.log('Primary btn clicked')
                modalEditUser.close()
            }},
        {text: 'Edit', type: 'danger', handler() {
                console.log('EDIT user btn clicked')
                modalEditUser.saveUser()
            }}
    ]
})

const modalDeleteUser = GM.modal({
    title: 'Delete user',
    closable: true,
    content: `     
  
    `,
    width: '400px',
    // footerButtons: [
    //     {text: 'Close', type: 'primary', handler() {
    //             console.log('Primary btn clicked')
    //             modalDeleteUser.close()
    //         }},
    //     {text: 'Delete', type: 'danger', handler() {
    //             console.log('DELETE user btn clicked')
    //             modalDeleteUser.deleteUserTest().then(r => console.log("method worked"))
    //         }}
    // ]
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

// $(document).ready(function (e){  //update user
//     $(".delut").click(function (){
//         let roles = $("#roles").val();
//         const data = {
//             "id": $("#id").val(),
//             "name": $("#name").val(),
//             "age": $("#age").val(),
//             "email": $("#email").val(),
//             "password": $("#password").val(),
//             "roles": getRol(roles)
//         }
//         sendData("http://localhost:8080/api/users", JSON.stringify(data), "PUT");
//         $(".update").hide();
//         //getTable();
//     })
// })

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