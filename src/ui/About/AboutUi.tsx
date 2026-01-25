import ContactLink from "./ContatctLink"
export default function AboutUi() {
  return (
    <div className="flex flex-col justify-center items-center size-full m-auto gap-12">
      <div className="w-full flex flex-col gap-6 items-center">
        <h1 className="text-4xl text-center">About Me</h1>
        <div className="bg-green-400 w-20 h-1 rounded-md" />
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className=" text-3xl mx-4 text-center">
            Ciaran Melarkey
          </h2>
          <h3 className="text-2xl mx-4 text-center">
            Front-end Developer
          </h3>
        </div>
        <p className="text-sm mx-4 font-extralight text-justify">
          Hi I'm Ciarán. A front-end developer with a bachelor's in computer
          science who develops and maintains web applications and has more than
          3 years of experience in the area. I mostly work with React, but I've
          also used Vue and Angular in the past. I also have some experience
          with working with Back-end technologies such as Java and Express.
        </p>
        <div className="flex w-full flex-wrap justify-center content-center gap-4">
          <ContactLink
            href="https://www.linkedin.com/in/ciaran-melarkey-694469194/"
            label="LinkedIn"
          />
          <ContactLink href="/CiaranMelarkeyCV.pdf" label="Resume" />
          <ContactLink href="https://github.com/ciaran-m-98" label="GitHub" />
        </div>
      </div>
    </div>
  )
}
