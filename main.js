/******************
 * YOUR CODE HERE *
 ******************/

const addMeToEnd = arr => arr.push('Colin')
 const addMeToStart = arr => arr.unshift('Colin')
 const changeLast = (arr, newValue) => arr[arr.length - 1] = newValue
 const changeAllValuesTo = (arr1, newValue) => {
   for (let i = 0; i < arr1.length; i++) {
     arr1[i] = newValue
   }
 }

 const oddOrEven = arr => {
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 === 0) {
       arr[i] = 'even'
     } else {
       arr[i] = 'odd'
     }
   }
 }

 const changeNextThreeToValue = (startIdx, arr, newValue) => {
  for (let i = startIdx; i < startIdx + 3; i++){
    arr[i] = newValue
  }
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
