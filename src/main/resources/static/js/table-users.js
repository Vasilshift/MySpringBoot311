
const a = document.querySelector('.table-users-object')
const requrl = 'http://localhost:8080/api/users'

function rol(u) {
    let userRole = "[";
    for (let i = 0; i < u.roles.length; i++) {
        userRole += u.roles[i].name.substring(5);
        if (i != (u.roles.length - 1)) {
        userRole += ", ";
        }
    }
    userRole += "]";
    return userRole;
}

let allUsers;
fetch('http://localhost:8080/api/users')
    .then(res => res.json())
    .then(data => allUsers = data)
    .then(() => console.log(allUsers))

function render() {
    const toHTML = u => `<div><tr>
                      <td>${u.id}</td>
                      <td>${u.username}</td>
                      <td>${u.age}</td>
                      <td>${u.email}</td>
                      <td>${rol(u)}</td>
                      <td><a href="#" class="btn btn-primary" data-btn="editUser" data-id=${u.id}>Edit</a></td>
                      <td><a href="#" class="btn btn-danger" data-btn="deleteUser" data-id=${u.id}>Delete</a></td>
                      </tr>
                     </div> 
                     `
    const htmlRendered = allUsers.map(toHTML).join('')
    a.innerHTML = htmlRendered
}

function getUsers() {
    fetch('http://localhost:8080/api/users')
        .then(res => res.json())
        .then(result  => {
            if (result.length > 0 ) {
                let body = ""
                result.forEach(u => {
                    body += "<tr>"
                    body += '<td>' + u.id + '</td>'
                    body += '<td>' + u.username + '</td>'
                    body += "<td>" + u.age + "</td>"
                    body += "<td>" + u.email + "</td>"
                    body += "<td>" + rol(u) + "</td>"
                    body += `<td><a href="#" class="btn btn-primary" data-btn="editUser" data-id='${u.id}'>Edit</a></td>`
                    body += `<td><a href="#" class="btn btn-danger" data-btn="deleteUser" data-id='${u.id}'>Delete</a></td>`

                })
                document.querySelector(".table-users-object").innerHTML = body
            }
        })
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
                        a.innerHTML = temp;
                    })
            })
    )
}

createTableUsers()

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    if (btnType === 'editUser') {
        const oneUserfromDB = allUsers.find(f => f.id === id)
        modalEditUser.setContent(`
           <div class="update-body">
                <div class="update-content">
                    <div class="form-group">
                        <label for="id">ID</label>
                        <input class="form-control" readonly type="number" name="id" id="idEdit" value="${oneUserfromDB.id}"/>
    
                        <label for="username">Enter username: </label>
                        <input class="form-control" type="text" name="username" id="usernameEdit" value=""/>
    
                        <label for="age">Enter age: </label>
                        <input class="form-control" type="text" name="age" id="ageEdit" value=""/>
    
                        <label for="email">Enter email: </label>
                        <input class="form-control" type="text" name="email" id="emailEdit" value=""/>
                        
                        <label for="password">Enter password: </label>
                        <input class="form-control update-password" type="password" name="passwordEdit" id="password">
    
                        <label for="roles">Enter role: </label>
                        <select class="form-control" multiple="multiple" size="2" name="roles" id="rolesEdit">
                            <option>USER</option>
                            <option>ADMIN</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
                        <button class="btn btn-secondary me-md-2 update-close close-btn" type="button">Close</button>
                        <button class="btn btn-primary update-edit" type="submit">Edit</button>
                    </div>
                </div>
                </div>
            </div>
       `)
        modalEditUser.open()
        console.log('One user from DB: ', oneUserfromDB)
        $(document).on("click", ".update-edit", function (){
            //let roles = $("#rolesEdit").val();
            const data = {
                id: $("#idEdit").val(),
                username: $("#usernameEdit").val(),
                age: $("#ageEdit").val(),
                email: $("#emailEdit").val(),
                password: $("#passwordEdit").val(),
                roles: getRol("#rolesEdit")
            }
            console.log('data = ', data)
            sendData("http://localhost:8080/api/users", JSON.stringify(data), "POST")
            //$(".").hide()
            //$('.table-users').children().remove()
            modalEditUser.render()
            modalEditUser.close()
        })
        $('.update-close').click(function () {
            modalEditUser.close()
        })
        $('.close-btn').click(function () {
            modalEditUser.close()
        })
    }
    if (btnType === 'deleteUser') {
        const oneUserfromDB = allUsers.find(f => f.id === id)
        modalDeleteUser.setContent(`
            <div class="update_body">
                <div class="update-content">
                    <div class="form-group">
                        <label for="id">ID</label>
                        <input readonly type="number" th:field="*{id}" id="id" placeholder="${id}">
                        <label for="firstName">Username</label>
                        <input type="text" th:field="*{username}" id="firstName" placeholder="${oneUserfromDB.username}">
                        <label for="age">Age</label>
                        <input type="number" th:field="*{age}" id="age" placeholder="${oneUserfromDB.age}">
                        <label for="email">Email</label>
                        <input type="text" th:field="*{email}" id="email" placeholder="${oneUserfromDB.email}">
                        <label for="selectRoleEd"><b>Role</b></label>
                             <select multiple size="2" class="form-control" id="selectRoleEd" name="role">
                                <option value="1" name="ROLE_ADMIN">ADMIN</option>
                                <option value="2" name="ROLE_USER">USER</option>
                             </select>                       
                    </div>
                </div>   
                <div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">       
                        <button href="#" class="btn btn-secondary me-md-2 close-btn" data-btn="closeUserFromModal">Close</button>
                        <button href="#" class="btn btn-danger delut delut1" data-btn="deleteUserFromModal" id="deluser">Delete</button>
                    </div>    
                </div>           
            </div>
       `)
        modalDeleteUser.open()
        console.log('One user from DB: ', oneUserfromDB)

        let idUserToDelete = oneUserfromDB.id
        console.log('idUserToDelete= ', idUserToDelete)
        let urlForDeleteUser = "http://localhost:8080/api/users/" + idUserToDelete

        $("#deluser").click(function () {
            fetch (urlForDeleteUser, {
                method: "DELETE",
                headers: {"Content-Type": "application/json; charset=UTF-8"}})
                console.log('table users would be renew')
            fetch ('http://localhost:8080/api/users', {
                method: "GET",
                headers: {"Content-Type": "application/json; charset=UTF-8"}})
            modalDeleteUser.close()
            })
        $(".delut1").click(function () {
            createTableUsers()
        })
        $('.close-btn').click(function () {
            modalDeleteUser.close()
        })

    }   //  end   if (btnType === 'deleteUser')

    // if (btnType === 'addUserButton') {
    //     modalEditUser.setContent(`
    //        <div class="update-body">
    //             <div class="row update-head">
    //                 <div class="col update-head-left">
    //                     <h3>Edit user</h3>
    //                 </div>
    //                 <div class="col update-head-right" style="text-align: right">
    //                     <button type="button" class="btn-close update-close" aria-label="Close"></button>
    //                 </div>
    //             </div>
    //             <div class="update-content">
    //                 <div class="form-group">
    //
    //                     <label for="usernameNew">Enter username: </label>
    //                     <input class="form-control" type="text" name="username" id="usernameNew" value=""/>
    //
    //                     <label for="ageNew">Enter age: </label>
    //                     <input class="form-control" type="text" name="age" id="ageNew" value=""/>
    //
    //                     <label for="emailNew">Enter email: </label>
    //                     <input class="form-control" type="text" name="email" id="emailNew" value=""/>
    //
    //                     <label for="passwordNew">Enter password: </label>
    //                     <input class="form-control update-password" type="password" name="passwordNew" id="password">
    //
    //                     <label for="roles">Enter role: </label>
    //                     <select class="form-control" size="2" name="roles" id="rolesNew">
    //                         <option>USER</option>
    //                         <option>ADMIN</option>
    //                     </select>
    //                 </div>
    //             </div>
    //
    //             <div class="update-down">
    //                 <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    //                     <button class="btn btn-secondary me-md-2 update-close close-btn" type="button">Close</button>
    //                     <button class="btn btn-primary update-edit" type="submit">Edit</button>
    //                 </div>
    //             </div>
    //             </div>
    //         </div>
    //    `)
    //     modalEditUser.open()
    // }

})


