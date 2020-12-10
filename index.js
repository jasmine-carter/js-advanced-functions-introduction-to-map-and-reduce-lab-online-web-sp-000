// Your code here
function mapToNegativize(sourceArray) {
  let newArray = []
  for (const element of sourceArray) {
    if (Math.sign(element) === 1) {
    newArray.push(-Math.abs(element))
    }
    else
    newArray.push(Math.abs(element))
  }
  return newArray
}
