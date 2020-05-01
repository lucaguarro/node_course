console.log('Client side javascript file is loaded!')

address = "boston"

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'Chrome Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Hold on a sec dawg'
    url1 = "/weather?address=" + location
    fetch(url1).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = "The weather is " + data.forecast.desc + ". Temp is " + data.forecast.currentTemp + " and feels like " + data.forecast.currentFeelsLike + "."
            }
        })
    })
})