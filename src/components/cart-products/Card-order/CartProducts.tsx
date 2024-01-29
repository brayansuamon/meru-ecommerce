import Image from "next/image";

interface CartProductsProps extends Product {
  handleDeleteValue: (id: string) => void
  handleDeleteUnit: (id: string) => void
  handleAddUnit: (id: string) => void
}

const CartProducts = (props: CartProductsProps) => {

  const { image, name, price, units, id, handleDeleteValue,handleDeleteUnit, handleAddUnit} =  props


  return (
   <article className="border rounded-lg">
    <div className="flex flex-col sm:flex-row gap-y-6 justify-between border-b px-6 py-4">
      <div className="w-full sm:w-8/12">
        <p className="font-semibold">Llega pasado mañana</p>
        <p className="text-sm text-grayMeru">Vendido por LATAM Parts</p>
      </div>
      <div className="w-full sm:w-4/12 flex justify-start sm:justify-end items-center">
        <p className="text-right bg-grayDescription text-white p-1">Paga al recibir</p>
      </div>
    </div>
    <div className="px-6 py-3 flex flex-col sm:flex-row gap-4 sm:gap-2 w-full justify-between">
      <div className="relative w-20 h-20 bg-gray-200" >
        <Image fill src={image} alt={'Image'} />
      </div>
      <div className="w-full text-left">
        <p>{name}</p>
        <p className="text-2xl font-semibold">{price}</p>
      </div>
      <div className="flex flex-row-reverse sm:flex-col gap-y-3">
        <button onClick={()=>handleDeleteValue(id)} className="relative w-full flex justify-end">
          <Image width={20} height={20} src={'/images/Close.svg'} alt={'close'} />
        </button>
        <div className="flex items-center justify-center text-greenMeru">
          <button onClick={()=>handleDeleteUnit(id)} className="relative w-3 h-3">
          <Image fill src={'/images/Less.png'} alt={'close'} />
          </button>
          <div className="px-4">{units}</div>
          <button onClick={()=>handleAddUnit(id)} className="relative w-5 h-5">
             <Image fill src={'/images/AddUnit.svg'} alt={'Add Unit'}/>
          </button>
        </div>
      </div>
    </div>
   </article>
  )
}

export { CartProducts };

