class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this.tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{

    static ContadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.ContadorRatones;
    }
    get _idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipo: ${this._tipoEntrada}, marca: ${this._marca}`
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados;
    }
}