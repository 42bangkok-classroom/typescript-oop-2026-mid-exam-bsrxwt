export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  for(let i = 0;i<arr1.length;i++){
    let result  = ""
    for(let j=0;j<arr2.length;j++){
      if(arr1[i]!==arr2[j]){
        result += arr2[j]
      }
    }
  }
}
console.log(getUniqueNumbers)
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];