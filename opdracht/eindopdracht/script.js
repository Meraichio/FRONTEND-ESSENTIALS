let bezoeker = {
    voornaam : prompt("Wat is je naam?"),
    achternaam : prompt("Wat is je achternaam?"),
    Email : prompt('Wat is je Email'),
    leeftijd : prompt("Wat is je leeftijd?"),
    woonplaats : prompt('Wat is je woonplaats'),
};

console.log('bezoeker')
if (bezoeker.leeftijd==16) {
    document.body.style.backgroundColor = 'orange'
}

if (bezoeker.leeftijd==17) {
    document.body.style.backgroundColor = 'blue'
}

if (bezoeker.leeftijd==18) {
    document.body.style.backgroundColor = 'gold'
}

if (bezoeker.leeftijd==19) {
    document.body.style.backgroundColor = 'green'
}

if (bezoeker.leeftijd==0) {
    document.body.style.backgroundColor = 'purple'
}