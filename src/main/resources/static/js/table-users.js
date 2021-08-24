
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


// fetch('http:localhost:8080/api/users').then(
//         res => {
//             res.json().then(
//                 data => {
//                     console.log('Display 1 user from database', data);
//                 }
//             )
//         })


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
                            temp += "<a href='#' class='btn btn-primary' data-btn='editUser' data-id='${u.id}'>Edit</a>"
                            temp += "<td><button type='button' class='btn btn-danger' id='open-popup1'>Delete</button></td>"
                            temp += "</tr>"
                        })

                        a.innerHTML = temp;
                    })
            })
    )
}

sendRequest()

// let obj;
// fetch('http:localhost:8080/api/users/1')
//     .then(res => res.json())
//     .then(data => obj = data)
//     .then(() => console.log('one User from DB = ', obj))


document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = event.target.dataset.id
    //const oneUserfromDB = usersFromDB.find(f => f.id === id)
    //console.log('One user from DB: ', hg.getElementById(id))
    if (btnType === 'editUser') {
        modalEditUser.open()
        console.log()
    }
})


