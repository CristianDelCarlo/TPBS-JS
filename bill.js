const vboton = document.getElementById('boton');
const micolvalsc = [1200,1400,1000,850,1100,2000,1500,500];
vboton.addEventListener("click",agregarBillete);
function agregarBillete(){
    const vopcionesi = document.querySelector('input[name="flexRadioDefault"]:checked');
    const vopcionese = document.getElementById('opcionese');
    var miColCons = document.getElementsByClassName('estado');
    switch (vopcionese.value) {
        case "Sin Circular":
            valBil=1;
            break;
        case "Excelente":
            valBil=0.6;
            break;    
        case "Muy Bueno":
            valBil=0.3;
            break;
        case "Bueno":
            valBil=0.2;
            break;
        case "Regular":
            valBil=0.1;
            break;
        case "Malo":
            valBil=0.06;
    }
    miColCons[parseInt(vopcionesi.value)].innerText = vopcionese.value;
    var micolval = document.getElementsByClassName('valor');
    var mivalBil = micolvalsc[parseInt(vopcionesi.value)]*valBil;
    micolval[parseInt(vopcionesi.value)].innerText = "$"+mivalBil;
}
