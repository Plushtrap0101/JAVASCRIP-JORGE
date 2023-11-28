function agregarImg(){
    let contador = 0;
    while(contador < 20){
    
    let imagen =`juego${contador}.jpg`;
    let contenedor = document.getElementById(`${contador}`);
    contenedor.insertAdjacentHTML("beforeend",`<img src=${imagen} alt=${imagen} class="imgBody">`)
    contador++;
    }
}
function eliminarImg(){
    for(let i = 0; <= 20; i++){
        let delete=document.getElementById(`${contador}`);
        delete.remove();
        cont = 1;
    }
}
