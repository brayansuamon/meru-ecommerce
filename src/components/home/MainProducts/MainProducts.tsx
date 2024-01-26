import Image from "next/image";

  const getProducts = async () => {
    try {

      const response = await fetch(`${process.env.MERU_ENDPOINT}`)

      const {products} = await response.json()

      return products

    } catch (error) {
      console.log(error);

    }

  }


type MainProductsProps = {}

const MainProducts = async (props: MainProductsProps) => {

  const products = await getProducts()

  console.log(products);


  return (
    <section>
      <h3>New Products</h3>
      {
        products?.map((product:any, index:any)=>{

          const imageSrc = product.image

          return(
            <article key={index}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          )
        })
      }
    </section>
  )
}

export { MainProducts };

