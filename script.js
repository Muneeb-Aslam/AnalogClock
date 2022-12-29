let datahour = document.querySelector('[data-hour]');
let dataminute = document.querySelector('[data-minute]');
let datasecond = document.querySelector('[data-second]');


function setAttribute(element,style){
    element.style.setProperty('--rotation',style);
}
setInterval(()=>{
    const date = new Date()
    let hour = date.getHours()*30
    let minute = date.getMinutes()*6
    let second = date.getSeconds()*6
    
    setAttribute((datahour),hour+(minute/12))
    setAttribute(dataminute,minute)
    setAttribute(datasecond,second)
});
