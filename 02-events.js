//1. Access The Form and the input field
const form = document.getElementById('formId')
const input = document.getElementById('inputId')
const ul = document.querySelector('ul')


console.log(form, input, ul)

//2. Add Event Listener on the form
// addEventListener('event', function)
form.addEventListener('submit', (e)=> {
    e.preventDefault()
    // console.log("If you can see me when the button was clicked, it means we are good!")
    //3. Take the user input, and add it to the movie list inside the event listener
    console.log(input.value)
    const li = document.createElement('li')
    li.innerText = input.value
    input.value = ""
    ul.appendChild(li)
})


