
const modalEditUser = GM.modal({
    title: 'Edit user',
    closable: true,
    content: `     
  
    `,
    with: '400px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler() {
                console.log('Primary btn clicked')
                modalEditUser.close()
            }},
        {text: 'Edit', type: 'danger', handler() {
                console.log('EDIT user btn clicked')
                modalEditUser.saveUser()
            }}
    ]
})

const modalDeleteUser = GM.modal({
    title: 'Delete user',
    closable: true,
    content: `     
  
    `,
    with: '400px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler() {
                console.log('Primary btn clicked')
                modalEditUser.close()
            }},
        {text: 'Delete', type: 'danger', handler() {
                console.log('DELETE user btn clicked')
                modalEditUser.deleteUser()
            }}
    ]
})