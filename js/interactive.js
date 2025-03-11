const btn = document.querySelector('.btn')
const colorChange = document.getElementById('colorChange')
const text = document.getElementById('text')
const body = document.getElementById('body')

btn.addEventListener('click', ()=>{
body.style.backgroundColor = "pink"
text.innerHTML = "Double click me to change me back"
})

btn.addEventListener('dblclick', ()=>{
    body.style.backgroundColor = "Lavender"
    text.innerHTML = "Click me!"
})
