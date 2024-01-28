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
    }
  })

  const setValue = (value : any) => {
    let test: string[]
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value


      if(state === null){
        test = [ valueToStore ]
      }else{
        test = [state, valueToStore]
      }

      window.localStorage.setItem(key, JSON.stringify(test))

      console.log(valueToStore, 'valuetostore', state, 'state', test, 'test' );

      setState(test)

      console.log(state, 'after update', test, 'test');


    } catch (error) {
      console.log(error)
    }
  }

  return [state, setValue]
}

export { useLocalStorage };

