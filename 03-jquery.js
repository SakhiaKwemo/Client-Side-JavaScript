const $form = $('#formId')
const $input = $('#inputId')
const $ul = $('ul')

console.log($form, 
    $input, $ul)


$form.on('submit', (e) => {
    e.preventDefault()
    console.log($input.val())
    const li = '<li>'+ $input.val()+'</li>'
    $ul.append(li)
    $input.val("")
})
//id --> #
//classes -- > .

/*
#container {

}

.container {

}

h1 {

}



DIFFERENCES 

- form ---> $form
- addEventListener ---> on
- input.value ---> $input.val()
- document.create + <>.innerText ---> '<>''</>'
- appendChild ---> append
*/