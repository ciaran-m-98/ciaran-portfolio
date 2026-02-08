import Image from 'next/image';
import Link from 'next/link';
export default function HomeUi() {
  return (
    <div className="flex lg:px-4 md:px-6 px-8 size-full items-center max-w-7xl">

      <div className="flex gap-8 lg:flex-row flex-col">
        <div className="w-40 h-40 border-2 rounded-full"></div>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex flex-row gap-4 lg:order-1 order-3">
            <Link href={'https://github.com/ciaran-m-98'} target="_blank">
              <Image
                className="dark:invert"
                src={'/github-mark.svg'}
                alt={'Github Link'}
                width={30}
                height={30}
                priority
              />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/ciaran-melarkey-694469194/'}
              target="_blank"
            >
              <Image
                className="dark:invert"
                src={'/linkedin-mark.svg'}
                alt={'LinkedIn Link'}
                width={30}
                height={30}
                priority
              />
            </Link>
            <Link href={'/CiaranMelarkeyCV.pdf'} target="_blank">
              <Image
                className="dark:invert"
                src={'/document.svg'}
                alt={'CV Link'}
                width={30}
                height={30}
                priority
              />
            </Link>
          </div>
          <h1 className="lg:text-7xl md:text-6xl lg:order-2 sm:text-5xl text-4xl order-1">
            Ciarán Melarkey
          </h1>
          <h2 className="lg:text-3xl text-xl lg:order-3 order-2">
            Front-end Engineer
          </h2>
        </div>
      </div>
    </div>
  );
}
