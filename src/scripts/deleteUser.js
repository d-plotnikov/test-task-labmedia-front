function deleteUser(data) {

    let deleteItem = document.querySelectorAll('.js-delete-item')
    let attr

    deleteItem.forEach((item, idx) => {

        item.addEventListener('click', () => {
            attr = item.getAttribute('data-attr')
            modal.classList.add('modal_active')
        })

    })

    modalBtn.forEach((item, idx) => {

        item.addEventListener('click', () =>{
            
            if(idx == 1){
                modal.classList.remove('modal_active')
            } else {
                modal.classList.remove('modal_active')
                data = data.filter(item => item.id != attr)
                userData = data
                userSearch = userSearch.filter(item => item.id != attr)
                rerenderApp(data)
            }

        })
    })
}
