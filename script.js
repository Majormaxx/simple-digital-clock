
let clock = document.getElementById('myclock');

setInterval(()=>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
});