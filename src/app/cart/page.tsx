'use client'
import { CartProducts } from "app/components/cart-products/Card-order";
import { ContainerMeru } from "app/components/shared/Container";
import { useLocalStorage } from "app/customhooks/LocalStorage";


type StoreProps = {}

const Store = (props: StoreProps) => {

  const [storedValue, setValue] = useLocalStorage('carrito', [])

  return (
    <section className="py-14 bg-grayLight  min-h-[800px]">
      <ContainerMeru>
        <section className="flex flex-col gap-y-6">
        {
          storedValue.length > 0 &&
            storedValue.map((item : Product)=>{
              return (
              <article key={item.id}>
                <CartProducts { ...item} />
              </article>
             )
            })

          }
        </section>
      </ContainerMeru>
    </section>
  )
}

export default Store
