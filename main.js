let counter, btnAdd,guestcost;
let n;
let guestcostN = 10;
 
function addCount(){
    n++;
    counter.innerHTML =  n 
}
 
window.addEventListener("load", ()=>{
    // 起動時の処理
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    guestcost = document.getElementById("guestcost");
    n = 0;
 
    btnAdd.addEventListener("click", addCount);

});

function guest(){
          
          let Nn = Number(counter.innerText);
          if(Nn > guestcostN || Nn == guestcostN ){
           n = n - guestcostN;
           counter.innerHTML =  n ;
           let statusScript = function(){
           n++;
           counter.innerHTML =  n;
       
};
   setInterval(statusScript, 10000);
  guestcostN = Math.round(guestcostN * 1.5);
        guestcost.innerHTML =  guestcostN;
} else if (guestcostN > Nn){alert("ゲストを増やすための部屋が足りません！");};
};

        
