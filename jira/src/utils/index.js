import {useState, useEffect} from "react"

export const isFalsy = (value) => {
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

export const useMount = (cb) => {
  useEffect(() => {
    cb()
  }, [])
}

export const debounce = (cb, delay) => {
  let timer
  return function(...params) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      cb(...params)
    }, delay)
  }
}

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    // 每次在上一个useEffect处理完后再运行return的表达式
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}