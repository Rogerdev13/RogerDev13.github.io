const  projects = document.querySelectorAll('.article__project')
const start = document.getElementById('start')
const contact = document.getElementById('Contact')




const cargarElement1 = (o , e) =>{
    let currentElementActive = document.querySelector('.hero__link--active').dataset.id;
    o.forEach(element => {
        if(element.isIntersecting){
            let activeNow = Number(currentElementActive) -1
            handleActive(0 , activeNow )
           
        }
    })
} 

const cargarElement2 = (o , e) =>{
    let currentElementActive = document.querySelector('.hero__link--active').dataset.id;
    
    o.forEach(element => {   
        if(element.isIntersecting){
            let activeNow = Number(currentElementActive) - 1
            element.target.classList.add("show_elements")
            handleActive(1 , activeNow )
        }
    })
}   



const cargarElement3 = (o , e) =>{
    let currentElementActive = document.querySelector('.hero__link--active').dataset.id;
    o.forEach(element => {
        if(element.isIntersecting){
            
            let activeNow = Number(currentElementActive) -1
            handleActive(2 , activeNow )
        }
    })
} 



const toad1 = new IntersectionObserver(cargarElement1 , {
    root:null,
    rootMargin: '0px 0px 0px 0px' ,
    threshold : 1.0
})


const toad2 = new IntersectionObserver(cargarElement2 , {
    root:null,
    rootMargin: '0px 0px 0px 0px' ,
    threshold : 1.0
})

const toad3 = new IntersectionObserver(cargarElement3 , {
    root:null,
    rootMargin: '0px 0px 0px 0px' ,
    threshold : 1.0
})


toad1.observe(start)

projects.forEach(project =>{
    toad2.observe(project)
})

toad3.observe(contact)