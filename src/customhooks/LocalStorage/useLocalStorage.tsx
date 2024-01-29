import { useState } from "react";

export type ProductLocal = Omit<Product, 'units'> & {
  units: number
}

type localStorageProps = {
}



const useLocalStorage = (key : string, initialValue ?: any) => {
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

  const setValue = (value : Product) => {
    let newStore
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value

      // const valueToStore = { ...valueToAdd, units: 1 }

      // Retrieve the current value from localStorage
      const storedValue = JSON.parse(window.localStorage.getItem(key) || '[]');

      const  isIncluded = storedValue.some((item: Product) => item.id === valueToStore.id)

      if(!isIncluded){
         storedValue.push({ ...valueToStore, units: 1 })
         newStore = storedValue
      }else{
        newStore  = storedValue.map((item: ProductLocal) => item.id === valueToStore.id ? { ...item, units: item.units + 1}  : item )
      }

      window.localStorage.setItem(key, JSON.stringify(newStore))
      setState(newStore)

    } catch (error) {
      console.log(error)
    }
  }

  const deleteValue = (valueToDelete : string ) => {
    let newStore
    try {

      // Retrieve the current value from localStorage
      const storedValue = JSON.parse(window.localStorage.getItem(key) || '[]');

      newStore  = storedValue.filter((item: ProductLocal) => item.id !== valueToDelete)

      window.localStorage.setItem(key, JSON.stringify(newStore))
      setState(newStore)

    } catch (error) {
      console.log(error)
    }
  }

  const deleteUnit = (valueToUpdate : string) =>{
    let newStore
    try {

      // Retrieve the current value from localStorage
      const storedValue = JSON.parse(window.localStorage.getItem(key) || '[]');

      newStore  = storedValue.map((item: ProductLocal) => item.id === valueToUpdate? { ...item, units: item.units > 1 ? item.units - 1 : item.units}  : item )

      window.localStorage.setItem(key, JSON.stringify(newStore))
      setState(newStore)

    } catch (error) {
      console.log(error)
    }
  }

  const addUnit = (valueToUpdate : string)=>{
    let newStore
    try {

      // Retrieve the current value from localStorage
      const storedValue = JSON.parse(window.localStorage.getItem(key) || '[]');

      newStore  = storedValue.map((item: ProductLocal) => item.id === valueToUpdate? { ...item, units: item.units + 1}  : item )

      window.localStorage.setItem(key, JSON.stringify(newStore))
      setState(newStore)

    } catch (error) {
      console.log(error)
    }
  }

  const emptyCart = ()=>{
    window.localStorage.setItem(key, '[]')
    setState([])
  }

  return {state, setValue, deleteValue, deleteUnit, addUnit, emptyCart}
}

export { useLocalStorage };

