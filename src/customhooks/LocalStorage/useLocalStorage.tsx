import { useState } from "react";


type localStorageProps = {
}


const useLocalStorage = (key : string, initialValue : any) => {
  const [state, setState] = useState(() => {
    // Initialize the state
    try {
      const value = window.localStorage.getItem(key)
      // Check if the local storage already has any values,
      // otherwise initialize it with the passed initialValue
      return value ? JSON.parse(value) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value : any) => {
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value

      // Retrieve the current value from localStorage
      const storedValue = JSON.parse(window.localStorage.getItem(key) || '[]');

      console.log(storedValue,'storedValue');

      storedValue.push(valueToStore)

      window.localStorage.setItem(key, JSON.stringify(storedValue))
      setState(storedValue)

    } catch (error) {
      console.log(error)
    }
  }

  return [state, setValue]
}

export { useLocalStorage };

