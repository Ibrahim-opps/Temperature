let temp=prompt("Enter current temperature in your city");
if(temp<0){
    alert("It's freezing outside");
    console.log("It's freezing outside"); 
}else if(temp<10&&temp>=20){
    alert("Its cold outside");
    console.log("It's cold outside");
}else if(temp<=40&&temp>=30){
    alert("It's hot outside");
    console.log("It's hot outside");
}else if(temp>=50&&temp<60){
    alert("Coldest day in Arizona fr");
    console.log("Coldest day in Arizona fr");
}else if(isNaN(temp)){
    alert("Please enter a valid number");
    console.log("Please enter a valid number");
}else{
    alert("It's a nice day outside");
    console.log("It's a nice day outside");
}if(temp>60){
    console.log("Please enter a valid temperature below 60 degrees");
    alert("Please enter a valid temperature below 60 degrees");
}