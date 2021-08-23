//realize modal window : display and close
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
                <div class="modal-body">
                ${options.content || ''}
                </div>
                <div class="modal-footer">
                    <button>OK</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}

GM.modal = function (options) {

    const modal = {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
        }
    }

    const $modal = _createModal(options)

    $modal.addEventListener('click', event => {
        console.log('Clicked', event.target.dataset.close)
        if (event.target.dataset.close) {
        modal.close()
        }
    })
    return modal
}

