class CalcController    {

    constructor()   {

        this._displayCalc = "0" //atributos privatos sao declarados com "_"
        this._currentDate
        this.initialize()
    }

    initialize()    {

        let displayCalcEl = document.querySelector('#display')
        let dateEl = document.querySelector('#data')
        let timeEl = document.querySelector('#hora')

        displayCalcEl.innerHTML = '4567';
        dateEl.innerHTML = '05/05/2020';
        timeEl.innerHTML = "14:25";
        
    }

    get displayCalc()   {

        return this._displayCalc
    }

    set displayCalc(valor)   {

        this._displayCalc = valor
    }

    get currentDate()   {

        return this._currentDate
    }

    set currentDate(valor)   {
        
        this._currentDate = valor
    }

}