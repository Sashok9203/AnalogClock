//Task 1
const  myWindow = window.open("", "", "width=410, height=410");
setTimeout(()=>{myWindow.resizeTo(500,500);},2000);
setTimeout(()=>{myWindow.moveTo(200,200);},4000);
setTimeout(()=>{myWindow.close();},6000);

//Task 2
const h_arrow = document.getElementById("h_arrow");
const m_arrow = document.getElementById("m_arrow");
const s_arrow = document.getElementById("s_arrow");

setInterval(()=>{
    var date = new Date(Date.now());
    h_arrow.style.transform= `rotate(${date.getHours()*30}deg)`;
    m_arrow.style.transform= `rotate(${date.getMinutes()*6}deg)`;
    s_arrow.style.transform= `rotate(${date.getSeconds()*6}deg)`;
},1000);




