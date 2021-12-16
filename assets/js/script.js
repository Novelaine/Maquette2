/* Cette fois ça fonctionne ^^ */
var menu = document.getElementsByTagName('img')[1];
console.log(menu);
var nav = document.getElementsByTagName('nav')[0];
console.log(nav);

function ouvreMenu() {
    console.log('la fonction demarre !')

    if( nav.style.visibility == 'visible'){
        nav.style.visibility = 'hidden';
        menu.src = 'assets/img/burger.png';
    }else{
        nav.style.visibility = 'visible';
        menu.src = 'assets/img/close.png';
    }

}

/* pour que le label ne soit plus en position 'absolute' au click de l'input*/
var input = document.getElementsByTagName('input');
console.log(input);
var label = document.getElementsByTagName('label');
console.log(label);

input[0].addEventListener('click', position);
input[1].addEventListener('click', position);
input[2].addEventListener('click', position);


function position() {
    console.log('click');

    label[0].style.position = 'relative';
    label[1].style.position = 'relative';
    label[2].style.position = 'relative';

}