const btnEl = document.getElementById("btn")
const feedEls = document.querySelectorAll(".rating")
let selectedFeed = ""
const containEl = document.getElementById("container")

feedEls.forEach((feedEl) => {
    feedEl.addEventListener ("click", (event) => {
        remover()
        selectedFeed = event.target.innerText || event.target.parentNode.innerText 
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })
})

btnEl.addEventListener ("click", () => {
    if(selectedFeed !== "") {
        containEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedFeed}</strong>
        <br>
        <br>
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
})

function remover(){
    feedEls.forEach((feedEl) => {
        feedEl.classList.remove("active")
    }) 
}