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

function rolesForm(r) {
    let roles = [];
    $(r).find("option:selected").each(function () {
        roles.push({id: $(this).val(), name: $(this).attr("name") })
    })
    return roles;
}

// function deleteUserTest( url, data, method) {
//     return fetch(url, {
//         method : method,
//         headers: {
//             "Content-Type": "application/json;charset=utf-8"
//         },
//         body: data,
//     })
//         .then(data =>  data.json())
// }

// const getTable = () => {
//     fetch("http://localhost:8080/api/users")
//         .then(res => res.json())
//         .then(user => {
//                 let test = "";
//                 user.forEach((u) => {
//                     test += `<tr>
//                              <td>${u.id}</td>
//                              <td>${u.name}</td>
//                              <td>${u.age}</td>
//                              <td>${u.email}</td>
//                              <td>${rol(u)}</td>
//                             <td><a href="#" class="btn btn-primary" data-btn="editUser" data-id='${u.id}'>Edit</a></td>
//                             <td><a href="#" class="btn btn-danger" data-btn="deleteUser" data-id='${u.id}'>Delete</a></td>
//                             </tr>`
//                 })
//                 document.querySelector(".table-users-object").innerHTML = test
//             }
//         )
// }


