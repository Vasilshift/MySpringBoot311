
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


function sendRequest(){
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
                            temp += '<a href="#" class="btn btn-primary" data-btn="editUser" data-id=' + u.id + '>Edit</a>'
                            temp += "<td><button type='button' class='btn btn-danger' id='open-popup1'>Delete</button></td>"
                            temp += "</tr>"
                        })

                        a.innerHTML = temp;
                    })
            })
    )
}

sendRequest()




document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = event.target.dataset.id
    const oneUserfromDB = allUsers.find(f => f.id === id)
    console.log('One user from DB: ', oneUserfromDB)
    if (btnType === 'editUser') {
        modalEditUser.open()
        console.log(oneUserfromDB)
    }
})


