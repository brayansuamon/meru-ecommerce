import Link from "next/link";

export interface IFooterProps {
}

 const Footer = (props: IFooterProps) => {
  return (
  <footer className="h-auto w-full py-6 bg-blackMeru">
    <div  className="mx-auto max-w-[1280px] px-6 flex items-start flex-col justify-center gap-y-6">
      <div className="w-full md:w-8/12 text-whiteMeru flex flex-wrap md:flex-nowrap  justify-left gap-x-8 gap-y-6">
        <Link href={'https://app.meru.com/terminos-y-condiciones/'}>Términos y condiciones</Link>
        <Link href={'https://meru.com.mx/docs/aviso-de-privacidad'}>Privacidad</Link>
        <Link href={'https://m.facebook.com/meru.mx?wtsid=rdr_0wIvtTuanxqh8d82K'} target="_blank">Facebook</Link>
        <Link href={'https://www.instagram.com/meru.mx'} target="_blank">Instagram</Link>
        <Link href={'https://www.linkedin.com/company/merutrading/'} target="_blank">LinkedIn</Link>
      </div>
      <div className="text-grayMeru">
        <p>Copyright © 2024 Meru. Todos los derechos reservados |</p>
        <p>ayuda@meru.com | (+52) 55 2768 1288</p>
      </div>
    </div>
  </footer>
  );
}

export { Footer };

