const btnAminUser = `<div class="container-fluid div-admin-user">
                        <button class="btn btn-primary left-admin-btn" type="button">Admin</button>
                        <button class="btn btn left-user-btn" type="button" style="color: #027cff">User</button>
                     </div>`
const adminPanel = `<div class="container-fluid admin-panel">
                <h1>Admin panel</h1>
                </div>`;
const navLinkTable = `<div class="container-fluid nav-panel">
                         <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <button class="nav-link active users-table-nav">Users table</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link new-users-nav">New user</button>
                            </li>
                         </ul>
                      </div>`;
const textTable = `<div class="container-fluid all-users">
                        <h3>All users</h3>
                   </div>`;
const adminTable = `<div class="container-fluid table-panel">
                        <table class="table table-striped">
                            <thead class="table-panel-thead">
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody class="table-panel-tbody">
                        </tbody>
                        </table>
                      </div>`;
const allAdminPanel = () => {
    document.querySelector(".div-left-body").innerHTML = btnAminUser;
    document.querySelector(".div-right-body").innerHTML = adminPanel + navLinkTable + textTable + adminTable;
}
const getAdminPanel = () => {
    document.querySelector(".div-right-body").innerHTML = adminPanel + navLinkTable + textTable + adminTable;
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

allAdminPanel();
getTable();








