let BaseDeDatosFalsa = [
    {
        id: 'a',
        nombre: "Juan",
        apellido: "Perez",
        edad: 66,
        profesion: "Ing Mecanico"
    },
    {
        id: 2,
        nombre: "Sofía",
        apellido: "Rodríguez",
        edad: 22,
        profesion: "Lic Marketing Digital"
    },
    {
        id: 3,
        nombre: "Mariana",
        apellido: "García",
        edad: 33,
        profesion: "Ing Sistemas Computacionales"
    },
    {
        id: 4,
        nombre: null,
        apellido: "Martínez",
        edad: 18,
        profesion: "Ing Industrial"
    },
    {
        id: 5,
        nombre: "Valentina",
        apellido: "Gómez",
        edad: 26,
        profesion: "Lic Derecho"
    },
    {
        id: 6,
        nombre: "Alejandro",
        apellido: "Flores",
        edad: 17,
    }
];

class PropiedadNoExisteError extends Error {
    constructor(propiedad) {
        super(`La propiedad '${propiedad}' no existe.`);
        this.name = 'PropiedadNoExisteError';
    }
}

class NullEnNombreError extends Error {
    constructor() {
        super('El nombre contiene un valor null.');
        this.name = 'NullEnNombreError';
    }
}

class IdNoEsNumeroError extends Error {
    constructor() {
        super('El ID no es un número.');
        this.name = 'IdNoEsNumeroError';
    }
}

function consultarPropiedad() {
    const propiedad = document.getElementById("property").value.trim();
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = '';

    try {
        if (isNaN(propiedad)) {
            throw new IdNoEsNumeroError();
        }
        
        const id = parseInt(propiedad); // Convertir a número
        
        let propieda = BaseDeDatosFalsa.find(prop => prop.id === id);

        if (!propieda) {
            throw new PropiedadNoExisteError('id');
        }
        if (propieda.nombre === null) {
            throw new NullEnNombreError();
        }

        let propiedainfo = `
            <p><strong>ID:</strong> ${propieda.id}</p>
            <p><strong>Nombre:</strong> ${propieda.nombre}</p>
            <p><strong>Apellido:</strong> ${propieda.apellido}</p>
            <p><strong>Edad:</strong> ${propieda.edad}</p>
            <p><strong>Profesión:</strong> ${propieda.profesion ? propieda.profesion : 'No especificado'}</p>
            `;
        outputDiv.innerHTML = propiedainfo;
    } catch (error) {
        outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}