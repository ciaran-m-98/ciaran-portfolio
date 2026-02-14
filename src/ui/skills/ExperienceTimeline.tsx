import EventLine from './EventLine';
import { Skill } from './constants';
import classNames from 'classnames';
export default function ExperienceTimeline({
  position,
  company,
  time,
  location,
  description,
  isFirst = false,
  isLast = false,
  type,
  index,
}: {
  position: string;
  company: string;
  time: string;
  location: string;
  description?: string;
  isFirst?: boolean;
  isLast?: boolean;
  type: string;
  index: number;
}) {
  const id = position.toLowerCase().replace(/\s+/g, '-');
  const cx = classNames;
  return (
    <div className="flex flex-row items-center justify-center md:gap-8 gap-4">
      <div
        className={cx(
          'flex flex-col justify-center bg-white rounded-md flex-1 px-2 gap-2 shadow-lg dark:shadow-none py-8 order-2',
          index % 2 === 0 ? 'md:order-1' : 'md:order-3',
        )}
        id={id}
      >
        <span className="text-lg font-medium text-black">
          {position} &#183; {company}
        </span>

        <span className="text-md font-light text-black">{location}</span>

        {description && (
          <span className="font-extralight text-sm text-black">
            {description}
          </span>
        )}
        <span className="text-xs font-light text-black w-full md:hidden">
          {time}
        </span>
      </div>
      <EventLine isFirst={isFirst} isLast={isLast} id={id} type={type} />
      <div
        className={cx(
          'flex-1  py-8  px-2 hidden md:flex',
          index % 2 === 0 ? 'order-3 text-left' : 'order-1 text-right',
        )}
        id={id}
      >
        <span className="text-md font-light text-green-400 w-full">{time}</span>
      </div>
    </div>
  );
}
