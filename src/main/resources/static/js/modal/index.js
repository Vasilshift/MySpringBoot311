const modalEditUser = GM.modal({
    title: 'Edit user',
    closable: true,
    content: '',
    width: '500px'
})

const modalDeleteUser = GM.modal({
    title: 'Delete user',
    closable: true,
    content: '',
    width: '500px'
})

function rolesForm(r) {
    let roles = [];
    $(r).find("option:selected").each(function () {
        roles.push({id: $(this).val(), name: $(this).attr("name") })
    })
    return roles;
}

function formRoleSelect(user, adress) {                                         //selet roles on form
    const select = document.getElementById(adress)
        .getElementsByTagName('option')

    for (let i of user.roles) {
        if (i.name === 'ROLE_ADMIN') {
            select[0].selected = true
        }
        if (i.name === 'ROLE_USER') {
            select[1].selected = true
        }
    }
}

