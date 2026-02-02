import RotatingText from '../blocks/TextAnimations/RotatingText/RotatingText';
import Image from 'next/image';
import Link from 'next/link';
export default function HomeUi() {
  return (
    <div className="flex w-full lg:px-20 md:px-14 px-8 h-full items-center">
      <div className="flex gap-8 lg:flex-row flex-col">
        <div className="w-40 h-40 border-2 rounded-full"></div>
        <div className="flex flex-col justify-center gap-2">
          <div className='flex flex-row gap-4'>
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
            <Link href={'https://github.com/ciaran-m-98'} target="_blank">
              <Image
                className="dark:invert"
                src={'/linkedin-mark.svg'}
                alt={'LinkedIn Link'}
                width={30}
                height={30}
                priority
              />
            </Link>
          </div>
          <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl">
            Ciarán Melarkey
          </h1>
          <h2 className="lg:text-3xl text-xl">Front-end Engineer</h2>
        </div>
      </div>
    </div>
  );
}
