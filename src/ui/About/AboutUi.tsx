export default function AboutUi() {
  return (
    <div className="flex flex-col justify-center align-center size-full tablet:w-[800px] m-auto gap-32">
      <div className="w-full flex flex-col gap-6 items-center">
        <h1 className="text-4xl text-center">About Me</h1>
        <div className="bg-[#FFBF00] w-20 h-1 rounded-md"/>
      </div>
      <div className="w-[600px] flex flex-col gap-16">
        <h2 className="text-5xl">Ciaran Melarkey</h2>
        <h3 className="text-4xl">Front-end Developer</h3>
        <p className="text-wrap  text-2xl">
          Hi I'm Ciarán. A front-end developer with a bachelor's in computer
          science who develops and maintains web applications and has more than
          3 years of experience in the area. I mostly work with React, but I've
          also used Vue and Angular in the past. I also have some experience
          with working with Back-end technologies such as Java and Express.
        </p>
      </div>
    </div>
  );
}
