
const modalEditUser = GM.modal({
    title: 'Edit user',
    closable: true,
    content: `
        <div>gagadf</div>
        
    


    `,
    with: '400px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler() {
                console.log('Primary btn clicked')
                modalEditUser.close()
            }},
        {text: 'Edit', type: 'danger', handler() {
                console.log('Danger btn clicked')
                modalEditUser.close()
            }}
    ]
})

