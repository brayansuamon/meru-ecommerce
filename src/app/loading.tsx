import Image from "next/image";

export interface ILoadingProps {
}

export default function Loading (props: ILoadingProps) {
  return (
    <section className="w-full h-full min-h-[900px] flex justify-center items-center">
      <div className="relative m-auto w-80 h-80">
      <Image fill src={'/images/Loading2.avif'} alt={'Loading'} className="object-contain"/>
      </div>
    </section>
  );
}
