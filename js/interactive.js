const btn = document.querySelector('.btn')
const colorChange = document.getElementById('colorChange')
const text = document.getElementById('text')

btn.addEventListener('click', ()=>{
colorChange.style.backgroundColor = "pink"
text.innerHTML = "Double click me to change me back"
})

btn.addEventListener('dblclick', ()=>{
    colorChange.style.backgroundColor = "Lavender"
    text.innerHTML = "Click me!"
})
