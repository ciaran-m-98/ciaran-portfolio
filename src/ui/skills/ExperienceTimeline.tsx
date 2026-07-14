'use client';

import EventLine from './EventLine';
import { useInView } from '@/service/hooks';

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
  const { ref, isInView } = useInView<HTMLDivElement>();
  const isEvenIndex = index % 2 === 0;

  const animationClass = isInView
    ? 'opacity-100 translate-x-0'
    : isEvenIndex
    ? 'opacity-0 translate-x-6 md:-translate-x-6'
    : 'opacity-0 translate-x-6';

  const boxClasses = `flex flex-col justify-center bg-white rounded-md flex-1 px-2 gap-2 shadow-lg dark:shadow-none py-8 order-2 transition-all duration-700 ease-out will-change-transform will-change-opacity ${animationClass} ${isEvenIndex ? 'md:order-1' : 'md:order-3'}`;

  return (
    <div className="flex flex-row items-center justify-center md:gap-8 gap-4" ref={ref}>
      <div className={boxClasses} id={id}>

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
        className={`flex-1 py-8 px-2 hidden md:flex transition-all duration-700 ease-out will-change-transform will-change-opacity ${animationClass} ${isEvenIndex ? 'order-3 text-left' : 'order-1 text-right'}`}
        id={id}
      >
        <span className="text-md font-light dark:text-green-400 text-purple-900 w-full">{time}</span>
      </div>
    </div>
  );
}
