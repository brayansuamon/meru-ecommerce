// 'use client'
import { Card } from "app/components/shared/Card";
import { ContainerMeru } from "app/components/shared/Container";


type MainProductsProps = {}



const MainProducts = async (props: MainProductsProps) => {

  // const [products, setProducts] = useState<Product[]>([])

  // useEffect(()=>{

  //   const fetchProducts = async () => {
  //     try {
  //       const productsData = await getProducts()
  //       setProducts(productsData)
  //     } catch (error) {
  //       console.log(error)
  //     }

  //   }

  //   fetchProducts()
  // }, [])

  //Directly to the service
  // const products = await getProducts()



  //Ask to the server
  const response = await fetch('http://localhost:3000/api')
  const { products } = await response.json()

  return (
    <section className="py-14 bg-grayLight">
      <ContainerMeru>

      <h1 className="text-3xl font-semibold mb-5">Destacados</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {

            products?.map((product: Product)=>{

              return(
                <article key={product.id} className="col-span-1">
                  <Card  {...product }/>
                </article>
              )
            })
      }
      </section>

      </ContainerMeru>

    </section>
  )
}

export { MainProducts };


