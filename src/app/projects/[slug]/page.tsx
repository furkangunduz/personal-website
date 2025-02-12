import { AnimateOnScroll } from '@/app/components/AnimateOnScroll';
import data from '@/app/data.json';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for each project page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const project = data.projects.items.find((p) => p.id === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const title = `${project.title} - Project by ${data.seo.author.name}`;

  return {
    title: title,
    description: project.description,
    openGraph: {
      title: title,
      description: project.description,
      type: 'article',
      url: `${data.seo.baseUrl}/projects/${project.id}`,
      images: project.images.map((image) => ({
        url: image,
        width: 1200,
        height: 630,
        alt: `${project.title} - Project Screenshot`,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: project.description,
      images: project.images,
      creator: data.seo.social.twitter,
      site: data.seo.social.twitter,
    },
  };
}

export default async function ProjectDetail({ params }: Props) {
  const awaitedParams = (await params).slug;
  const project = data.projects.items.find((p) => p.id === awaitedParams);

  if (!project) {
    notFound();
  }

  return (
    <main className='min-h-screen p-6 md:p-16 max-w-4xl mx-auto'>
      <div className='space-y-12'>
        {/* Navigation */}
        <AnimateOnScroll>
          <nav className='flex items-center justify-between'>
            <Link href='/' className='inline-flex items-center text-sm text-zinc-400 hover:text-white'>
              <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
              </svg>
              Projects
            </Link>
          </nav>
        </AnimateOnScroll>

        {/* Hero Section */}
        <AnimateOnScroll>
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold tracking-tight'>{project.title}</h1>
            <Link
              href={project.website}
              className='animated-link inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors group'
              target='_blank'
              rel='noopener noreferrer'
            >
              Visit Website
              <svg
                className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:-rotate-45'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Main Content */}
        <div className='space-y-12'>
          {/* Description */}
          <AnimateOnScroll>
            <p className='text-md text-zinc-400 leading-relaxed'>{project.description}</p>
          </AnimateOnScroll>

          {/* Metadata Grid */}
          <AnimateOnScroll>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 border-y border-zinc-800 py-8'>
              <div className='space-y-2'>
                <h3 className='text-sm text-zinc-500'>Category</h3>
                <p className='text-xs'>{project.category}</p>
              </div>
              <div className='space-y-2'>
                <h3 className='text-sm text-zinc-500'>Services</h3>
                <p className='text-xs'>{project.services}</p>
              </div>
              <div className='space-y-2'>
                <h3 className='text-sm text-zinc-500'>Client</h3>
                <p className='text-xs'>{project.client}</p>
              </div>
              <div className='space-y-2'>
                <h3 className='text-sm text-zinc-500'>Year</h3>
                <p className='text-xs'>{project.year}</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Features */}
          <div className='space-y-6 text-zinc-400'>
            <ul className='space-y-6'>
              {project.features.map((feature, index) => (
                <AnimateOnScroll key={index}>
                  <li className='space-y-2'>
                    <h3 className='text-lg font-medium text-white'>{feature.title}</h3>
                    <p className='leading-relaxed'>{feature.description}</p>
                  </li>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>

          {/* Summary */}
          <AnimateOnScroll>
            <p className='text-lg text-zinc-400 leading-relaxed'>{project.summary}</p>
          </AnimateOnScroll>

          {/* Project Images */}
          <div className='space-y-12'>
            {project.images.map((image, index) => (
              <AnimateOnScroll key={index}>
                <div className='relative aspect-[16/9] overflow-hidden rounded-lg bg-zinc-900'>
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className='object-cover'
                    sizes='(min-width: 1024px) 80vw, 100vw'
                    priority={index === 0}
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// Generate static params for all projects
export function generateStaticParams() {
  return data.projects.items.map((project) => ({
    slug: project.id,
  }));
}
