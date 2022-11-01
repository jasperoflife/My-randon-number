const btn = document.querySelector('#generate-Btn');
const number = document.querySelector('#number')

btn.addEventListener('click', ()=>{
    let random = Math.ceil(Math.random() * 10)
    number.textContent = random
})