import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import Card from '@/components/Card'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const fs = require('fs')
  const matter = require('gray-matter')
  const { v4: uuid } = require('uuid')

  const files = fs.readdirSync(`${process.cwd()}/data/projects`, 'utf-8')
  const projects = files
    .filter((fn) => fn.endsWith('.md'))
    .map((fn) => {
      const path = `${process.cwd()}/data/projects/${fn}`
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
      })
      const { data } = matter(rawContent)
      return { data }
    })
  // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { projects, posts },
  }
}

export default function Home(props) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="d">
        <div className="flex flex-col items-center space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="md:leading-1 4 text-5xl leading-9 no-underline sm:text-4xl sm:leading-10 md:text-6xl">
            {' '}
            Navin Shrinivas{' '}
          </h1>
          <p className="items-center py-5 text-center text-lg text-primary-500">
            System programming enthusiast | CS at PES University | Passionate programmer{' '}
          </p>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-3xl font-semibold leading-9 no-underline">Quick Intro</h2>
          <div className="inline-block">
            <div className="float-none mx-6 flex  flex-col items-center md:float-left">
              <img
                src="https://github.com/NavinShrinivas.png?size=280"
                className="w-32 rounded-full md:w-full md:rounded-lg"
              />
            </div>
            <p className="text-center text-lg text-gray-500 dark:text-gray-400 md:text-left">
              My name is Navin. One of my greatest pleasures in life is tinkering and exploring with
              tech. I've often time broken things tinkering with em (I fixed em too). Around 17
              years old I knew I'll be a good fit for engineering and would enjoy my time doing it.
              So here I am majoring Computer Science Enginering in PES University, Bangalore.
            </p>
            <br />
            <p className="text-center text-lg text-gray-500 dark:text-gray-400 md:text-left">
              I dabble with all domains alike, My domain of prefrence is Systems
              Programming/Software Development. This website hosts some of my projects, mentions and
              stuff I write rarely. Want to know more about me? click{' '}
              <Link className="text-primary-400" key="here" href="/about">
                here
              </Link>
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-semibold leading-9 no-underline">Prominent projects</h2>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {!props.projects.length && 'No projets found.'}
            {props.projects.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { title, tags, link, draft, summary } = frontMatter.data
              return (
                <Card key={title} title={title} description={summary} href={link} tags={tags} />
              )
            })}
          </div>
        </div>
      </div>
      {props.projects.length > 0 && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="https://github.com/NavinShrinivas?tab=repositories"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all projects"
          >
            All Projects &rarr;
          </Link>
        </div>
      )}

      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-3xl font-semibold leading-9 no-underline">Latest Posts</h2>
          <ul className="">
            {!props.posts.length && 'No posts found.'}
            {props.posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <li key={slug} className="py-4">
                  <article className="rounded-lg border-2 border-solid border-primary-500 p-4">
                    <div className="space-y-2">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {props.posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
