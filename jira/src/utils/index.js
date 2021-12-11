export const isFalsy = (value) => {
  console.log(6767, value === 0 ? false : !value)
  return value === 0 ? false : !value
}

export const cleanObject = (object) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}