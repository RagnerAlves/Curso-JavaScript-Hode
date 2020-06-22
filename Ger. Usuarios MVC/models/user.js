class User{

    constructor(name, gender, birth, country, email, passowrd, photo, admin){

        this._name = name
        this._gender = gender
        this._birth = birth
        this._country = country
        this._email = email
        this._passowrd = passowrd
        this._photo = photo
        this._admin = admin
        this._register = new Date()
    }

    get register()  {

        return this._register
    }

    get name()  { 

        return this._name // manipulando prop. privadas da class "User" "_"
    }

    get gender()    {

        return this._gender
    }

    get birth()    {

        return this._birth
    }

    get country()    {

        return this._country
    }

    get email()    {

        return this._email
    }

    get photo()    {

        return this._photo
    }

    set photo(value) {

        this._photo = value
    }

    get passowrd()    {

        return this._passowrd
    }

    get admin()    {

        return this._admin
    }
    set photo(value) {

        this._photo = value
    }

}