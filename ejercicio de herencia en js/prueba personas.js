class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}
class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString() + ' ' + this._idEmpleado + ' ' + this._sueldo;
    }
}
class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
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
//prueba clase persona
let persona1 = new Persona('lucas', 'cabrera', 25);
console.log(persona1.toString());
let persona2 = new Persona('lucia', 'cabrera', 22);
console.log(persona2.toString());
let empleado1 = new Empleado('alicia', 'cabrera', 50, 5000);
console.log(empleado1.toString());
let empleado2 = new Empleado('maria', 'cabrera', 22, 3500);
console.log(empleado2.toString());
let cliente1 = new Cliente('paulina', 'cabrera', 1, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente('jonathan', 'cabrera', 8, new Date());
console.log(cliente2.toString());
