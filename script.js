//on recupere notre div square
let square = document.getElementById('square');

//on va définir le style du carré
//width :100px
square.style.width = '100px';
//height : 100px
square.style.height = '100px';
//background-color : red
square.style.backgroundColor = 'red';
//position : absolute
square.style.position = 'absolute';
//line-height : 100px
square.style.lineHeight = '100px';
square.style.textAlign = 'center';
//text-align : center
square.style.cursor = 'pointer';
square.innerText = 'Clique moi !'
//text => clique moi !

//fonction pour générer un nombre aléatoire entre un min et un max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function pour deplacer le carré a une position aleatoire
function moveSquare() {
    //largeur de l'ecran - largeur du carré
    let screenWidht = window.innerWidth - 100;
    //hauteur de l'ecran - hauteur du carré
    let screenHeight = window.innerHeight - 100;
    //determiner une largeur aléatoire par rapport à l'ecran
    let newLeft = getRandomNumber(0, screenWidht);
    //determiner une hauteur aléatoire par rapport a l'écran
    let newTop = getRandomNumber(0, screenHeight);

    //on donne les valeurs de top et de left a notre carré
    square.style.left = newLeft + 'px';
    square.style.top = newTop + 'px';
}

//on crée l'evenement pour deplacer le carré
square.addEventListener('mouseover', () => {
    setTimeout(moveSquare, 200);
})

//on ajoute un evenement click pour afficher une alerte avec Bravo
square.addEventListener('click', () => {
    alert('Bravo');
})