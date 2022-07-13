// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 200,
});

sr.reveal(`.section-cards, .cards, .section-sobre`, {interval: 400});

sr.reveal(`.section-mscopy, .section-msbot`, {
    origin: 'left',
    distance: '1000px',
    duration: 3000,
    interval: 500,
})

sr.reveal(`.section-criptocopy`, {
    origin: 'right',
    distance: '800px',
    duration: 2000,
    interval: 500,
})
