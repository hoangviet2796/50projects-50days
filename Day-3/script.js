const bar = document.querySelector('.barWrap')
const close = document.querySelector('.closeWrap')
const para = document.querySelector('.paragraphContainer')
const nav = document.querySelector('.showNav')
const li = document.querySelectorAll('li')


bar.addEventListener('click',() => {
    nav.style.transform = 'rotate(-90deg)'
    para.style.transform = 'rotate(-20deg)'
    li.forEach((n)=> n.style.transform = 'translateX(0)')
})

close.addEventListener('click',() => {
    nav.style.transform = 'none'
    para.style.transform = 'none'
})