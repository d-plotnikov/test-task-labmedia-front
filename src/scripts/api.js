const api = `https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users`

fetch(api)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            alert('Что то пошло не так :(')
        }
    })
    .then(data => {
        userData = data
        
    })
