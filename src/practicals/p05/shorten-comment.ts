const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string): string {
  // Write your code below
  let count:number =0;
  for(let i = 0;i<comment.length;i++){
    if(comment[i]!==" "){
      count += 1;
      if(count)
    }
  }
}