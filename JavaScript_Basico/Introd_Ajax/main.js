var xhr = new XMLHttpRequest()

xhr.open('GET', 'https://api.github.com/users')
xhr.send(null)

xhr.onreadystatechange = function() {

    if (xhr.readyState == 4)    {

        console.log(JSON.parse(xhr.responseText)) // pois o retorno é um JSOn assim converto em objt em JSON.parse
    }
}