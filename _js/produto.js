/*filtros da página produto*/

function exibir_categoria(categoria){


    let elementos = document.getElementsByClassName('geral');
    //console.log(elementos);
    for(var i= 0; i < elementos.length; i++){
        console.log(elementos[i].id);
        if(categoria == elementos[i].id)
        elementos[i].style = "display: inline-block";
        else
        elementos[i].style ="display: none";
    
    }
};
 
let exibir_todos = () => {
    let elementos = document.getElementsByClassName('geral');
    
    for(var i= 0; i < elementos.length; i++){
        elementos[i].style = "display: inline-block";
        
    }



};



/*função para trocar a imagem ao passar o mouse em cima e ao retirar, retorna a original*/
function trocarImagem1() {
    window.document.getElementById("id1").src ="_img/ps52.webp";
}
function imagemAnterior1(){
    window.document.getElementById("id1").src = "_img/ps5.webp"
}


function trocarImagem2(){
    window.document.getElementById("id2").src = "_img/HeadsetPulse3d2.webp";

}
function imagemAnterior2(){
    window.document.getElementById("id2").src = "_img/HeadsetPulse3d.webp";
}


function trocarImagem3(){
    window.document.getElementById("id3").src = "_img/ps42.jpg"    
}
function imagemAnterior3(){
    window.document.getElementById("id3").src = "_img/ps4.png"
}
function trocarImagem4(){
    window.document.getElementById("id4").src = "_img/ps5.webp"    
}
function imagemAnterior4(){
    window.document.getElementById("id4").src = "_img/controleDualSense.jpg"
}
function trocarImagem5(){
    window.document.getElementById("id5").src ="_img/xboxOne2.jpg"
}
function imagemAnterior5(){
    window.document.getElementById("id5").src ="_img/xboxOne.webp"
}

function trocarImagem6(){
    window.document.getElementById("id6").src ="_img/bk2.jpg"
}
function imagemAnterior6(){
    window.document.getElementById("id6").src ="_img/blackclover14.jpg"
}
function trocarImagem7(){
    window.document.getElementById("id7").src ="_img/nintendoSwitch32gb2.webp"
}
function imagemAnterior7(){
    window.document.getElementById("id7").src ="_img/nintendoSwitch32gb.webp"
}
function trocarImagem8(){
    window.document.getElementById("id8").src ="_img/xboxOneX4k2.webp"
}
function imagemAnterior8(){
    window.document.getElementById("id8").src ="_img/xboxOneX4k.webp"
}
function trocarImagem9(){
    window.document.getElementById("id9").src ="_img/bleach2.jpg"
}
function imagemAnterior9(){
    window.document.getElementById("id9").src ="_img/bleach72.jpg"
}
function trocarImagem10(){
    window.document.getElementById("id10").src ="_img/dgrayman2.jpg"
}
function imagemAnterior10(){
    window.document.getElementById("id10").src ="_img/dgrayman26.jpg"
}
function trocarImagem11(){
    window.document.getElementById("id11").src ="_img/tokyoghoul2.jpg"
}
function imagemAnterior11(){
    window.document.getElementById("id11").src ="_img/tokyoghoul4.jpg"
}
function trocarImagem12(){
    window.document.getElementById("id12").src ="_img/theirregularatmagicscholl2.jpg"
}
function imagemAnterior12(){
    window.document.getElementById("id12").src ="_img/theirregularatmagicscholl04.jpg"
}

