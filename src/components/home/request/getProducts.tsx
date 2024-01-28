
export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  units?: number
}


const getProducts = async ():Promise<Product[]> => {
  try {

    // const response = await fetch(`${process.env.MERU_ENDPOINT}`)
    const response = await fetch("https://ornate-scone-f87809.netlify.app/api/products.json")

    if (!response.ok) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }

    const { data } = await response.json()

    return  data

  } catch (error) {
    console.log(error);
    throw error
  }

}

export { getProducts }

