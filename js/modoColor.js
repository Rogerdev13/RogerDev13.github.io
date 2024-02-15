const preferColor = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');


slider.addEventListener('click' , ()=>{
    if(localStorage.getItem('theme') === 'dark'){
        handleTheme('light')
    }else{
        handleTheme('dark')
    }
})


const handleTheme = (themevalue) =>{
    document.documentElement.setAttribute('data-theme' , themevalue)
    localStorage.setItem('theme' , themevalue);
}

handleTheme(localStorage.getItem('theme') || preferColor);
