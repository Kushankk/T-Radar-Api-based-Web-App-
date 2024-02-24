function animateMenu(){
const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });
}

function myBar(){
    
    document.getElementById("item2").style.display="none";
    document.getElementById("item3").style.display="none";
    document.getElementById("item4").style.display="inline";
    document.getElementById("item1").innerHTML="Enter A stock Name";
    document.getElementById("item1").style.cursor="default";
    document.getElementById("item1").style.color="#6ECCAF";
    document.getElementById("menu").style.alignItems="flex-start";
    document.getElementById("menu").style.marginLeft="21%";
    document.getElementById("menu").style.paddingTop="10%";
    document.getElementById("formm").style.display="block";
    document.getElementById("item1").style.margin="2rem";
    document.getElementById("item4").style.margin="2rem";
    document.getElementById("heading").style.display="none";
    document.getElementById("menu-items").style.paddingLeft="28%";
    
  
    


    

}
function cont(){
  let str1=document.getElementById("item3").innerHTML;
  
  if(str1=="Contact Us"){
    document.getElementById("item3").
    innerHTML="KushankVirdi@outlook.com";
    document.getElementById("item3").style.fontSize="4rem";

  }
  
  if(str1=="KushankVirdi@outlook.com"){
    document.getElementById("item3").innerHTML="Contact Us";
    document.getElementById("item3").style.fontSize="5rem";

  }
}

function use(){
  let str1=document.getElementById("item2").innerHTML;
  if(str1=="How To Use?"){
    document.getElementById("item2").
    innerHTML="Refer To Project Description on brightspace";
    document.getElementById("item2").style.fontSize="2rem";

  }
  
  if(str1=="Refer To Project Description on brightspace"){
    document.getElementById("item2").innerHTML="How To Use?";
    document.getElementById("item2").style.fontSize="5rem";
}
}

function getStock(prc){
  let st =document.getElementById("textbox").value;
  document.getElementById("item1").style.display="none";
  document.getElementById("heading").style.display="none";
  document.getElementById("textbox").style.display="none";
  document.getElementById("button").style.display="none";
  document.getElementById("item4").style.display="none";
  document.getElementById("stname").innerHTML=st+" Latest Stock Price: $" + prc ;
  
  document.getElementById("graphh").style.display="block";
  document.getElementById("stname1").style.display="block";
  
  
  
  

}

dates_list= ["2022-01-31","2022-02-28","2022-03-31","2022-04-29","2022-05-31","2022-06-30","2022-07-29","2022-08-31","2022-09-30","2022-10-31"]
month_list = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]
prices= []


function apipull(){
var stk = document.getElementById("textbox").value;
getStock()
let url='https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='+stk+'&interval=5min&apikey=JV5ZS93P2B0P69UX';
fetch(url)
.then(res=>res.json())
.then((data)=>{
  var prc = data["Monthly Time Series"]["2022-10-31"]["1. open"]
  getStock(prc)
  console.log(data)
  
  for(i=0;i<10;i++){
    
    var p = data["Monthly Time Series"][dates_list[i]]["4. close"]
    prices.push(p)
    

  }
  make_charts(prices,month_list)
  
  
  



})
.catch(error=>alert("Stock not Available, try another stock"))}

function make_charts(data_list,dates_list){

  const ctx = document.getElementById('canvi');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates_list,
      datasets: [{
        label: 'Price of Stock for Past Year',
        data: data_list,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
