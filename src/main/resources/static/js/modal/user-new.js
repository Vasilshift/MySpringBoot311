$(document).on("click", ".new-users-nav", function () {
    const newUser = `<div class="container-fluid admin-panel">
                        <h1>Admin panel</h1>
                      </div>
                      <div class="container-fluid nav-panel">
                         <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <button class="nav-link users-table-nav">Users table</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link active new-users-nav">New user</button>
                            </li>
                         </ul>
                      </div>
                      <div class="container-fluid all-users">
                        <h3>Add new user</h3>
                      </div>
                      <div class="container new-user-content"
                        style="width: 35%; left: 50%;text-align: center; font-weight: bold;">
                        <div class="form-group new-user-form">
    
                        <label for="newName">Enter name: </label>
                        <input class="form-control" type="text" name="name" id="newName" value=""/>
    
                        <label for="newAge">Enter age: </label>
                        <input class="form-control" type="text" name="age" id="newAge" value=""/>
    
                        <label for="newEmail">Enter email: </label>
                        <input class="form-control" type="text" name="email" id="newEmail" value=""/>
    
                        <label for="newPassword">Enter password: </label>
                        <input class="form-control" type="password" name="password" id="newPassword">
    
                        <label for="newRoles">Enter role: </label>
                        <select class="form-control" multiple="multiple" size="2" name="newRoles" id="newRoles">
                            <option selected>USER</option>
                            <option>ADMIN</option>
                        </select>
    
                        <button type="submit" class="btn btn-success new-user-btn" style="margin: 3%">Add new user</button>
    
                        </div>
                      </div>`;
    document.querySelector(".div-right-body").innerHTML = newUser;
})

$(document).on("click", ".users-table-nav", function (){
    getAdminPanel();
    getTable();
})

$(document).on("click", ".new-user-btn", function (){
    let roles = $("#newRoles").val();
    const data = {
        "name": $("#newName").val(),
        "age": $("#newAge").val(),
        "email": $("#newEmail").val(),
        "password": $("#newPassword").val(),
        "roles": getRol(roles)
    }
    getAdminPanel();
    getTable();
    sendData("http://localhost:8080/api/users", JSON.stringify(data), "POST");

})