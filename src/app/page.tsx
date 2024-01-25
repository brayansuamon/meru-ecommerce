// "use client"  --> to pass to the client

import { Hero } from "app/components/home/Hero";
import { MainProducts } from "app/components/home/MainProducts";

  //Server Component
export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Hero/>

      <MainProducts  />
    </main>
  );
}
