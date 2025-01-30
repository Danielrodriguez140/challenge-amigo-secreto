// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//variables
let ListaAmigos = [];





//FUNCIONES

function condicionesIniciales(){
    ListaAmigos = []
    document.querySelector(".name-list").remove()

}

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value
    
    if(amigo){
        crearLista(amigo)
        cargarAmigos(amigo)
        clearInput()
        console.log(ListaAmigos)
    }else{
        alert("debes colocar un nombre")
    }
  
}

function sortearAmigo(){
    let index = Math.floor(Math.random() * ListaAmigos.length);
    let amigoSorteado = ListaAmigos[index]
    let resultado = document.querySelector(".result-list" )
    let li = document.createElement("li")
    document.querySelector(".name-list").remove();

    li.append(amigoSorteado)
    resultado.append(li)


    
}

function cargarAmigos(amigo){
    let listaNombre= document.querySelector(".name-list")
    
    let li = document.createElement("li")
    li.append(amigo)
        
    listaNombre.append(li)
}

function crearLista(elemento){
    ListaAmigos.push(elemento)
}

function clearInput() {
    document.getElementById("amigo").value = "";
  }



//EJECUCION DE INICIO