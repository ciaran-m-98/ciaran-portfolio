import ContactLink from "./ContatctLink";
export default function AboutUi() {
  return (
    <div className="flex flex-col justify-center items-center size-full tablet:w-[800px] m-auto gap-12">
      <div className="w-full flex flex-col gap-6 items-center">
        <h1 className="text-4xl text-center">About Me</h1>
        <div className="bg-[#FFBF00] w-20 h-1 rounded-md" />
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="tablet:text-5xl text-3xl mx-4">Ciaran Melarkey</h2>
          <h3 className="tablet:text-4xl text-2xl mx-4">Front-end Developer</h3>
        </div>
        <p className="tablet:text-2xl text-l mx-4 font-extralight">
          Hi I'm Ciarán. A front-end developer with a bachelor's in computer
          science who develops and maintains web applications and has more than
          3 years of experience in the area. I mostly work with React, but I've
          also used Vue and Angular in the past. I also have some experience
          with working with Back-end technologies such as Java and Express.
        </p>
        <div className="flex w-full justify-center content-center">
          <ContactLink href="https://www.linkedin.com/in/ciaran-melarkey-694469194/" label="LinkedIn" />
          <ContactLink href="/CiaranMelarkeyCV.pdf" label="CV" />
          <ContactLink href="https://github.com/ciaran-m-98" label="GitHub" />
        </div>
      </div>
    </div>
  );
}
