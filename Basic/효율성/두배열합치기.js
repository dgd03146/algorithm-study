function solution(arr1, arr2){
 const arr = arr1.concat(arr2)
 return arr.sort()
}

let a = [1,3,5]
let b = [2,3,6,7,9]
console.log(solution(a, b));