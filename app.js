//Creación del Array
let amigos = []

//Función para agregar un amigo
function agregarAmigo(){
    let nuevoAmigo = document.getElementById("amigo");
    let nombreAmigo = nuevoAmigo.value;

    //Validación de que el campo no esté vacío
    if(nombreAmigo == ""){
        alert("Por favor, ingresa un nombre");
        return;
    }
    //Validación de que el amigo no esté repetido
    if(amigos.includes(nombreAmigo)){
        alert("Este amigo ya fue agregado");
        return;
    }
    //Almacenar el amigo en el array
    amigos.push(nombreAmigo);
    console.log(amigos);

    //mostrar la lista de amigos    
    actualizarLista();

    //limpiar el campo
    nuevoAmigo.value = "";      
}


//Función para actualizar la lista de amigos
function actualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    //Limpiar la lista
    listaAmigos.innerHTML = "";
    //Recorrer el array 
    for (let i = 0; i < amigos.length; i++) {
    //Crear un elemento li por cada amigo
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No has agregado amigos, por favor agrega al menos uno");
        return;
    }    
    //Muestra el amigo sorteado
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
    
    //Cambiar el texto del botón
    let botonSortear = document.getElementById("Sortear");
    botonSortear.innerText = "Reiniciar";
    botonSortear.setAttribute("onclick", "reiniciarSorteo()"); // Cambiar la función del botón
}

function reiniciarSorteo() {
    // Limpiar el arreglo de amigos
    amigos = [];
    console.log("El sorteo ha sido reiniciado.");

    // Limpiar la lista de amigos en el DOM
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Limpiar el resultado del sorteo
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    // Cambiar el texto del botón de vuelta a "Sortear Amigo"
    let botonSortear = document.getElementById("Sortear");
    botonSortear.innerText = "Sortear Amigo";
    botonSortear.setAttribute("onclick", "sortearAmigo()"); // Cambiar la función del botón de vuelta
}
