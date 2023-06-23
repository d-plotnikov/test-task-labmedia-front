function getOptions(word){
    return userSearch.filter(u => {
        const regex = new RegExp(word, 'gi')
        return u.username.match(regex)
    })
}    

function displayOptions(value) {
    if(value!= ''){
        searchResetBtn.classList.add('search__reset-button_active')
    }
    userData = getOptions(value)
    rerenderApp(userData)
}

searchInput.addEventListener('keyup', () => {
    keyUser = 0
    perPage = 5
    displayOptions(searchInput.value)
})

searchResetBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    searchInput.value = ''
    displayOptions(searchInput.value)
    rerenderApp(userData)
    searchResetBtn.classList.remove('search__reset-button_active')
})
