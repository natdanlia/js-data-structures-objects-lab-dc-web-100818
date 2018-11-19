// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  let newObject = Object.assign({}, driver, {[key]:value})
  return newObject
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}

function deleteFromDriverByKey(driver, key) {
  let newObject = Object.assign({},driver)
  delete newObject[key]
  return newObject
}
