var btnsfavs= Array.from(document.querySelectorAll('.coe'))
var btnsdelete= Array.from(document.querySelectorAll('.sup'))
var btnsplus=Array.from(document.querySelectorAll('.plus'))
var btnsmoins=Array.from(document.querySelectorAll('.moins'))
var  products=Array.from(document.querySelectorAll('.cat'))
//console.log(btnsplus);
console.log(btnsfavs);
 for( let btnfav of btnsfavs )
 {
    btnfav.addEventsListner("click", function(){
    if( btnfav.style.backgroundcolor=="black"){
        btnfav.style.color="red"
    }
    else{
        btnfav.style.color=="black"
    }
})

}

for(i in btnsdelete) 
(
btnsdelete[i].addEventsListner("click",function(){
    products[i].remove()
}))

  for(let btnplus of btnsplus)

  {
    btnplus.addEventListener("click",function(){
        btnplus.nextElementSibling.innerHTML++ 
        
    }
    )
}

  for(let btnmoins of btnsmoins)

  {
    btnmoins.addEventListener("click",function(){
        btnmoins.previousElementSibling.innerHTML > 0 ?
        btnmoins.previousElementSibling.innerHTML -- :
        null
    }
    )
}