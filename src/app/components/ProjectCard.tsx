import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
}

export function ProjectCard({ id, title, category, image }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className='group block'>
      <div className='overflow-hidden rounded-lg bg-zinc-900'>
        {/* Image Section */}
        <div className='relative aspect-[16/9] overflow-hidden'>
          {image ? (
            <Image src={image} alt={title} fill className='object-cover transition-transform duration-500 group-hover:scale-105' />
          ) : (
            <div className='w-full h-full bg-[repeating-linear-gradient(45deg,#232323,#232323_10px,#1c1c1c_10px,#1c1c1c_20px)]' />
          )}
        </div>

        {/* Info Section */}
        <div className='p-4'>
          <h3 className='text-lg font-medium text-white mb-4'>{title}</h3>
          <div className='flex items-center justify-between'>
            <p className='text-base text-zinc-400'>{category}</p>
            <svg
              className='w-5 h-5 text-white transition-transform duration-500 group-hover:-rotate-45'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
            >
              <path d='M5 12h14m0 0l-7-7m7 7l-7 7' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
