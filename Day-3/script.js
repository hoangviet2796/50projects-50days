const bar = document.querySelector('.bar')
const close = document.querySelector('.close')
const para = document.querySelector('.paragraphContainer')
const nav = document.querySelector('.showNav')


bar.addEventListener('click',() => {
    nav.style.transform = 'rotate(-90deg)'
    para.style.transform = 'rotate(-20deg)'
})

close.addEventListener('click',() => {
    nav.style.transform = 'none'
    para.style.transform = 'none'
})