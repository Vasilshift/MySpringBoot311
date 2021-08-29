// $(document).on("click", "#addNewUserBtn", function (){
//     //let roles = $("#newRoles").val();
//     const dataNewUser = {
//         username: $("#usernameNew").val(),
//         age: $("#ageNew").val(),
//         email: $("#emailNew").val(),
//         password: $("#passwordNew").val(),
//         roles: getRol("#selectRoleNew")
//     }
//     console.log('dataNewUser: ', dataNewUser)
//     //getAdminPanel();
//     //getTable();
//     sendData("http://localhost:8080/api/users", JSON.stringify(dataNewUser), "PUT");
//
// })

function addUserToMainWindow() {
    const tableOneUser = `<div className="container new-user-content" style="width: 35%; left: 50%;text-align: center; font-weight: bold;">
                            <div className="form-group new-user-form">

                            <label htmlFor="newUsername">Enter name: </label>
                            <input className="form-control" type="text" name="username" id="newUsername" value=""/>
                
                            <label htmlFor="newAge">Enter age: </label>
                         <input className="form-control" type="text" name="age" id="newAge" value=""/>
                
                        <label htmlFor="newEmail">Enter email: </label>
                        <input className="form-control" type="text" name="email" id="newEmail" value=""/>
                
                        <label htmlFor="newPassword">Enter password: </label>
                        <input className="form-control" type="password" name="password" id="newPassword">

                        <label htmlFor="newRoles">Enter role: </label>
                        <select className="form-control" multiple="multiple" size="2" name="newRoles" id="newRoles">
                            <option selected>USER</option>
                            <option>ADMIN</option>
                        </select>
            
                        <button type="submit" class="btn btn-success new-user-btn" data-btn="new-user-btn-data-btn" style="margin: 3%">Add new user</button>

                        </div>
                       </div>`
    document.querySelector(".div-right-body-test").innerHTML = tableOneUser

}
addUserToMainWindow()

document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    const newUserForAdd = {
        "username": $("#newUsername").val(),
        "age": $("#newAge").val(),
        "email": $("#newEmail").val(),
        "password": $("#newPassword").val(),
        "roles": getRol('#newRoles')
    }

    if (btnType === 'new-user-btn-data-btn') {
        console.log('newUserForAdd: ', newUserForAdd)
        sendData("http://localhost:8080/api/users", JSON.stringify(newUserForAdd), "PUT")

    }
})







// $(document).on('click', '.new-user-btn', function () {
//     //let roles = $("#newRoles").val();
//     const newUserForAdd = {
//         "name": $("#newName").val(),
//         "age": $("#newAge").val(),
//         "email": $("#newEmail").val(),
//         "password": $("#newPassword").val(),
//         "roles": getRol('#newRoles')
//     }
//     console.log('newUserForAdd: ', newUserForAdd)
//     //getAdminPanel();
//     //getTable();
//     sendData("http://localhost:8080/api/users", JSON.stringify(newUserForAdd), "PUT");
//
// })

