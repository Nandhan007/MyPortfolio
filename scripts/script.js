
document.addEventListener('DOMContentLoaded',()=>{
    const block=document.querySelector('.nav-toggler');
    const links=document.querySelector('.sidelinks');
    const overlay=document.querySelector('.navoverlay');
    const remove = document.querySelector('.remove');
    const link = document.querySelector('.navdirect');
    block.addEventListener('click',()=>{
        links.classList.add('open');
        overlay.classList.add('open');
    })
    overlay.addEventListener('click',()=>{
        links.classList.remove('open');
        overlay.classList.remove('open');
    })
    remove.addEventListener('click',()=>{
        links.classList.remove('open');
        overlay.classList.remove('open');
    })
    link.addEventListener('click',()=>{
        links.classList.remove('open');
        overlay.classList.remove('open');
    })
    })