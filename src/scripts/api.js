const api = `https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users`;

async function getusers() {

    try {

        let response = await fetch(api)
        let arr = await response.json()
        userData = await Object.assign([], arr)

        rerenderApp(userData)
        userSearch = userData

    } catch (err) {
        console.error(err);
    }
}

getusers()
