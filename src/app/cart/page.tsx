'use client'
import { CartProducts } from "app/components/cart-products/Card-order";
import { ContainerMeru } from "app/components/shared/Container";
import { useLocalStorage } from "app/customhooks/LocalStorage";
import { ProductLocal } from "app/customhooks/LocalStorage/useLocalStorage";


type StoreProps = {}

const Store = (props: StoreProps) => {

  const {state:storedValue, deleteValue, deleteUnit, addUnit, emptyCart} = useLocalStorage('carrito')

  const handleDeleteValue = (idToDelete : string)  =>  {
    deleteValue(idToDelete);
  }

  const handleDeleteUnit = (idToUpdate : string)=>{
    deleteUnit(idToUpdate)
  }

  const handleAddUnit = (idToUpdate : string)=>{
    addUnit(idToUpdate)
  }

  const totalPrice = storedValue.reduce((sum : number, item : ProductLocal) => sum + (item.price * item.units), 0)

  return (
    <div>
         {/* <Header stateCart={storedValue.length} /> */}
      <section className="py-14 bg-grayLight  min-h-[800px]">
        <ContainerMeru>
          <h1 className="text-3xl font-semibold mb-5">Carrito</h1>
          <section className="flex flex-col gap-y-6">
          {
            storedValue.length > 0 &&
              storedValue.map((item : Product)=>{
                return (
                <article key={item.id}>
                  <CartProducts { ...item} handleDeleteValue={handleDeleteValue} handleDeleteUnit={handleDeleteUnit} handleAddUnit={handleAddUnit}/>
                </article>
              )
              })
            }
          {
            storedValue.length > 0 ?
            (
            <div className="w-full flex flex-col justify-end items-end">
                <p className="font-semibold">Total : ${totalPrice}</p>
                <button onClick={emptyCart}  className="mt-6 p-4 bg-grayMeru text-whiteMeru">Vaciar Carrito</button>
              </div>) :
              (<div className="w-full h-full flex items-center justify-center">
                <p className="text-2xl sm:text-5xl"> Not Items in the cart</p>
              </div>)
          }

          </section>
        </ContainerMeru>
      </section>
    </div>

  )
}

export default Store
