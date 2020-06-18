class Util  {       // static pois consigo chamar o metodo *dataFormat* diretamente pelo nome da classe sem instancia la

    static dataFormat(date)    { // classe statica, metodo para formatar as datas fo formulario

        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()+date.getHours()+':'+ date.getMinutes()
    }
}