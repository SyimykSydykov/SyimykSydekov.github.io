let name2 = 0
function ibrofun(){
    let name1 = document.getElementById("id1")
    name1.className = "circle"
    function printNumber(from, to){
        let current = from;
    
    setTimeout(function go(){
        document.getElementById("id5").innerHTML=current
        if(current > to){
            setTimeout(go, 1000)
        }
        current--;
        if(current < 0){
            document.getElementById("id1").style.display="none";
            alert("ваш счёт " + name2 + " за 60 секунд");
        }
        
            
        
    },1000);
   
}    printNumber(60, 0);

}
let arr1 =[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
]
let name6 = [
    "red",
    "yellow",
    "green",
    "orange",
    "blue",
    "violet",
    "aqua",
    "darkgoldenrod",
    "chartreuse",
    "tan",
]
function ibrofun2(){
        name2++
        let num=document.getElementById("id4").innerHTML=name2
        let name1 =Math.floor(Math.random()*680) 
        let name4 =Math.floor(Math.random()*1100) 
        
        let name5=name1+"px"
        let name3=name4+"px"
        
        
        
        document.getElementById("id1").style.marginTop=name5
        document.getElementById("id1").style.marginLeft=name3
        let name7= name6[Math.floor(Math.random()*10)]
        document.getElementById("id1").style.background=name7
            
        let name8 = Math.floor(Math.random()*100)
        let name9 = Math.floor(Math.random()*100)
        let name10 = name8 +"px"
        let name11 = name8 +"px"
        

        if (name8 > 20) {
            
            document.getElementById("id1").style.width=name10
            document.getElementById("id1").style.height=name11

        }
       
     
        
        

          
    
        
        

    }