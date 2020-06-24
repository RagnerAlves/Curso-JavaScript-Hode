class UserController    {   // classe UserController ondecontém todos os metodos e acoes do User

    constructor(formId, tableId)   {    // construtor para pegar o formID e a tableId onde será salva os registros do formulario

        this.formEl = document.getElementById(formId)
        this.tableEl = document.getElementById(tableId)
        
        this.onSubmit() // salvar form
    }
//close constructor

    onSubmit()    {     //metodo botão salvar "submit"

        this.formEl.addEventListener("submit", event => { // event para enviar o formulario

            event.preventDefault() // 

            let btn = this.formEl.querySelector(["type=submit"]) // buscando element tipo submit no formulario para travar o botão do type "Salvar".

            btn.disable = true // travar/desabilitar o botão "submit"

            let values = this.getValue()

            if (!values) return false

            this.getPhoto().then(
                (content) => {

                    value.photo = content
                    this.addLine(values) // atribuindo ao objeto values

                    btn.disabled = false // habilitando o botão "submit" depois do formulario ser enviado

                    this.formEl.reset() // limpando o formulario

                }, (e) =>   {
                    console.error(e)
                })            
        })
    }    
// close onSubmit


    getPhoto()  {

        return new Promise((resolve, reject) =>   {
            
            let fileReader = new FileReader()

        let elements = [...this.formEl.elements].filter(item => {

            if (item.name == 'photo'){
                return item 
            }
        })

        let file = elements[0].files[0]

        fileReader.onload = () => {

            resolve(fileReader.result)
        }

        fileReader.onerror = (e) => {
            reject(e)
        }

        if (file){
            fileReader.readAsDataURL(file)
        } else{
            resolve('dist/img/boxed-bg.jpg')
        }
    })
}
// close getPhoto

    getvalues() {

        let user = {}
        let isValid = true

        (...this.formEl.elements).forEach(function (field, index){

            if (['name', 'email', 'pasword'].indexOf(field.name) > -1 && !field.value) { // array onde irá verificar e validar se a inf. do form. foi preenchido buscando em field.name do form se os campos são diferentes de vazios

                field.parentElemnt.classList.add('hass-error') //adicionar em field uma class formGroup, metodo add, entao posso add + uma classe
                isValid = false  // parar o envio do formulario caso retorno a classe que foi add ('hass-error')
            }

            if (field.name === "gender")   {
                user[field.name] = field.value
                   
            } else if (field.name == "admin") {

                user[field.name] =  field.checked

            } else {
        
                user[field.name] = field.value
            }        
        })

        if (!isValid) return false
    
        return new User(
            user.name, 
            user.gender, 
            user.birth, 
            user.country, 
            user.email, 
            user.password, 
            user.photo, 
            user.admin
        )
}

//close getValues

    addLine(dataUser)  { // adiciona toda as informações do usuario preenchidas no formulario
  
        let tr = document.createElement('tr')  // cria o elemneto 'tr'onde o mesmo é manipluado via JS

        tr.dataset.user = JSON.stringify(dataUser) // convertendo objeto para string JSON onde  o mesmo será enviado e salvoem "submit"
        
        tr.innerHTML =  `
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${(dataUser.admin) ? "Sim" : "Não" }</td>
            <td>${Utils.dateFormat(dataUser.register)} </td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td> `

        this.tableEl.appendChild(tr) // adiciona o formulario ao filho da próxima tabela

        this.updateCount()  // conta o número de cadastro efetivados
    }
//close addLine


    updateCount(){ // contanto de cadastro usuario

        let numberUsers = 0  
        let numberAdmin = 0;  

        [...this.tableEl.children].forEach(tr => {  // [...]spred irá ordenar os elementos do meu array que serão percoirridos para serem contatados e assim atualizar o updatCount. element "children" que contem a qnt de usuarios/elements quequero percorrer.

            numberUsers++       //operador incrmental para o forEach

            let user = JSON.parse(tr.dataset.user) // trasnforma novamente o JSON em um Objeto

            if (user._admin) numberAdmin++  // validar admin 
        })

        documento.querySelector("#number-users").innerHTML = numberUsers    // elemento que serão atualizados na tela
        documento.querySelector("#number-users-admin").innerHTML = numberAdmin
    }
//close updateCount

}