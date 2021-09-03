
function addUserToMainWindow() {
    const tableNewUser = `
        <divclass="form-control">
            <div class="form-group">
                <div class="container new-user-content" style="width: 35%; left: 50%;text-align: center; font-weight: bold;">
                    <div class="form-group new-user-form">
                        <label htmlFor="newUsername">Enter username: </label>
                        <input class="form-control" type="text" name="username" id="newUsername" value=""/>
                        
                        <label htmlFor="newPassword">Enter password: </label>
                        <input class="form-control" type="password" name="password" id="newPassword">
                        
                        <label htmlFor="newAge">Enter age: </label>
                        <input class="form-control" type="text" name="age" id="newAge" value=""/>
                        
                        <label htmlFor="newEmail">Enter email: </label>
                        <input class="form-control" type="text" name="email" id="newEmail" value=""/>
                                                
                        <label htmlFor="newRoles">Enter role: </label>
                        <select class="form-control" multiple size="2" name="roles" id="newRoles">
                           <option value="1" name="ROLE_ADMIN">ADMIN</option>
                           <option value="2" name="ROLE_USER">USER</option>
                        </select>           
                        <button type="submit" class="btn btn-success new-user-btn " data-btn="new-user-btn-data-btn" id="button-add-user" style="margin: 3%">Add new user</button>
                    </div>
                </div>
            </div>
        </div>
    `
    document.querySelector(".div-right-body-test").innerHTML = tableNewUser
}
addUserToMainWindow()


document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    let user = {
        username: $("#newUsername").val(),
        age: $("#newAge").val(),
        email: $("#newEmail").val(),
        password: $("#newPassword").val(),
        roles: rolesForm('#newRoles')
    }
    if (btnType === 'new-user-btn-data-btn') {
        console.log('user to add: ', user)
            fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(() => $('input').val(''))
                .then(() => $('select').val(false))
                .then(() => getUsers())
        getUsers()
    }
})

// $(document).ready(function () {
//     //restartAllUser();
//     $('#button-add-user').on('click', function (event) {                                  //adding user
//         let user = {
//             username: $("#newUsername").val(),
//             password: $("#newPassword").val(),
//             age: $("#newAge").val(),
//             email: $("#newEmail"),
//             roles: rolesForm("#newRoles")
//         }
//         console.log(user);
//         fetch("api/users", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json;charset=utf-8"
//             },
//             body: JSON.stringify(user)
//         })
//             //.then(() => $('input').val('')) //fields cleaning
//             //.then(() => $('select').val(false))
//             //.then(() => openTabById('nav-home'))
//             //.then(() => restartAllUser());
//
//     })
// })

