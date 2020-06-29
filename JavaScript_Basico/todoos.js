var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var to

var todoos = JSON.parse(localStorage.getItem('list_todoos')) || []

function renderTodoos() {

    listElement.innerHTML = ''

    for (todoo of todoos)   {
        var todooElement = document.createElement('li')
        var todooText = document.createTextNode(todoo)

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        var linkText = document.createTextNode('Excluir')

        linkElement.appendChild(linkText)

        var pos = todoo.indexOf(todoo)

        linkElement.setAttribute('onclick', 'deleteTodoo('+ pos +')')
        
        todooElement.appendChild(todooText)
        todooElement.appendChild(linkElement)

        listElement.appendChild(todooElement)
    }
}

renderTodoos()

function addTodoo() {

    var todooText = inputElement.value

    todoos.push(todooText)
    inputElement.value = ''
    renderTodoos()
    saveToStorage()
}

buttonElement.onclick = addTodoo


function deleteTodoo(pos)  {

    todoo.splice(pos, 1)
    renderTodoos()
    saveToStorage()
}

function saveToStorage()    {
    localStorage.setItem('list_todoos', JSON.stringify(todoos))
}