import { getProducts } from "app/services/Meru";

//Proxi server to save the information
export async function GET() {
  const products = await getProducts();

  return Response.json({ products });
}
