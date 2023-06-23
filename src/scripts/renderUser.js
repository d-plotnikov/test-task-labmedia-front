function renderUserList(data) {

    userList = data.slice(keyUser, perPage)
    
    function createUserList(i, data) {

        let userItem = template.cloneNode(true)
        
        let date = data[i].registration_date.split('T')[0]
    
        userItem.querySelector('.js-delete-item').setAttribute('data-attr', data[i].id)
        userItem.querySelector('.js-username').textContent = data[i].username
        userItem.querySelector('.js-email').textContent = data[i].email
        userItem.querySelector('.js-date').textContent = date
        userItem.querySelector('.js-rating').textContent = data[i].rating
    
        return userItem
    
    }

    let fragment = document.createDocumentFragment()
    element.innerHTML= ''

    userList.forEach((item, idx) => {
        fragment.appendChild(createUserList(idx, userList))
    })
    
    element.appendChild(fragment)

}
