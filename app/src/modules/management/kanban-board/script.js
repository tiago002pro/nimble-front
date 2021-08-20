function log(message) {
    console.log(">" + message)
}

const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    log("CARD: START DRAGGING");
}

function drag() {
    log("CARD: IS DRAGGING");
    
}

function dragend() {
    log("CARD: STOP DRAGGING");
    
}