import Image from "next/image";

export interface ILoadingProps {
}

export default function Loading (props: ILoadingProps) {
  return (
    <section className="mx-auto min-w-1/2 h-full min-h-[200px]">
        <Image fill src={'/images/Loading2.avif'} alt={'Loading'} className="object-contain"/>
    </section>
  );
}
