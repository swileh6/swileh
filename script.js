const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.animate([
{transform:"scale(1)"},
{transform:"scale(1.08)"},
{transform:"scale(1)"}
],{
duration:300
});

});

});