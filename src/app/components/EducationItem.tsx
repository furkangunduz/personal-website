import type { EducationItem as EducationItemType } from '../types';

export function EducationItem({ location, degree, school, period, description }: EducationItemType) {
  return (
    <div className='relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-zinc-800'>
      <div className='mb-6'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <div className='space-y-1'>
            <div className='flex items-center space-x-2'>
              <svg className='w-4 h-4 text-zinc-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
              <span className='text-sm text-zinc-500'>{location}</span>
            </div>
            <h3 className='text-base font-medium'>{degree}</h3>
            <p className='text-sm text-zinc-400'>{school}</p>
          </div>
          <p className='text-sm text-zinc-500 mt-2 md:mt-0'>{period}</p>
        </div>
      </div>
      <p className='text-sm text-zinc-400 leading-relaxed'>{description}</p>
    </div>
  );
}
