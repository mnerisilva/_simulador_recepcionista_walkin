console.log('Working...');


// setup



// loop

const sprite = document.querySelector(".sprite-caminhada img");

var elem = document.getElementById("sprite");

var valorMarginLeft = document.getElementById("valor-margin");

valorMarginLeft.innerText = elem.style.marginLeft;

cssObj = window.getComputedStyle(elem, null);

let intervalo = [,200,400,600,800,1000,1200,1400,1600,1800,2000];



for (i = 1;i < 6; i++){

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
}
console.log('margin-left: '+cssObj.marginLeft);