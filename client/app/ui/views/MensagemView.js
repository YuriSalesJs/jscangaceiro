class MensagemView{
    constructor(seletor){
        this.elemento = document.querySelector(seletor)
    }
    template(model){
        return model.texto 
        ?`<p class="alert alert-info"> ${model.texto}</p>`
        : `<p></p>`
    }

    update(model){
        this.elemento.innerHTML = this.template(model)
    }
}