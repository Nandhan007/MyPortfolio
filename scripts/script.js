
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

    function sendEmail(){
        const names = document.querySelector('.names').value;
        const emails = document.querySelector('.email').value;
        const messages = document.querySelector('.message').value;
        let parms = {
            name: names,
            email: emails,
            message: messages
        };
        console.log(parms.name+" "+parms.email+" "+parms.message);
        emailjs.send("service_jp525p6","template_3bfa2ft",parms).then(alert("email send successfully"));
    }