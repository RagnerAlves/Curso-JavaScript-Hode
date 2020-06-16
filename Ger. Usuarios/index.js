var fields = document.querySelectorAll("#form-user-create [name]")
var user = {}

fields.forEach(function(field, index){

    if (field.name === "gender" && field.checked == true)   {
        user[field.name] = field.value
           
    } else {

        user[field.name] = field.value
    }

    //console.log(field.id, field.name, field.nodeValue, field.checked, index)

})