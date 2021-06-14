console.log('Working...');


// setup



// loop

const sprite = document.querySelector(".sprite-caminhada img");

var elem = document.getElementById("sprite");

var valorMarginLeft = document.getElementById("valor-margin");

valorMarginLeft.innerText = elem.style.marginLeft;

cssObj = window.getComputedStyle(elem, null);



setTimeout(() => {
    elem.style.marginLeft = -390+"px";
    valorMarginLeft.innerText = elem.style.marginLeft;
}, 1000);
setTimeout(() => {
    elem.style.marginLeft = -780+"px";
    valorMarginLeft.innerText = elem.style.marginLeft;
}, 2000);
setTimeout(() => {
    elem.style.marginLeft = -1164+"px";
    valorMarginLeft.innerText = elem.style.marginLeft;
}, 3000);
setTimeout(() => {
    elem.style.marginLeft = -1170+"px";
    valorMarginLeft.innerText = elem.style.marginLeft;
}, 4000);
setTimeout(() => {
    elem.style.marginLeft = -1560+"px";
    valorMarginLeft.innerText = elem.style.marginLeft;
}, 5000);
setTimeout(() => {
    elem.style.marginLeft = -1950+"px";
    valorMarginLeft.innerText = elem.style.marginLeft;
}, 6000);
setTimeout(() => {
    elem.style.marginLeft = -2340+"px";
    valorMarginLeft.innerText = elem.style.marginLeft;
}, 7000);
setTimeout(() => {
    elem.style.marginLeft = -2730+"px";
    valorMarginLeft.innerText = elem.style.marginLeft;
}, 8000);
setTimeout(() => {
    elem.style.marginLeft = -3120+"px";
    valorMarginLeft.innerText = elem.style.marginLeft;
}, 9000);
setTimeout(() => {
    elem.style.marginLeft = -3510+"px";
    valorMarginLeft.innerText = elem.style.marginLeft;
}, 10000);


/*for (i = 1;i = 11; i++){

}*/
console.log('margin-left: '+cssObj.marginLeft);