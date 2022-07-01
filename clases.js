class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`)
    }

    addBook() {
        const e = {"libro":this.libros,"autor":"J. K. Rowling"};
        return e;
    }

    getBookName() {
       const r =  p.addBook();
       console.log(r);
    }

    addMascota(a) {
        const array = ['Gato'];
        array.push(a);
        console.log(`${this.nombre} tiene ${array.length} mascotas`);
    }
}



const p = new Usuario("Juan", "Perez", "Harry Potter", "Perro");
console.log(p);
p.addMascota(p.mascotas)
p.getFullName();
p.addBook();
p.getBookName();