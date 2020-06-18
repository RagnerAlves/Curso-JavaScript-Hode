class UserController    {

    constructor(formId, tableId)   {

        this.formEl = document.getElementById(formId)
        this.tableEl = document.getElementById(tableId)
        
        this.onSubmit()
    }
//close constructor

    onSubmit()    {

        this.formEl.addEventListener("submit", event => { // event para enviar o formulario

            event.preventDefault() // 

            let btn = this.formEl.querySelector(["type=submit"]) // buscando element tipo submit

            btn.disable = true

            let values = this.getValue()

            this.getPhoto().then(
                (content) => {

                    value.photo = content
                    this.addLine(value) // atribuindo ao objeto value
                    
                    this.formEl.reset() // limpando o formulario

                    btn.disabled = false

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

    if  (isValid) {

        return false
    }

    addLine(dataUser)  {

        let tr = document.createElement('tr')
        
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

        this.tableEl.appendChild(tr)
    }
//close addLine

}