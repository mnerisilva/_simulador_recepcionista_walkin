console.log('Working...');


document.addEventListener("DOMContentLoaded", function() {

        console.log("carregou!");

        const sprite_caminhada = document.getElementById("sprite-caminhada");

        var elem = document.getElementById("sprite-caminhada");

        var valorMarginLeft = document.getElementById("valor-margin");

        valorMarginLeft.innerText = elem.style.marginLeft;

        cssObj = window.getComputedStyle(elem, null);

        let intervalo = 800;

        //sprite_caminhada.style.left = 1000+"px";

        console.log('.... '+cssObj.left);

        gsap.to("#sprite-caminhada",{
            duration: 5,
            x: 400,
            y: 90,
            ease: "none",
            repeat: 0
        });
        

        //let left = sprite_caminhada.style.left;
        //let top = sprite_caminhada.style.top;

        //console.log(left);
        //console.log(top);
        /*let valorLeft = parseInt(cssObj.left);
        let valorTop = parseInt(cssObj.top);
        let contador1 = 50;
        let contador2 = 10;
        let loopingSprite = setInterval(() => {
            elem.style.left = valorLeft+contador1+"px";
            elem.style.top = valorTop+contador2+"px";
            contador1 = contador1 + 50;
            contador2 = contador2 + 10;
            console.log('valor top: '+elem.style.top);
            console.log('valor left: '+elem.style.left);
            if(contador1 > 300){
                contador1 = 50;
                contador2 = 10;
                clearInterval(loopingSprite);
            }
        }, intervalo);


        console.log('margin-left: '+cssObj.marginLeft);
        console.log('left: '+cssObj.left);
        console.log('top: '+cssObj.top);*/



});