import RotatingText from '../blocks/TextAnimations/RotatingText/RotatingText';
import SkillsMarquee from '../skills/SkillsMarquee';
export default function HomeUi() {
  return (
    <div className="flex flex-col h-full justify-evenly">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl tablet:text-4xl flex gap-3">
          <div className="w-20 flex justify-end">
            <RotatingText texts={['Hello!', 'Hola!', 'Hej!', "Hallo!"]} rotationInterval={2000} />
          </div>
          <span>I'm</span>
          <span className="text-[#FFBF00]">Ciaran</span>
        </h1>
        <h2 className="text-3xl tablet:text-5xl flex gap-3">
          <span>I'm a</span>
          <span className="text-[#FFBF00]">
            Software Developer
          </span>
        </h2>
      </div>
    </div>
  );
}
