
document.addEventListener('click', (e) =>{
    if (document.getElementById('container1').contains(e.target) == true) {
        slidecontent(document.getElementById("flecha1"),document.getElementById('quest-content1'));
    }

    else if (document.getElementById('container2').contains(e.target) == true) {
        slidecontent(document.getElementById("flecha2"),document.getElementById('quest-content2'));
    }

    else if (document.getElementById('container3').contains(e.target) == true) {
        slidecontent(document.getElementById("flecha3"),document.getElementById('quest-content3'));
    }

    else if (document.getElementById('container4').contains(e.target) == true) {
        slidecontent(document.getElementById("flecha4"),document.getElementById('quest-content4'));
    }

    else if (document.getElementById('container5').contains(e.target) == true) {
        slidecontent(document.getElementById("flecha5"),document.getElementById('quest-content5'));
    }

    else if (document.getElementById('container6').contains(e.target) == true) {
        slidecontent(document.getElementById("flecha6"),document.getElementById('quest-content6'));
    }

    else if (document.getElementById('container7').contains(e.target) == true) {
        slidecontent(document.getElementById("flecha7"),document.getElementById('quest-content7'));
    }

    else if (document.getElementById('container8').contains(e.target) == true) {
        slidecontent(document.getElementById("flecha8"),document.getElementById('quest-content8'));
    }

    else if (document.getElementById('container9').contains(e.target) == true) {
        slidecontent(document.getElementById("flecha9"),document.getElementById('quest-content9'));
    }

    else if (document.getElementById('container10').contains(e.target) == true) {
        slidecontent(document.getElementById("flecha10"),document.getElementById('quest-content10'));
    }
});

function slidecontent(arrow,content) {
        if (arrow.classList.contains('spinon') == false && arrow.classList.contains('spinoff') == false){
            arrow.classList.toggle('spinon')
        }

        else if(arrow.classList.contains('spinon') == true && arrow.classList.contains('spinoff') == false){
            arrow.classList.toggle('spinon')
            arrow.classList.toggle('spinoff')
        }

        else if(arrow.classList.contains('spinon') == false && arrow.classList.contains('spinoff') == true){
            arrow.classList.toggle('spinon')
            arrow.classList.toggle('spinoff')
        }
        content.classList.toggle('toggle')
}