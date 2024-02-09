class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(fechaRegistro){
        this._ideCliente = ++Cliente.contadorClientes;
        this._fechaRegristro = fechaRegistro;
    }
    get idCliente(){
        return this._ideCliente;
    }
    get fechaRegistro(){
        return this._fechaRegristro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegristro = fechaRegistro;
    }
    toString(){
        return `${super.toString()} ${this._ideCliente} ${this._fechaRegristro}`;
    }
}