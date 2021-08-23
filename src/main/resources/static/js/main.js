const a = document.querySelector('.table-users-object')
let output = ''
const requrl = 'http://localhost:8080/api/users'


//let data = JSON.toString();



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
                        temp += "<td>" + u.roles + "</td>"
                        temp += "<td><button type='button' class='btn btn-primary' id='open-popup1'>Edit</button></td>"
                        temp += "<td><button type='button' class='btn btn-danger' id='open-popup1'>Delete</button></td>"
                        temp += "</tr>"
                    })
                    document.querySelector(".table-users-object").innerHTML = temp;
                })
        })
    )
}

//JSON.toString(mywrapfunction())

sendRequest()

// function sendRequest(method, url) {
//     return fetch(url).then(response => {
//         return response.json()
//     })
// }
//
// sendRequest('GET', requrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// let data = JSON.parse(this.responseText);
//
// fetch(url, {
//     credentials: 'include'
// })
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(u => {
//             output += `${u.body}`;
//         });
//         a.innerHTML = output;
//     })


// function createTableRow(u) {                                                    //table creating
//     // let userRole = "[";
//     // for (let i = 0; i < u.roles.length; i++) {
//     //     userRole += u.roles[i].name.substring(5);
//     //     if (i != (u.roles.length - 1)) {
//     //         userRole += ", ";
//     //     }
//     // }
//     // userRole += "]";
//     return `<tr id="user_table_row">
//         <td>${u.id}</td>
// <!--        <td>${u.name}</td>-->
//         <td>${u.lastname}</td>
//         <td>${u.age}</td>
//         <td>${u.username}</td>
//         // <td>${userRole}</td>
//         <td>
//         <a href="/api/users/${u.id}" class="btn btn-info openEdit" >Edit</a>
//         </td>
//         <td>
//         <a href="/api/users/${u.id}" class="btn btn-danger openDelete">Delete</a>
//         </td>
// </tr>`;
// }

// createTableRow()