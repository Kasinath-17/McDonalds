window.addEventListener('scroll',()=>{
    let content = document.querySelector('first-heading');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.7;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
})