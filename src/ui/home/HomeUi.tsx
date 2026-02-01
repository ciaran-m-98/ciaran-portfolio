import RotatingText from '../blocks/TextAnimations/RotatingText/RotatingText';
export default function HomeUi() {
  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex flex-col gap-4 justify-items-start">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-xl flex lg:gap-10 gap-4 w-full font-semibold">
          <span>Hey, I&apos;m</span>
          <span className="text-green-400">
            <RotatingText
              texts={[
                'Ciaran!',
                'a Software Developer!',
                'a Frontend Specialist!',
                'a Tech Enthusiast!',
              ]}
              rotationInterval={3500}
            />
          </span>
        </h1>
        <h2 className="lg:text-xl md:text-lg sm:text-sm text-xs sm:w-3/4 w-full font-thin">
          I&apos;m a Software Engineer at Solera Inc. focused developing scalable
          frontend applications with a passion for creating engaging user
          experiences.
        </h2>
      </div>
    </div>
  );
}
