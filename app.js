const libros ={
    libroUno:{
        titulo: "lo que el viento se llevo (gone with the wind)",
        autor: "desconocido",
        yearPublicacion: 1940,
        descripcion: "Cuenta la historia ..."
    },
    libroDos:{
        titulo: "Malab para ingenieros",
        autor: "Mathworks",
        yearPublicacion: 2022,
        descripcion: "proyectos de simulink"
    },
}

const numeros=[1,2,3,6,7,9,10];

const suma = numeros.reduce((acomulador,valoractual)=>{
    return acomulador+valoractual;
})

console.log(suma);

const sumaDos = numeros.forEach((numeroactual)=>{
    console.log(numeroactual+numeroactual);
})

const books =[libros.libroUno,libros.libroDos];

const manipularobjetos = books.forEach((libros)=>{
    //console.log(libros.descripcion = "HOLA")
    let nuevadescripcion = "hola"
    libros.descripcion= nuevadescripcion;
    console.log(libros);
})

const numerosmap = numeros.map((valor)=>{
    return valor*valor;
})

const nombres =["juan","camilo","pablo"];
console.log(numerosmap);

const manipularnombres = nombres.map((nombre)=>{
    return `${nombre} se unio al juego y su nombre tiene ${nombre.length} letras;`
});

console.log(manipularnombres);

const carronuevo = (model,colores,valores)=>{
    return{
        modelo : model,
        color: colores,
        costo: valores
    }
}

console.log(carronuevo(2013,"Azul",235678900));

class cancion{
    constructor(){
        this.titulo;
        this.autor;
    }
    reproducir(){
        console.log("la cancion esta reproduciendo");
    }
    detenerreproducion(){
        console.log("se detuvo la reproduccion");
    }
}

//herencia
//clase padre
class medios{
    constructor(informacion){
        this.yearPublicacion = informacion.yearPublicacion;
        this.nombre = informacion.nombre;
    }
    informacion(){
        console.log(`añopublicacion: ${this.yearPublicacion}`);
    }
}

//clase hija

class song extends medios{
    constructor(datoscancion){
    super(datoscancion);
    this.artista = datoscancion.artista;
    }
    reproducir (){
        console.log(`artista: ${this.artista} , nombre: ${this.nombre}`);
    }
}

const micancion = new song({
    artista: "anuel",
    nombre: "soldado y profeta",
    yearPublicacion: 1970
});
 
micancion.reproducir();
micancion.informacion();