// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//variables
let ListaAmigos = [];
let añadir = document.querySelector(".input-name")
let reinicia = document.getElementById("button-draw-reinicio")


//eventos

añadir.addEventListener("keydown", (e)=>{
    if(e.code == "Enter") agregarAmigo();
});


//FUNCIONES

function condicionesIniciales(){
    ListaAmigos = [];
    document.querySelector(".result-list" ).innerHTML = "";
    reinicia.setAttribute("disabled", true);

}

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value

    
    if(amigo){
        addLista(amigo)
        clearInput()
        console.log(ListaAmigos)
    }else{
        alert("debes colocar un nombre")
    }
  
}

function sortearAmigo(){
    let index = Math.floor(Math.random() * ListaAmigos.length);
    let amigoSorteado = ListaAmigos[index]
    
   document.querySelector(".name-list").innerHTML = ''

   crearTagLi(amigoSorteado,".result-list")

    

    

    reinicia.removeAttribute("disabled")


    
}


function addLista(elemento){
    
    if(ListaAmigos.includes(elemento)){
        clearInput()
        return alert("este nombre ya existe");
    }else{
        ListaAmigos.push(elemento)
        crearTagLi(elemento,".name-list")
        return ListaAmigos
    }
}

function clearInput() {
    document.getElementById("amigo").value = "";
};

function asiganarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

//crea la lista de amigos
function crearTagLi(texto,clase){
    let ul = document.querySelector(clase);

    let li = document.createElement("li")
    li.append(texto)

    return ul.append(li)

}





//EJECUCION DE INICIO