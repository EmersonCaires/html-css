let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('.ul li')
let list = container.querySelector('.list')


let active = 0
let firstPosition = 0
let lastPosition = items.length - 1 


function setSlider(){
    let itmOld = container.querySelector('.list .item.active')
    itmOld.classList.remove('active')
    
    let dotsOld = indicator.querySelector('ul li.active')
    if (dotsOld) {
      dotsOld.classList.remove('active')
    }
        
        indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
} 

prevButton.onclick = () => {
   list.style.setProperty('--calculation', -1)
   active = active - 1 < firstPosition ? lastPosition : active - 1
   setSlider()
   items[active].classList.add('active')

 
}