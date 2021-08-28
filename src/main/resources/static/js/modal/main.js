// fetch
const sendData = (url, data, method) => {
    const response = fetch(url, {
        method : method,
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: data,
    }).then(getTable)

 }

//button close
$(document).on("click", ".update-close", function () {
    $(".update").hide();
})

// Roles
function getRol(rol){
    if (rol.length === 2) {
        const roles = [{
            id: 2,
            name: "ROLE_USER",
        },
            {
                id: 1,
                name: "ROLE_ADMIN"
            }]
        return roles;
    }
    if (rol.indexOf("USER") != -1){
        const roles = [{
            id: 2,
            name: "ROLE_USER",
        }]
        return roles;
    }
    if (rol.indexOf("ADMIN") != -1){
        const roles = [{
            id: 1,
            name: "ROLE_ADMIN",
        }]
        return roles;
    }
}




