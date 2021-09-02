
function addUserToMainWindow() {
    const tableNewUser = `
        <divclass="form-control">
            <div class="form-group">
                <div class="container new-user-content" style="width: 35%; left: 50%;text-align: center; font-weight: bold;">
                    <div class="form-group new-user-form">
                        <label htmlFor="newUsername">Enter username: </label>
                        <input class="form-control" type="text" name="username" id="newUsername" value=""/>
                        <label htmlFor="newAge">Enter age: </label>
                        <input class="form-control" type="text" name="age" id="newAge" value=""/>
                        <label htmlFor="newEmail">Enter email: </label>
                        <input class="form-control" type="text" name="email" id="newEmail" value=""/>
                        <label htmlFor="newPassword">Enter password: </label>
                        <input class="form-control" type="password" name="password" id="newPassword">
                        <label htmlFor="newRoles">Enter role: </label>
                        <select class="form-control" multiple size="2" name="roles" id="newRoles">
                           <option value="1" name="ROLE_ADMIN">ADMIN</option>
                           <option value="2" name="ROLE_USER">USER</option>
                        </select>           
                        <button type="submit" class="btn btn-success new-user-btn " data-btn="new-user-btn-data-btn" style="margin: 3%">Add new user</button>
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
    const newUserForAdd = {
        username: $("#newUsername").val(),
        age: $("#newAge").val(),
        email: $("#newEmail").val(),
        password: $("#newPassword").val(),
        roles: rolesForm('#newRoles')
    }
    if (btnType === 'new-user-btn-data-btn') {
        console.log('newUserForAdd: ', newUserForAdd)
        //sendData("http://localhost:8080/api/users", JSON.stringify(newUserForAdd), "POST")
// Example POST method implementation:
        async function postData(url = 'http://localhost:8080/api/users', newUserForAdd) {
            // Default options are marked with *
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                //mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'include', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                },
                //redirect: '', // manual, *follow, error
                //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(newUserForAdd) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }
        postData()



    }
})

