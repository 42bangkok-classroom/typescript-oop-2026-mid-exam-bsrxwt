// Write your code below
let point = process.argv[2];

let points = Number(point);
if(points<0||points>100||Number.isNaN(points)){
    console.log("Invalid input");
}
if(points>=0&&points<=49){
    console.log("Grade is F");
}else if(points>=50&&points<=59){
    console.log("Grade is D");
}else if(points>=60&&points<=69){
    console.log("Grade is C");
}else if(points>=70&&points<=79){
    console.log("Grade is B");
}else if(points>=70&&points<=79){
    console.log("Grade is A");
}