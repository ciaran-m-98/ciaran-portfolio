import NavLink from './NavLink';
import '../../app/globals.css';
import classNames from 'classnames';
export default function Navbar() {
  const cx = classNames;

  return (
    <nav
      className={cx(
        'absolute top-8 left-1/2 transform -translate-x-1/2 h-16 w-fit rounded-3xl border border-stone-100/20 flex bg-transparent backdrop-blur-md z-20',
      )}
    >
      <div className="flex flex-row justify-center items-center w-full p-4 h-16">
        <div className="flex gap-16">
          <ul className="flex flex-row gap-16 justify-center items-center">
            <li>
              <NavLink title="Expertise" link="about-section" />
            </li>
            <li>
              <NavLink title="History" link="skills-section" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
