import Image from 'next/image';

interface StackItemProps {
  icon: string;
  name: string;
}

export function StackItem({ icon, name }: StackItemProps) {
  return (
    <div className='flex items-center space-x-4'>
      <div className='w-14 h-14 flex items-center justify-center bg-zinc-900 rounded-xl'>
        <Image src={`/stack/${icon}`} alt={name} width={32} height={32} />
      </div>
      <span className='text-zinc-400 text-sm'>{name}</span>
    </div>
  );
}
