import SkillsMarquee from '../skills/SkillsMarquee';
export default function HomeUi() {
  return (
    <div className="flex flex-col h-full gap-16 justify-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl tablet:text-4xl">
          Hey! I'm&nbsp;
          <span className="text-[#FFBF00]">Ciaran Melarkey</span>
        </h1>
        <h2 className="text-3xl tablet:text-5xl">
          I'm a&nbsp;<span className="text-[#FFBF00]">Software Developer</span>
        </h2>
        <h3 className="text-xl tablet:text-3xl">I can build stuff</h3>
      </div>
      <div className="content-center tablet:mx-[20%]">
        <SkillsMarquee />
      </div>
    </div>
  );
}
