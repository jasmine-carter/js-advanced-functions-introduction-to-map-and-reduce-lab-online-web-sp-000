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
};

function mapToNoChange(sourceArray) {
  let newArray = sourceArray
  return newArray
};

function mapToDouble(sourceArray) {
  let newArray = []
  for (const element of sourceArray) {
    newArray.push(element * 2)
  }
  return newArray
};

function mapToSquare(sourceArray) {
  let newArray = []
  for (const element of sourceArray) {
    newArray.push(element * element)
  }
  return newArray
};

function reduceToTotal(sourceArray, startingPoint=0) {
  let finalValue = 0
    for (const element of sourceArray) {
      finalValue += element
      console.log(finalValue)
  }
  return finalValue + startingPoint
};

function reduceToAllTrue(sourceArray) {
  for (const element of sourceArray) {
    if (!sourceArray[element]) return true
  }
  return false
}

function reduceToAllTrue(sourceArray) {
  for (const element of sourceArray) {
    if (sourceArray[element]) return false
  }
  return true
}