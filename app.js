const color  = document.querySelector('.color');


//generar aleatorio
function generarAleatorio(){
    let letras = "ABCDEF0123456789";
    let colo ='#';
    let guarda;

    for(let i = 0; i<6; i++){
        guarda = Math.floor(Math.random()*16);//genera aleatorio los 6
        colo += letras[guarda];//guarda los aleatorios
    }

    return colo;//retornamos color generado
}


color.addEventListener('click', function (){
    let colores = generarAleatorio();
    color.textContent = colores;
    document.body.style.background = colores;
})