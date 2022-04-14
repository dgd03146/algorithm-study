function solution(arr1, arr2){
  let p=0, q=0;
  let answer=[];

  a.sort((a, b) => a-b)
  b.sort((a, b) => a-b)
  while(p < arr1.length && q < arr2.length){
    if(arr1[p] === arr2[q]){
      answer.push(arr1[p++])
      q++
    }
    else if(arr1[p] < arr2[q]){ 
      p++
    }
    else{
      q++
    }
  }
  
 

  return answer;  

}

let a = [1,3,10,5,2]
let b = [3,2,5,7,8]
console.log(solution(a, b));