import NavLink from './NavLink';
import '../../app/globals.css';
import classNames from 'classnames';
import Image from 'next/image';
export default function Navbar() {
  const cx = classNames;

  return (
    <nav
      className={cx(
        'absolute top-8 left-1/2 transform -translate-x-1/2 h-16 w-[calc(100%-2rem)] md:max-w-7xl rounded-3xl border border-stone-100/20 flex backdrop-blur-md z-20 px-4',
      )}
    >
      <div className="flex flex-row justify-center items-center w-full p-4 h-16">
        <div className="flex w-full justify-between">
          <div className="flex w-full h-full">
            <button>
              <Image
                src={'/theme-dark.svg'}
                alt={'Logo'}
                width={30}
                height={30}
                className="dark:invert"
              />
            </button>
          </div>
          <ul className="flex flex-row gap-8 justify-center items-center">
            <li>
              <NavLink title="Expertise" link="expertise-section" />
            </li>
            <li>
              <NavLink title="History" link="history-section" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
