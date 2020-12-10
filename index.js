// Your code here
function mapToNegativize(sourceArray) {
  let newArray = []
  for (const element of sourceArray) {
    newArray.push(-Math.abs(element))
  }
  newArray
}
