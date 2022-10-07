const btn = document.querySelector('.btn')
const img = document.querySelector('.random-cat')
const url = 'https://aws.random.cat/meow'

async function fetchHandler() {
    try{
        const response = await fetch(url)
        const data = await response.json()
        img.src = data.file 
    } catch (error) {
        console.log(error)
    }
}

btn.onclick = function () {
    let isLoaded = img.complete

    if(isLoaded) {
    fetchHandler()
    }
}