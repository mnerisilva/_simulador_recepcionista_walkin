console.log('Working...');


// setup



// loop

const sprite = document.querySelector(".sprite-caminhada img");

const sprite_caminhada = document.getElementById("sprite-caminhada");

//var elem = document.getElementById("sprite");
var elem = document.getElementById("sprite-caminhada");

var valorMarginLeft = document.getElementById("valor-margin");

valorMarginLeft.innerText = elem.style.marginLeft;

cssObj = window.getComputedStyle(elem, null);

let intervalo = 800;

//sprite_caminhada.style.left = 1000+"px";

console.log('.... '+cssObj.left);

//let left = sprite_caminhada.style.left;
//let top = sprite_caminhada.style.top;

//console.log(left);
//console.log(top);
let valorLeft = parseInt(cssObj.left);
let valorTop = parseInt(cssObj.top);
let contador1 = 50;
let contador2 = 10;
let loopingSprite = setInterval(() => {
    sprite_caminhada.style.left = valorLeft+contador1+"px";
    sprite_caminhada.style.top = valorTop+contador2+"px";
    contador1 = contador1 + 50;
    contador2 = contador2 + 10;
    if(contador1 > 300){
        clearInterval(loopingSprite);
    }
}, intervalo);

/*for (i = 1;i < 6; i++){

        setTimeout(() => {
            elem.style.marginLeft = -390+"px";
            valorMarginLeft.innerText = elem.style.marginLeft;
        }, intervalo[1]);
        setTimeout(() => {
            elem.style.marginLeft = -780+"px";
            valorMarginLeft.innerText = elem.style.marginLeft;
        }, intervalo[2]);
        setTimeout(() => {
            elem.style.marginLeft = -1164+"px";
            valorMarginLeft.innerText = elem.style.marginLeft;
        }, intervalo[3]);
        setTimeout(() => {
            elem.style.marginLeft = -1170+"px";
            valorMarginLeft.innerText = elem.style.marginLeft;
        }, intervalo[4]);
        setTimeout(() => {
            elem.style.marginLeft = -1560+"px";
            valorMarginLeft.innerText = elem.style.marginLeft;
        }, intervalo[5]);
        setTimeout(() => {
            elem.style.marginLeft = -1950+"px";
            valorMarginLeft.innerText = elem.style.marginLeft;
        }, intervalo[6]);
        setTimeout(() => {
            elem.style.marginLeft = -2340+"px";
            valorMarginLeft.innerText = elem.style.marginLeft;
        }, intervalo[7]);
        setTimeout(() => {
            elem.style.marginLeft = -2730+"px";
            valorMarginLeft.innerText = elem.style.marginLeft;
        }, intervalo[8]);
        setTimeout(() => {
            elem.style.marginLeft = -3120+"px";
            valorMarginLeft.innerText = elem.style.marginLeft;
        }, intervalo[9]);
        setTimeout(() => {
            elem.style.marginLeft = -3510+"px";
            valorMarginLeft.innerText = elem.style.marginLeft;
        }, intervalo[10]);

        console.log(i);
}*/
console.log('margin-left: '+cssObj.marginLeft);
console.log('left: '+cssObj.left);
console.log('top: '+cssObj.top);