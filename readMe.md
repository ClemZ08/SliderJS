# Slider photo

Vous disposez d'un tableau contenant le nom de photos et leur description

```js
const images = [
    { src: 'images/1.jpg', title: 'A link to the Past' },
    { src: 'images/2.jpg', title: 'Twilight princess' },
    { src: 'images/3.jpg', title: 'Skyward Sword' },
    { src: 'images/4.jpg', title: 'WindWaker' },
    { src: 'images/5.jpg', title: 'Breath of the wild' },
    { src: 'images/6.jpg', title: 'Link\'s awakening' },
];

```

Vous devez créer une classe `Slider` qui reçoit ce tableau.

A la contruction du slider vous devez précisez :

- les photos
- la zone HTML dans lequel le slider est placé
- éventuellement une taille pour le slider en Px ou %

```js
const params = {
    images: images,
    area: 'div.slider', //Selecteur CSS
    width:'100%', //optionel
    height:'100%' //optionel
}

const slider = new Slider(params);
```

Le slider est créé automatiquement dans cette zone et affiche la première photo.
2 boutons sont créés :

- suivant 
- précédent

Chaque bouton a une méthode associée dans la classe et permet de passer à l'image suivante ou précédente (next et previous).