var listElement = document.querySelector('#app ul')
var inptElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todoos = [
    'Fazer café',
    'Estudar C#',
    'Acessar Comunidade'
]

function renderTodoos() {
    for (todoo of todoos)   {

        var todooElement = document.createElement('li')
        var todooText = document.createTextNode(todoo)

        todooElement.appendChild(todooText)
        listElement.appendChild(todooElement)
    }
}