// "use client"  --> to pass to the client
import { MainProducts } from "app/components/home/MainProducts";

  //Server Component
export default function Home() {


  return (
    <main className="w-full" >
         {/* <Hero/> */}
         {/* <Header /> */}
         <MainProducts />

    </main>
  );
}
