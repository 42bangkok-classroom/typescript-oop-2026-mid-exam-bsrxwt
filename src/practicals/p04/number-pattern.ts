// Write your code below
let nums = Number(process.argv[2]);
if(nums<0||Number.isNaN(nums)){
    process.exit;
}

for(let row = nums;row>=1;row--){
    let result = "";
    for (let j = 0; j < row-1; j++)
        {
            result += " ";
        }
    for(let co = nums-row+1;co>0;co--){
        result += co;
    }
    console.log(result);
}
