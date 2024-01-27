// 'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { Product, getProducts } from "../request/getProducts";


type MainProductsProps = {}



const MainProducts = (props: MainProductsProps) => {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(()=>{

    const fetchProducts = async () => {
      try {
        const productsData = await getProducts()
        setProducts(productsData)
      } catch (error) {
        console.log(error)
      }

    }

    fetchProducts()
  }, [])


    console.log(products, 'products');


  return (
    <section>
      <h3>New Products</h3>
      {

        products?.map((product, index)=>{

          const imageSrc = product.image

          return(
            <article key={product.id}>
              <p>{product.name}</p>
              <div>
              <Image width={30} height={40} src={imageSrc} alt={product.name} />
              </div>

            </article>
          )
        })
      }
    </section>
  )
}

export { MainProducts };


