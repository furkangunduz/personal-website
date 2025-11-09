import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

interface StackItemProps {
  name: string;
  icon: string;
}

export function StackItem({ name, icon }: StackItemProps) {
  return (
    <AnimateOnScroll>
      <div className='group relative flex items-center space-x-4 md:flex-col md:space-x-0 md:space-y-3 md:text-center'>
        <div
          className='relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-800 transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105'
          tabIndex={0}
          aria-label={name}
        >
          <Image src={icon} alt={name} fill className='p-2' />
        </div>
        <span className='pointer-events-none absolute left-1/2 top-full z-10 mt-2 hidden min-w-max -translate-x-1/2 rounded bg-zinc-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition md:group-hover:flex md:group-hover:opacity-100 md:group-focus-visible:flex md:group-focus-visible:opacity-100'>
          {name}
        </span>
      </div>
    </AnimateOnScroll>
  );
}
