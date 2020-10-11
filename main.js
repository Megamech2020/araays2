a=[];
function submit(){
var display=[];

for(var j=1;j<=4;j++){
    var name=document.getElementById("name_of_the_student_"+j).value;
    console.log(name);
    a.push(name);

}
console.log(a);
var l=a.length;
console.log(l);
for(var k=0;k<l;k++){
    display.push("<h4>Name-  "+a[k]+"</h4>");
    console.log(display);

}
console.log(display);
document.getElementById("display_name_with_commas").innerHTML=display;

var r=display.join(" ");
console.log(r);
document.getElementById("display_name_without_commas").innerHTML=r;

document.getElementById("submit_button").style.display = "none";
 document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    a.sort();
    console.log(a);
    var display1=[];

    var l=a.length;
console.log(l);
for(var k=0;k<l;k++){
    display1.push("<h4>Name-  "+a[k]+"</h4>");
    console.log(display1);

}
console.log(display1);
document.getElementById("display_name_with_commas").innerHTML=display1;

var r1=display1.join(" ");
console.log(r1);
document.getElementById("display_name_without_commas").innerHTML=r1;
}