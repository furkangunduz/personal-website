import Image from 'next/image';
import Link from 'next/link';
import { EducationItem } from './components/EducationItem';
import { ExperienceItem } from './components/ExperienceItem';
import { ProjectCard } from './components/ProjectCard';
import { StackItem } from './components/StackItem';
import data from './data.json';
import type { PageData } from './types';

const pageData = data as PageData;

export default function Home() {
  return (
    <main className='min-h-screen p-6 md:p-16 max-w-3xl mx-auto'>
      <div className='space-y-8'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
          <div className='flex items-start space-x-4'>
            <Image src={pageData.profile.image} alt={pageData.profile.name} width={100} height={100} className='profile-image' />
            <div className='space-y-1.5'>
              <h1 className='text-2xl font-semibold'>{pageData.profile.name}</h1>
              <p className='text-lg text-zinc-400'>{pageData.profile.title}</p>
              <div className='flex items-center text-zinc-400 text-sm'>
                <svg className='w-4 h-4 mr-1.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
                {pageData.profile.location}
              </div>
              <div className='flex items-center text-sm'>
                <span className='availability-dot'></span>
                <span className='text-zinc-400'>{pageData.profile.availability.text}</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col space-y-2 mt-6 md:mt-0'>
            <Link
              href={pageData.buttons.booking.href}
              className='animated-link inline-flex items-center text-sm'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
              {pageData.buttons.booking.text}
            </Link>
            <Link
              href={pageData.buttons.cv.href}
              className='animated-link inline-flex items-center text-sm'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                />
              </svg>
              {pageData.buttons.cv.text}
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 border-t border-zinc-800 pt-6'>
          <Link
            href={`mailto:${pageData.profile.email}`}
            className='flex items-center text-zinc-400 hover:text-white transition-colors text-sm'
          >
            <svg className='w-4 h-4 mr-1.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            {pageData.profile.email}
          </Link>
          <div className='flex space-x-4 text-sm'>
            <Link
              href={pageData.profile.social.twitter}
              className='animated-link text-zinc-400 hover:text-white transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </Link>
            <Link
              href={pageData.profile.social.linkedin}
              className='animated-link text-zinc-400 hover:text-white transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* About Section */}
        <section className='space-y-6 border-zinc-800 pt-8'>
          <h2 className='text-2xl font-semibold'>{pageData.about.title}</h2>
          <div className='space-y-4 text-zinc-400 text-md'>
            {pageData.about.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Stack Section */}
        <section className='space-y-8 border-t border-zinc-800 pt-8'>
          <h2 className='text-2xl font-semibold'>{pageData.stack.title}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {pageData.stack.items.map((item) => (
              <StackItem key={item.name} {...item} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className='space-y-8 border-t border-zinc-800 pt-8'>
          <h2 className='text-2xl font-semibold'>{pageData.projects.title}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {pageData.projects.items.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className='space-y-8 pt-8'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-semibold'>{pageData.experience.title}</h2>
          </div>
          <div className='space-y-8'>
            {pageData.experience.items.map((item) => (
              <ExperienceItem key={item.company} {...item} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className='space-y-8 pt-8'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-semibold'>{pageData.education.title}</h2>
          </div>
          <div className='space-y-8'>
            {pageData.education.items.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
