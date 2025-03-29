import Link from 'next/link';
import type { ExperienceItem as ExperienceItemType } from '../types';
import { AnimateOnScroll } from './AnimateOnScroll';

export function ExperienceItem({ company, website, position, period, remote, achievements }: ExperienceItemType) {
  return (
    <AnimateOnScroll>
      <div className='relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-zinc-800'>
        <div className='mb-6'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
            <div className='space-y-1'>
              <div className='flex items-center justify-between'>
                <Link
                  href={website}
                  className='text-base font-medium hover:text-zinc-300 transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {company}
                </Link>
                <div className='flex items-center space-x-2 md:hidden'>
                  {remote && <span className='text-xs text-zinc-500 px-2 py-0.5 rounded-full border border-zinc-800'>Remote</span>}
                  <p className='text-sm text-zinc-500'>{period}</p>
                </div>
              </div>
              <p className='text-sm text-zinc-400'>{position}</p>
            </div>
            <div className='hidden md:flex items-center space-x-2'>
              {remote && <span className='text-xs text-zinc-500 px-2 py-0.5 rounded-full border border-zinc-800'>Remote</span>}
              <p className='text-sm text-zinc-500'>{period}</p>
            </div>
          </div>
        </div>
        <ul className='space-y-4 pb-12 last:pb-0'>
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className='text-sm text-zinc-400 leading-relaxed relative pl-6 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-zinc-600'
            >
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </AnimateOnScroll>
  );
}
