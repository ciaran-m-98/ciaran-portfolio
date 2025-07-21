import SkillsMarquee from './SkillsMarquee';

export default function SkillsUi() {
  return (
    <div className="flex flex-col justify-center align-center size-full">
      <div>My Skills and experiences</div>
      <div>
        I am skilled in many languages and technologies, here's a few of them.
      </div>
      <div className="flex content-center align-center">
        <SkillsMarquee />
      </div>
    </div>
  );
}
