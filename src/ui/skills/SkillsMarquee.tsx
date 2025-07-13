'use client';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import classNames from 'classnames';
import './skillsmarquee.css';
import { useWindowSize } from '@/service/hooks';
export default function SkillsMarquee() {
  const skills = [
    'javascript',
    'typescript',
    'java',
    'react',
    'mongodb',
    'postgressql',
    'redux',
    'next',
    'vuejs',
    'sass',
    'vitejs',
    'tailwind',
    'webpack',
    'docker',
  ];
  const invertSkillInDarkMode = ['next'];
  const cx = classNames;
  const { width } = useWindowSize();
  return (
    <Marquee speed={30} autoFill className="skill-item-wrapper">
      {skills.map((skill) => {
        return (
          <Image
            src={`/skill-${skill}.svg`}
            alt={`${skill} logo`}
            className={cx({
              'dark:invert': invertSkillInDarkMode.includes(skill),
            })}
            width={width > 960 ? 120 : 80}
            height={width > 960 ? 120 : 80}
            priority
            key={skill}
          />
        );
      })}
    </Marquee>
  );
}
