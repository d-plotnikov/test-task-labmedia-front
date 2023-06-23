function paginateRender(data) {

    userList = data,
    countPage = Math.ceil(userList.length / 5)

    function paginate(i) {
        let pageItem = pageCounter.cloneNode(true)
        pageItem.querySelector('.js-page-number').textContent = i
        return pageItem
    }

    let fragment = document.createDocumentFragment()
    pagination.innerHTML= ''

    for (let i = 1; i < countPage + 1; i++) {
        fragment.appendChild(paginate(i))
    }
 
    pagination.appendChild(fragment)
    
    clickPagination()
}

function clickPagination() {
    let paginationBtn = document.querySelectorAll('.js-page-number')
    paginationBtn.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            let index = e.target.innerHTML
            let stepPaginate = 5
    
            if (e.target.classList.contains('js-page-number')) {
                
                if (index== 1) {
                    keyUser = 0
                    perPage = 5
                } else {
                    perPage = index*stepPaginate
                    keyUser = (index-1)*stepPaginate
                }
        
                rerenderApp(userData)
            }
        })
    });
    
}