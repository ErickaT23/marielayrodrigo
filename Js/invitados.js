const invitados = [
    { nombre: "Fam. Ovalle Urízar", adultos: 3, ninos: 0 },
    { nombre: "Fam. Girón Ovalle", adultos: 2, ninos: 1 },
    { nombre: "Fam. Santos Oliva", adultos: 2, ninos: 1 },
    { nombre: "Fam. Solorzano Oliva", adultos: 2, ninos: 2 },
    { nombre: "Meliza Oliva", adultos: 2, ninos: 0 },
    { nombre: "Johana Oliva", adultos: 1, ninos: 0 },
    { nombre: "Fam. Urízar Valdéz", adultos: 2, ninos: 3 },
    { nombre: "Fam. Muñoz Urízar", adultos: 2, ninos: 0 },
    { nombre: "Norman Muñoz", adultos: 1, ninos: 0 },
    { nombre: "Fam. Muñoz Quiñonez", adultos: 2, ninos: 2 },
    { nombre: "Fam. Castillo Martínez", adultos: 2, ninos: 0 },
    { nombre: "Maritza Urizar", adultos: 1, ninos: 0 },
    { nombre: "Fam. Castillo Rivera", adultos: 3, ninos: 0 },
    { nombre: "Eslin Reyes", adultos: 2, ninos: 0 },
    { nombre: "Edilia Ovalle", adultos: 1, ninos: 0 },
    { nombre: "Soraya Ovalle", adultos: 1, ninos: 3 },
    { nombre: "Sabrina Ovalle", adultos: 1, ninos: 0 },
    { nombre: "Fam. Ovalle Zacarías", adultos: 2, ninos: 2 },
    { nombre: "Fam. Noriega Ovalle", adultos: 3, ninos: 0 },
    { nombre: "Fam. Muñoz Gereda", adultos: 2, ninos: 0 },
    { nombre: "Monica Muñoz", adultos: 2, ninos: 0 },
    { nombre: "Diego Barrios Alvarado", adultos: 2, ninos: 0 },
    { nombre: "Fam. Barrios Alvarado", adultos: 4, ninos: 0 },
    { nombre: "Ligia Vélez Urízar", adultos: 2, ninos: 0 },
    { nombre: "Ligia Vélez", adultos: 2, ninos: 1 },
    { nombre: "Fam. De Paz Reyes", adultos: 2, ninos: 2 },
    { nombre: "William Ortiz", adultos: 2, ninos: 0 },
    { nombre: "Hipólito Ortíz", adultos: 2, ninos: 0 },
    { nombre: "Alexander Castro", adultos: 2, ninos: 0 },
    { nombre: "Sergio Reyes", adultos: 2, ninos: 0 },
    { nombre: "Ivan Saminez", adultos: 2, ninos: 0 },
    { nombre: "Franki Alonso", adultos: 2, ninos: 0 },
    { nombre: "Victor Uz", adultos: 2, ninos: 0 },
    { nombre: "José Martínez", adultos: 2, ninos: 0 },
    { nombre: "Hugo de Paz", adultos: 2, ninos: 0 },
    { nombre: "Erick Medrano", adultos: 2, ninos: 0 },
    { nombre: "Julio Medrano", adultos: 2, ninos: 0 },
    { nombre: "Michael Gómez", adultos: 2, ninos: 0 },
    { nombre: "Juan Antonio López", adultos: 2, ninos: 0 },
    { nombre: "Enrique Solis", adultos: 2, ninos: 0 },
    { nombre: "Isabel Calderón", adultos: 2, ninos: 0 },
    { nombre: "Nery Ramirez", adultos: 2, ninos: 1 },
    { nombre: "Cleiber Girón", adultos: 2, ninos: 0 },
    { nombre: "Elden Samayoa", adultos: 2, ninos: 2 },
    { nombre: "Roxana Samayoa", adultos: 2, ninos: 0 },
    { nombre: "Charyto Samayoa", adultos: 2, ninos: 2 },
    { nombre: "Cristian Samayoa", adultos: 2, ninos: 2 },
    { nombre: "Fam. Samayoa Muñoz", adultos: 2, ninos: 0 },
    { nombre: "Fam. Ovalle Zapata", adultos: 2, ninos: 2 },
    { nombre: "Skarleth Girón", adultos: 1, ninos: 0 },
    { nombre: "Estuardo Girón", adultos: 1, ninos: 0 },
    { nombre: "Hugo Mayorga", adultos: 1, ninos: 0 },
    { nombre: "Evelyn Mayorga", adultos: 1, ninos: 0 },
    { nombre: "Roselyn Mayorga", adultos: 2, ninos: 0 },
    { nombre: "Arturo Urizar", adultos: 1, ninos: 0 },
    { nombre: "Luis Arturo Urízar", adultos: 2, ninos: 0 },
    { nombre: "Doris Urizar", adultos: 2, ninos: 0 },
    { nombre: "Jaime Carrera", adultos: 2, ninos: 0 },
    { nombre: "Omar Carrera", adultos: 1, ninos: 0 },
    { nombre: "Juan Carlos Carrera", adultos: 2, ninos: 0 },
    { nombre: "Gabriela Carrera", adultos: 2, ninos: 0 },
    { nombre: "Fam. Urizar López", adultos: 2, ninos: 3 },
    { nombre: "Fam. Perez Ramirez", adultos: 2, ninos: 2 },
    { nombre: "Fam. Chicas Morales", adultos: 4, ninos: 0 },
    { nombre: "Mildred Girón", adultos: 3, ninos: 0 },
    { nombre: "Ingrid Zepeta", adultos: 2, ninos: 3 },
    { nombre: "Yasmin Girón", adultos: 2, ninos: 0 },
    { nombre: "Fam. Noriega de la Rosa", adultos: 2, ninos: 0 },
    { nombre: "Fam. Velásquez Tobar", adultos: 4, ninos: 2 },
    { nombre: "Fam. López Sánchez", adultos: 2, ninos: 2 },
    { nombre: "Luis Daniel Pérez", adultos: 1, ninos: 1 },
    { nombre: "Fam. Orellana Gámez", adultos: 4, ninos: 0 },
    { nombre: "Eunice Granados", adultos: 4, ninos: 0 },
    { nombre: "Emilsa Gámez", adultos: 2, ninos: 0 },
    { nombre: "Fam. López Velásquez", adultos: 2, ninos: 1 },
    { nombre: "Fam. Alvarado Samayoa", adultos: 4, ninos: 0 },
    { nombre: "Fam. Rosales Gámez", adultos: 2, ninos: 0 },
    { nombre: "Rolando Oliva", adultos: 1, ninos: 0 },
    { nombre: "Fernando Segura", adultos: 2, ninos: 0 },
    { nombre: "Juan Diego Echeverría", adultos: 2, ninos: 1 },
    { nombre: "Daniel Pérez", adultos: 2, ninos: 0 }
];

export default invitados;

