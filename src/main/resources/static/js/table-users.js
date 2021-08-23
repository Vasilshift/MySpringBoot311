
    const a = document.querySelector('.table-users-object')
    let output = ''
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

function sendRequest(){
    return (
        fetch(requrl).then(
            res => {
                res.json().then(
                    data => {
                        console.log(data);
                        let temp = "";
                        data.forEach((u) => {
                            temp += '<tr>'
                            temp += '<td>' + u.id + '</td>'
                            temp += '<td>' + u.username + '</td>'
                            temp += "<td>" + u.lastname + "</td>"
                            temp += "<td>" + u.age + "</td>"
                            temp += "<td>" + u.email + "</td>"
                            temp += "<td>" + rol(u) + "</td>"
                            temp += "<td><button type='button' class='btn btn-primary' id='open-popup1'>Edit</button></td>"
                            temp += "<td><button type='button' class='btn btn-danger' id='open-popup1'>Delete</button></td>"
                            temp += "</tr>"
                        })
                        a.innerHTML = temp;
                    })
            })
    )
}

sendRequest()


