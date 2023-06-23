function getOptions(word){
    return userSearch.filter(u => {
        const regex = new RegExp(word, 'gi')
        return u.username.match(regex)
    })
}    

function displayOptions(value) {
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
})
