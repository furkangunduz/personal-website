import Image from 'next/image';
import Link from 'next/link';
import { AnimateOnScroll } from './components/AnimateOnScroll';
import { EducationItem } from './components/EducationItem';
import { ExperienceItem } from './components/ExperienceItem';
import { ProjectCard } from './components/ProjectCard';
import { StackItem } from './components/StackItem';
import data from './data.json';
import type { PageData } from './types';

const pageData = data as PageData;

export default function Home() {
  return (
    <main className='mx-auto min-h-screen max-w-4xl p-6 md:p-16'>
      <div className='space-y-8'>
        {/* Header Section */}
        <AnimateOnScroll>
          <div className='flex flex-col items-start justify-between md:flex-row md:items-center'>
            <div className='flex items-center space-x-6'>
              <Image src={pageData.profile.image} alt={pageData.profile.name} width={100} height={100} className='profile-image' />
              <div className='space-y-1.5'>
                <h1 className='text-2xl font-semibold'>{pageData.profile.name}</h1>
                <p className='text-lg text-zinc-400'>{pageData.profile.title}</p>
                <div className='flex items-center text-sm text-zinc-400'>
                  <svg className='mr-1.5 h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
                  <span className='availability-dot ml-1'></span>
                  <span className='ml-1.5 text-zinc-400'>{pageData.profile.availability.text}</span>
                </div>
              </div>
            </div>
            <div className='mt-6 flex flex-col space-y-4 md:mt-0'>
              <Link
                href={pageData.buttons.booking.href}
                className='animated-link inline-flex items-center text-sm'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg className='mr-2 h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
                <svg className='mr-2 h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
        </AnimateOnScroll>

        {/* Contact Section */}
        <AnimateOnScroll>
          <div className='flex flex-col space-y-4 border-t border-zinc-800 pt-6 md:flex-row md:items-center md:justify-between md:space-y-0'>
            <Link href={`mailto:${pageData.profile.email}`} className='animated-link inline-flex items-center text-sm'>
              <svg className='mr-1.5 h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              {pageData.profile.email}
            </Link>
            <div className='flex items-center space-x-4 text-sm'>
              <Link
                href={pageData.profile.social.github}
                className='animated-link text-zinc-400 transition-colors hover:text-white'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </Link>
              <Link
                href={pageData.profile.social.linkedin}
                className='animated-link text-zinc-400 transition-colors hover:text-white'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </Link>
              {pageData.profile.social.medium && (
                <Link
                  href={pageData.profile.social.medium}
                  className='animated-link text-zinc-400 transition-colors hover:text-white'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Medium
                </Link>
              )}
              {pageData.profile.social.codewars && (
                <Link
                  href={pageData.profile.social.codewars}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group inline-flex items-center transition-opacity hover:opacity-80'
                >
                  <Image
                    src='https://www.codewars.com/users/deathPunch/badges/micro'
                    alt='CodeWars Badge'
                    width={120}
                    height={20}
                    className='h-5 w-auto opacity-90 transition-opacity group-hover:opacity-100'
                    unoptimized
                  />
                </Link>
              )}
            </div>
          </div>
        </AnimateOnScroll>

        {/* About + Stack Section */}
        <AnimateOnScroll>
          <section className='space-y-8 border-t border-zinc-800 pt-8 md:space-y-0'>
            <div className='flex flex-col gap-12 md:flex-row md:gap-16'>
              <div className='flex-1 space-y-6'>
                <h2 className='text-2xl font-semibold'>{pageData.about.title}</h2>
                <div className='text-md space-y-4 text-zinc-400'>
                  {pageData.about.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className='flex-1 space-y-6 border-t border-zinc-800 pt-8 md:border-t-0 md:pt-0'>
                <h2 className='text-2xl font-semibold'>{pageData.stack.title}</h2>
                <div className='grid grid-cols-4 gap-6'>
                  {pageData.stack.items.map((item) => (
                    <StackItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Experience Section */}
        <AnimateOnScroll>
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
        </AnimateOnScroll>

        {/* Projects Section */}
        <AnimateOnScroll>
          <section className='space-y-8 border-t border-zinc-800 pt-8'>
            <h2 className='text-2xl font-semibold'>{pageData.projects.title}</h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
              {pageData.projects.items.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* Education Section */}
        <AnimateOnScroll>
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
        </AnimateOnScroll>
      </div>
    </main>
  );
}
