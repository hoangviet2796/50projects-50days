const count = document.querySelector('.count')
const img = document.querySelector('.image')

let number = 0

let setinterval = setInterval(blurry,50);

function blurry() {
    number++
    count.textContent = number + '%'
    img.style.filter = `blur(${100 - number}px)`
    count.style.opacity = `${1 -(number/100)}`
    if(number > 99) {
        clearInterval(setinterval)
    }
}

