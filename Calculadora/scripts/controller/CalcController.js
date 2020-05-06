class CalcController    {

    constructor()   {

        this._operation = []
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector('#display') //manipulando DOM
        this._dateEl = document.querySelector('#data')
        this._timeEl = document.querySelector('#hora')       
        this._currentDate
        this.initialize()
        this.initButtonsEvents()
    }

    initialize()    {
               
        this.setDisplayDateTime()

        setInterval(()  => {            

           this.setDisplayDateTime()

        }, 1000 )
    }

    addEventListenerAll(element, events, fn)   {

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false)
        })
    }
    
    clearEntry()    {

    }

    clearAll(){
        

    }

    addOperation()  {

        this.operation.push(value)
    }

    setError()  {

        this.displayCalc = 'ERROR'
    }

    execBtn()   {

        switch  (value) {

            case 'ac':
                this.clearAll()
                break;
            case 'ce':
                this.clearEntry()
                break;
            case 'soma':
                this.
                break;
            case 'sosubtracao':
                this.
                break;
            case 'divisao':
                this.
                break;
            case 'multiplicacao':
                this.
                break;
            case 'porcento':
                this.
                break;
            case 'igual':
                this.
                break;

            default:
                this.setError()
                break;
        }
    }

    initButtonsEvents() {

        let buttons = document.querySelectorAll('#buttons > g, #parts > g ')

        buttons.forEach((btn, index) =>   {

            this.addEventListenerAll('click drag mouseover', e => {

                let textBtn = btn.className.baseVal.replace('btn-', "")

                this.execBtn()
            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=> {

                btn.style.cursor = "pointer"
            })

        })

    }

      setDisplayDateTime()  {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        })
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
      
    }
    
    get displayTime()   {

        return this._timeEl.innerHTML
    }

    set displayTime(value)   {

        this._timeEl.innerHTML = value
    }

    get displayDate()   {

        return this._dateEl.innerHTML
    }

    set displayDate(value)   {

        return this._dateEl.innerHTML = value
    }

    get displayCalc()   {

        return this._displayCalc.innerHTML
    }

    set displayCalc(value)   {

        this._displayCalc.innerHTML = value
    }

    get currentDate()   {

        return new Date()
    }

    set currentDate(value)   {
        
        this._currentDate = value
    }

}