let count = 0
let arr1 = []
let arr2 = [
    "red",
    "yellow",
    "green",
    "purple",
    "blue",
    "agua",
    "tan",
    "orange",
    "Black",
]

function myfunction1(){
    let name1 = document.getElementById("id3");
    name1.className = "Akto"
function printNumber(from,to){
    let current=from;
     setTimeout(function go(){
        document.getElementById("id10").innerHTML=current
    if(current > to){
        setTimeout(go,1000);


    }
    current--;
    if(current<0){
        document.getElementById("id3").style.display="none";
        alert("Ваше очко: " + count)
        
    }


},1000);
}

printNumber(60,0)
}






function myfunction2(){  
    count++
    document.getElementById("id4").innerHTML = count

    let name3 = Math.floor(Math.random()*700)
    let name4 = Math.floor(Math.random()*700)
    let name7 = name3+"px"
    let name8 = name4+"px"
    document.getElementById("id3").style.marginTop = name7
    document.getElementById("id3").style.marginLeft = name8

    let name6 = Math.floor(Math.random()*8)
    let name9 = arr2[name6]
    document.getElementById("id3").style.backgroundColor = name9

    let name10 = Math.floor(Math.random()*100)
    let name11 = name10+"px"
    if(name10>20){
        document.getElementById("id3").style.width = name11
        document.getElementById("id3").style.height = name11
    }
}
