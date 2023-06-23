function numberFormat(arr) {

    arr = Number(arr.split('T')[0].split('-').join(''))

    return arr
}

sortableBtnDate.addEventListener('click', () => {

    sortableBtnDate.classList.add('sortable__button_active')
    sortableBtnRating.classList.remove('sortable__button_active')
    searchResetBtn.classList.add('search__reset-button_active')
    if(!sortableBtnDate.classList.contains('active')) {
        userData = userData.sort((a, b) => {
            if(numberFormat(a.registration_date) > numberFormat(b.registration_date)) return -1
        })
    } else {
        userData = userData.sort((a, b) => {
            if(numberFormat(a.registration_date) < numberFormat(b.registration_date)) return -1
        })
    }

    sortableBtnDate.classList.toggle('active')

    rerenderApp(userData)
})

sortableBtnRating.addEventListener('click', () => {

    sortableBtnRating.classList.add('sortable__button_active')
    sortableBtnDate.classList.remove('sortable__button_active')
    searchResetBtn.classList.add('search__reset-button_active')
    if(!sortableBtnDate.classList.contains('active')) {
        userData = userData.sort((a, b) => {
            if(a.rating > b.rating) return -1
        })
    } else {
        userData = userData.sort((a, b) => {
            if(a.rating < b.rating) return -1
        })
    }

    sortableBtnDate.classList.toggle('active')

    rerenderApp(userData)
})

