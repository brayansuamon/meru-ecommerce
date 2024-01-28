// "use client"  --> to pass to the client
'use client'
import { MainProducts } from "app/components/home/MainProducts";

  //Server Component
export default function Home() {


  return (
    <main className="w-full" >

      {/* <Hero/> */}

      <MainProducts  />

    </main>
  );
}
