import Image from "next/image";

export interface ILoadingProps {
}

export default function Loading (props: ILoadingProps) {
  return (
    <section className="w-full h-full min-h-[200px]">
        <Image fill src={'/images/Loading2.avif'} alt={'Loading'} />
    </section>
  );
}
