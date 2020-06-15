class CalcController    {

    constructor()   {

        this._lastOperator = ''
        this._lastNumber = ''

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

        this.setLastNumberToDisplay()
    }

    addEventListenerAll(element, events, fn)   {

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false)
        })
    }
    
    clearEntry()    {
        
        this._operation = []
        this.lastNumber = ''
        this.lasOperator = ''
        this.setLastNumberToDisplay()
    }

    clearAll(){
        
        this.operation.pop();
        this.setLastNumberToDisplay()
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

    pushOperation() {

        this.operation.push(value)

        if  (this.operation.length > 3) {
            
            this.calc()

        } else  {

        }
    }

    getResult() {

       return eval(this.operation.join(""))
    }

    calc()  {

        let last = ''
        this._lastOperator = this.getlastItem()

        if (this.operation.lenght < 3)   {

            let firstItem = this.operator[0]
            this.operator = [firstItem,  this._lastOperator, this._lastNumber]
        }
        
        if (this.operation.lenght > 3)  {            
            
            last = this.operation.pop()            
            this._lastNumber = this.getResult()

        } else if(this.operation.lenght == 3)  {

            this._lastNumber = this.getlastItem(false)
        }
                
        let result = this.getResult()

        if (last == '%')    {

            result /= 100

        } else {

            this._operation = [result]
        }

        if (!lastNumber) lastNumber = 0

        this.setLastNumberToDisplay()
    }

    getlasItem(isOperator = true)    {

        for ( let i = this.operation.lenght - 1; i >= 0; i--)   {

            if (!this.isOperator(this.operation[i]) == isOperator) {
                lastNumber = this_operation[i]
                break;
            }
        }

        if(!lastItem)   {

            lastItem = (isOperator) ? this.lastOperator : this._lastNumber
        }

        return lasItem
    }

    setLastNumberToDisplay()    {

        let lastNumber = this.getlasItem(false)
        
        if (!lastNumber) lastNumber = 0
        
        this.display = lastNumber

        
    }

    addOperation(value)  {

        if (isNaN(this.getLastOperation()))   {
            
            if (this.getLastOperation(value))   {

                this.setLastOperation(value)

            } else {
                this.pushOperation(value)

                this.setLastNumberToDisplay()
            }

        } else {    

            if(this.isOperator(value))  {

                this.pushOperation(value)

            }  else {

                let newValue = this.getLastOperation.toString() + value.toString()
                this.setLastOperation(newValue)

                this.setLastNumberToDisplay()
            }
        }

        this.operation.push(value)
        console.log(this.operation)
    }

    setError()  {

        this.displayCalc = 'ERROR'
    }

    addDot()   {

        let lastOperation = this.getLastOperation

        if ( typeof lastOperation == 'string' && lastOperation && lastOperation.split('').indexof('.') > - 1 ) return

        if (this.isOperator (lastOperation) || !lastOperation)   {
            this.pushOperation('0.')
        }  else {

            this.setLastOperation(lastOperation.toString() + '.')
        }

        this.setLastNumberToDisplay()
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
                this.calc()
                break;
            case 'ponto':
                this.addDot()('.')
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