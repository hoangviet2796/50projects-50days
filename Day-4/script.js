const ahehe = document.querySelector('.ahehe')
const search = document.querySelector('.search')
const hide = document.querySelector('.hide')
search.addEventListener('click',()=> {
    if(ahehe.classList.contains('hide')) {
        ahehe.classList.remove('hide') 
    } else {
        ahehe.classList.add('hide') 
    }
})

