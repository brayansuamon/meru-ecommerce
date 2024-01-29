'use client'
import { useLocalStorage } from "app/customhooks/LocalStorage"
import Image from "next/image"

interface CardProps extends Product {
}



const Card = (props: CardProps) => {

  const {state: value, setValue} = useLocalStorage('carrito', [])

  const {name, image, price} = props

  const saveToLocalStorage = (e : React.MouseEvent) => {
    e.preventDefault()
    setValue(props)
  }



  return (
    <article className="flex flex-col max-w-80 mx-auto rounded-lg border border-gray-300">
      <div className="relative w-full h-[200px] bg-gray-200 rounded-t-lg" >
       <Image fill src={image} alt={name} />
      </div>
      <div className="pt-2 px-3 pb-[30px]">
        <p className="text-grayDescription font-semibold text-sm">Desde</p>
        <p className="text-blackMeru text-2xl font-semibold">${price}</p>
        <p className="text-base text-grayDescription">{name}</p>
        <button onClick={saveToLocalStorage} className="mt-3 text-greenMeru hover:text-blueMeru font-semibold text-sm">Agregar al carrito</button>
      </div>
    </article>
  )
}

export { Card }

