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

const sendData = (url, data, method) => {
    const response = fetch(url, {
        method : method,
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: data,
    }).then(getTable)

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
                             <td>${u.nameRole}</td>
                             <td>
                                <button type="button" class="btn btn-primary editBtn" id="${u.id}">Edit</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger deleteBtn" name="${u.id}" >Delete</button>
                            </td>
                            </tr>`
                })
                document.querySelector(".table-panel-tbody").innerHTML = test
            }
        )
}




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

function createTableUsers(){
    return (
        fetch(requrl).then(
            res => {
                res.json().then(
                    data => {
                        console.log('Display all users from database', data);
                        let temp = "";
                        data.forEach((u) => {
                            temp += '<tr>'
                            temp += '<td>' + u.id + '</td>'
                            temp += '<td>' + u.username + '</td>'
                            temp += "<td>" + u.age + "</td>"
                            temp += "<td>" + u.email + "</td>"
                            temp += "<td>" + rol(u) + "</td>"
                            temp += `<td><a href="#" class="btn btn-primary" data-btn="editUser" data-id='${u.id}'>Edit</a></td>`
                            temp += `<td><a href="#" class="btn btn-danger" data-btn="deleteUser" data-id='${u.id}'>Delete</a></td>`
                            temp += "</tr>"
                        })
                        document.querySelector(".table-users-object").innerHTML = temp;
                    })
            })
    )
}

createTableUsers()







// function createTableRow(u) {                                                    //table creating
//     let userRole = "[";
//     for (let i = 0; i < u.roles.length; i++) {
//         userRole += u.roles[i].name.substring(5);
//         if (i != (u.roles.length - 1)) {
//             userRole += ", ";
//         }
//     }
//     userRole += "]";
//     return `<tr id="user_table_row">
//         <td>${u.id}</td>
//         <td>${u.name}</td>
//         <td>${u.lastname}</td>
//         <td>${u.age}</td>
//         <td>${u.work}</td>
//         <td>${u.username}</td>
//         <td>${userRole}</td>
//         <td>
//         <a href="/api/users/${u.id}" class="btn btn-info openEdit" >Edit</a>
//         </td>
//         <td>
//         <a href="/api/users/${u.id}" class="btn btn-danger openDelete">Delete</a>
//         </td>
// </tr>`;
// }
//
// function restartAllUser() {                                                     //table refreshing
//     let UserTableBody = $("#table-users-object-byid")
//     UserTableBody.children().remove();
//
//     fetch("http://localhost:8080/api/users", {method: 'GET'})
//         .then((response) => {
//             response.json().then(data => data.forEach(function () {
//                 let TableRow = getUsers()
//                 UserTableBody.append(TableRow)
//             }));
//         }).catch(error => {
//         console.log(error);
//     });
// }