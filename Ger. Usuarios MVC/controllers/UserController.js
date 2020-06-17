class UserController    {

    constructor(formId, tableId)   {

        this.formEl = document.getElementById(formId)
        this.tableEl = document.getElementById(tableId)
        
        this.onSubmit()
    }
//close constructor

    onSubmit()    {

        this.formEl.addEventListener("submit", event => {

            event.preventDefault()

            let values = this.getValue()

            this.getPhoto().then(
                (content) => {

                    value.photo = content
                    this.addLine(value)

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

        (...this.formEl.elements).forEach(function(field, index){

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

    addLine(dataUser)  {

        let tr = document.createElement('tr')
        
        tr.innerHTML =  `
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${(dataUser.admin) ? "Sim" : "Não" }</td>
            <td>${dataUser.data}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td> `

        this.tableEl.appendChild(tr)
    }
//close addLine

}