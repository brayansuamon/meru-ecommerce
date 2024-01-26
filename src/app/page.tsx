// "use client"  --> to pass to the client

import { Hero } from "app/components/home/Hero";
import { MainProducts } from "app/components/home/MainProducts";

  //Server Component
export default function Home() {


  return (
    <main >

      <Hero/>

      <MainProducts  />
    </main>
  );
}
