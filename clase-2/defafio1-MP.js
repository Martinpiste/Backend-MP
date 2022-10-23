
class usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        console.log(this.nombre + ' '+ this.apellido)
    }

    addMascota(nameMascota){
        this.mascotas.push(nameMascota)
    }

    countMascotas(){
        console.log(this.mascotas.length)
    }

    addBook(Libro,Autor){

        this.libros.push({Libro,Autor})
        
    }

    getBookNames(){
       const nombres=this.libros.map((el)=> el.Libro)
       console.log(nombres)
    }
}

let usuario1 = new usuario("Martin","Piste",[{Libro:'Odisea ',Autor:'Homero'},{Libro:'Edipo Rey ',Autor:'Sofocles'}],["Perro","Gato"]);


usuario1.getFullName()
usuario1.addMascota("Loro")
usuario1.countMascotas()
usuario1.addBook('Hamlet ','William Shakespeare')
usuario1.getBookNames()




