import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

interface StackItemProps {
  name: string;
  icon: string;
}

export function StackItem({ name, icon }: StackItemProps) {
  return (
    <AnimateOnScroll>
      <div className='flex items-start space-x-4'>
        <div className='relative w-12 h-12 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0'>
          <Image src={icon} alt={name} fill className='p-2' />
        </div>
        <div className='space-y-1'>
          <h3 className='text-lg font-medium'>{name}</h3>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
