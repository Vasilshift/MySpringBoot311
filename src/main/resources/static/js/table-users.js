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

function getUsers() {
    fetch('http://localhost:8080/api/users')
        .then(result => result.json())
        .then(user => {
                let body = ""
                user.forEach(u => {
                    body += `
                     <tr>
                     <td> ${u.id}</td>
                     <td> ${u.username}</td>
                     <td> ${u.age} </td>
                     <td> ${u.email} </td>
                     <td> ${rol(u)} </td>
                     <td><a href="#" class="btn btn-primary" data-btn="editUser" data-id="${u.id}">Edit</a></td>
                     <td><a href="#" class="btn btn-danger" data-btn="deleteUser" data-id="${u.id}">Delete</a></td>
                     </tr>
                `
                })
                document.querySelector("#table-users-object").innerHTML = body
        })
}

getUsers()

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
                        <input class="form-control" readonly type="number" name="id" id="idEdit" value="${id}"/>
    
                        <label for="username">Enter username: </label>
                        <input class="form-control" type="text" name="username" id="usernameEdit" value="${oneUserfromDB.username}"/>
    
                        <label for="age">Enter age: </label>
                        <input class="form-control" type="text" name="age" id="ageEdit" value="${oneUserfromDB.age}"/>
    
                        <label for="email">Enter email: </label>
                        <input class="form-control" type="text" name="email" id="emailEdit" value="${oneUserfromDB.email}"/>
                        
                        <label for="password">Enter password: </label>
                        <input class="form-control update-password" type="password" name="password" id="passwordEdit">
    
                        <label for="roles">Enter role: </label>
                        <select class="form-control" multiple size="2" name="roles" id="editRoles">
                           <option value="1" name="ROLE_ADMIN">ADMIN</option>
                           <option value="2" selected name="ROLE_USER">USER</option>
                        </select>   
                    
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
                password: $("#passwordEdit").val(),
                age: $("#ageEdit").val(),
                email: $("#emailEdit").val(),
                roles: rolesForm("#editRoles")
            }
            console.log('data = ', data)

            fetch('http://localhost:8080/api/users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(() => $('input').val(''))
                .then(() => $('select').val(false))
                .then(() => getUsers())
            modalEditUser.close()
        })

        $('.close-btn').click(function () {
            modalEditUser.close()
        })
    }
    if (btnType === 'deleteUser') {
        const oneUserfromDB = allUsers.find(f => f.id === id)
        modalDeleteUser.setContent(`
            <div class="update-body">
                <div class="update-content">
                    <div class="form-group">
                        <label for="id">ID</label>
                        <input class="form-control" readonly type="number" id="id" placeholder="${id}">
                        <label for="firstName">Username</label>
                        <input class="form-control" readonly type="text" id="firstName">
                        <label for="age">Age</label>
                        <input class="form-control" readonly type="number" id="age">
                        <label for="email">Email</label>
                        <input class="form-control" readonly type="text" id="email">
                        <label for="selectRoleEd"><b>Role</b></label>
                             <select multiple size="2" class="form-control" id="selectRoleEd" name="role">
                                <option value="1" name="ROLE_ADMIN">ADMIN</option>
                                <option value="2" name="ROLE_USER">USER</option>
                             </select>                                                         
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">       
                            <button class="btn btn-secondary me-md-2 close-btn" data-btn="closeUserFromModal">Close</button>
                            <button class="btn btn-danger delut delut1" data-btn="deleteUserFromModal" id="deluser">Delete</button>
                        </div>    
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
                // .then(() => $(allUsers).val(''))
                .then(() => getUsers())
            modalDeleteUser.close()
            })

        $('.close-btn').click(function () {
            modalDeleteUser.close()
        })
    }   //  end   if (btnType === 'deleteUser')

    if ($(event.target).hasClass('logout')) {
        document.location.replace("/logout")
    }


})


