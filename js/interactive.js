const btn = document.querySelector('.btn')
const colorChange = document.getElementById('colorChange')



btn.addEventListener('click', ()=>{
colorChange.style.backgroundColor = "pink"
colorChange.innerHTML = "Double click me to change me back"
})

btn.addEventListener('dblclick', ()=>{
    colorChange.style.backgroundColor = "Lavender"

})
