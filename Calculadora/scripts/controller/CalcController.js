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

        this.operation.pop();
    }

    clearAll(){
        

    }

    getLastOperation()  {

        return this.operation[this.operation.length-1]
    }

    setLastOperation(value) {
        this.operation[this.operation.length-1] = value
    }

    isOperator()    {

        return (['+', '-', '*', '%', '/'].index.Of(value) > - 1)
    }

    addOperation(value)  {

        if (isNaN(this.getLastOperation()))   {
            
            if (this.getLastOperation(value))   {

                this.setLastOperation(value)

            } else if (isNaN(value))    {


            } else {
                this.operation.push(newValue)
            }

        } else {    

            let newValue = this.getLastOperation.toString() + value.toString()
            this.setLastOperation(parseInt(newValue))
        }

        this.operation.push(value)
        console.log(this.operation)
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
                this.addOperation('+')
                break;
            case 'subtracao':
                this.addOperation('-')
                break;
            case 'divisao':
                this.addOperation('/')
                break;
            case 'multiplicacao':
                this.addOperation('*')
                break;
            case 'porcento':
                this.addOperation('%')
                break;
            case 'igual':
                this.addOperation('=')
                break;
            case 'ponto':
                this.addOperation('.')
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addoperation(parseInt(value))
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