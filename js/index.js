const hamburguer = document.getElementById('Hamburguer')
const nav = document.getElementById('Nav')
const main = document.querySelectorAll('.container_margin')
const linksHero = document.querySelectorAll('.hero__link')




hamburguer.addEventListener('click' , ()=>{
    nav.classList.toggle('hero--active')
    main.forEach(m =>{
        m.classList.toggle('active')
    })
})

// ****ADD CLASS ACTIVE TO LINKS HERO ***

for(let i=0 ; i < linksHero.length ; i++ ){
  
    let currentElement = linksHero[i]
    currentElement.addEventListener('click' , ()=>{
        let currentElementActive = document.querySelector('.hero__link--active').dataset.id;
        let idActive = Number(currentElementActive)
        linksHero[idActive - 1].classList.remove('hero__link--active')
        currentElement.classList.add('hero__link--active')
    })
}

const handleActive = (current , active) =>{
        let currentElementActive = linksHero[active]
        currentElementActive.classList.remove('hero__link--active')

            let currentElement = linksHero[current]
            currentElement.classList.add('hero__link--active')
}