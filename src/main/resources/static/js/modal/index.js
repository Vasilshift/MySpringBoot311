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



