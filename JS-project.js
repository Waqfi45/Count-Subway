
let saveEl = document.getElementById("save-el")
let sumEl = document.getElementById("count")
let sum = 0

function countalbe() {
    sum += 1
    sumEl.innerText = sum
}


function savealbe() {
    saveEl.textContent += sum + " - "
    console.log(sum)
    sum = 0
    sumEl.innerText = 0
}