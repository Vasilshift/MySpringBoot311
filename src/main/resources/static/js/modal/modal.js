//realize modal window : display and close
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}

function noop() {}

function _createModalFooter(buttons = []) {
    if (buttons.length === 0) {
        return document.createElement('div')
    }
    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')
    buttons.forEach(btn => {
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add('btn')
        $btn.classList.add(`btn-${btn.type || 'secondary'}`)
        $btn.onclick = btn.handler || noop

        wrap.appendChild($btn)
    })
    return wrap
}

function _createModal(options) {
    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay" data-close="true">
            <div class="modal-window" style="${options.width || DEFAULT_WIDTH}">
                <div class="modal-header">
                    <span class="modal-title">${options.title || 'Windows'}</span>
                    ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
                </div>
                <div class="modal-body" data-content>
                ${options.content || ''}
                </div>
            </div>
        </div>
    `)
    const footer = _createModalFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))
    document.body.appendChild(modal)
    return modal
}

GM.modal = function (options) {
    const destroyed = false
    const modal = {
        open() {
            // if (destroyed) {return console.log('Modal is destroyed')
            // }
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
        },
        deleteUserFromDB( url, method) {
            return fetch(url, {
                method : method
            })

        },
        render() {
            const toHTML = u => `<div><tr>
                      <td>${u.id}</td>
                      <td>${u.username}</td>
                      <td>${u.age}</td>
                      <td>${u.email}</td>
                      <td>${rol(u)}</td>
                      <td><a href="#" class="btn btn-primary" data-btn="editUser" data-id=${u.id}>Edit</a></td>
                      <td><a href="#" class="btn btn-danger" data-btn="deleteUser" data-id=${u.id}>Delete</a></td>
                      </tr>
                     </div> 
                     `
            const htmlRendered = allUsers.map(toHTML).join('')
            document.querySelector('.table-users-object').innerHTML = htmlRendered
        }

    }
    const listener = event => {
        console.log('Clicked', event.target.dataset.close)
        if (event.target.dataset.close) {
            modal.close()
        }
    }
    const $modal = _createModal(options)
    $modal.addEventListener('click', listener)
    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            // destroyed = true
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}

