import { Product } from "app/components/home/request/getProducts"
import Image from "next/image"

interface CartProductsProps extends Product {}

const CartProducts = (props: CartProductsProps) => {

  const { image, name, price} =  props

  return (
   <article className="border rounded-lg">
    <div className="flex justify-between border-b px-6 py-4">
      <div className="w-8/12">
        <p className="font-semibold">Llega pasado mañana</p>
        <p className="text-sm text-grayMeru">Vendido por LATAM Parts</p>
      </div>
      <div className="w-4/12 flex justify-end items-center">
        <p className="text-right bg-grayDescription text-white p-1">Paga al recibir</p>
      </div>
    </div>
    <div className="px-6 py-3 flex gap-2 w-full justify-between">
      <div className="relative w-20 h-20 bg-gray-200" >
        <Image fill src={image} alt={name} />
      </div>
      <div className="w-full text-left">
        <p>{name}Name</p>
        <p className="text-2xl font-semibold">{price} Price</p>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="relative w-full flex justify-end">
          <Image width={20} height={20} src={'/images/Close.svg'} alt={'close'} />
        </div>
        <div className="flex items-center justify-center text-greenMeru">
          <div className="px-4">1</div>
          <div className="relative w-5 h-5">
             <Image fill src={'/images/AddUnit.svg'} alt={'Add Unit'}/>
          </div>
        </div>
      </div>
    </div>
   </article>
  )
}

export { CartProducts }

