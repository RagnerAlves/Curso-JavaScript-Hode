// var xhr = new XMLHttpRequest()

// xhr.open('GET', 'https://api.github.com/users')
// xhr.send(null)

// xhr.onreadystatechange = function() {

//     if (xhr.readyState == 4)    {

//         console.log(JSON.parse(xhr.responseText)) // pois o retorno é um JSOn assim converto em objt em JSON.parse
//     }
// }

// var minhaPromise = function()   { 

//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest()
//         xhr.open('GET', 'https://api.github.com/users')
//         xhr.send(null)

//         xhr.onreadystatechange = function() {

//             if (xhr.readyState == 4) {
//                 if(xhr.responseText == 200) {
//                     resolve(JSON.parse(xhr.responseText))
//                 }   else{
//                     reject('Erro na requisição')
//                 }
//             }
//         }
//     })
// }

axios.get('https://api.github.com/users/diego3d')
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    })