let arr = [1,2,3,4]

function add(arr){
  count = 0
  for (n in arr) {
    num = Number(n) + 1
    count += num
  }
  return count
}

console.log(add(arr))