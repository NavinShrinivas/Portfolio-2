import Image from './Image'
import Link from './Link'

import SocialIcon from '@/components/social-icons'
import PTag from '@/components/ProjectTags'
const Card = ({ title, description, imgSrc, href, tags }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {tags.length ? (
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <PTag key={tag} text={tag} />
            ))}
          </div>
        ) : (
          <p></p>
        )}
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            <div className="flex items-center">
              Source Code{' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFp0lEQVRoge1ZXWwUVRT+zsx26Y9lkQdNsDGk1BAp3bbbLS1qIk1EePEnwWJilAdMSjUNdFsgSMSUYEKIsAPUklhJVPRFGjBR44N/EOVPu8Xutk2oYlAE/MGSrrDAbmfm+GAr7c7s3Dvb6oP2e9tzv/Pd7+zcO7nnDjCNafy/QVMlVNYdKiZwDUgJgLkShCIAswDkABhmoiGYPKgQenWFPh2oDMdA4MnOO6kC5h/bWDgjN/UkmFaDsNhl+nkwvUE5/Hq0QruYrYesCqiKNOToKFhrAi8RMDPbyUdxE8BrKSO17UxNx5DbZNcFlEda6hjcAeBet7kC/Aam52PV4UNuklwVUNYTaiBGBwCPK2suQIxODyWaeoKdI1J8GdKSI22eK4XxdgCNk3InC8YHRr7viYHStpSIqsjoDc0cfhX/lnkAIDyi3hzuqj9Yr4qowgL8keb1xLRmapy5ANOjg8VFO0Q0xwIWdrcuBchWhJgaTXhKiKkRQMytPwLOEqiVTCxkxuMZaK1l3aHHBDr2mHukLddXGO9joMSWYKjFsZqd58Z++rtbVoB4H4A7BN4TTGjpC/j2g9pMACjvDd3FOi7Y0/mSoqK0t3L3sN1oxifgKxzekNE8gALD+GX871h1+JABsxpMW6HQQ+RBUUEK+QUp5JMHRayYDzKwxVSwpK9K6xwzDwB6ju9y5nppjqnT5oyjdsGy2KbbKZW8ACA/U6KR55sh85aQQelAm1e9EU86UK6bulncX7vn1/QB2ydAqdQzcDAPAKp+bZY7mw5IJGYLGPlKjvKs3UCGJcS25AkwzDIhRxKqOrJASGJeDbauGEsBladbFwDwC+Quk8JnpB0KQCoNAnDYBwBA8/yRtaXpUUsBOvMi4YSEpsmcINMRrdAuguk5EY+hLk2PWQpQwFUCnd5oQOty4U8KsWD4MICvnTgKkcWbpQBmrnASYcaBqWhELCAwM952nBtsOQHbbGLyOc9jfOLWmyw8qvK5gDInPWD3FprhpJBM5v7oxpQbXL+u/iSgWJonuwK8U2PnH4HldGpXwFUnhVzvyN1TZicN3tyRuc4MtrSc1k0MnHXUULDcpS9pEIm06XernfQA0XdOEgw0LT4RynNrToSqSEM+GE0C2vn0gHUJmWa/QGRuwouwC29S0LlAAyBYnnQiPWJpzpPmyEde1avbjY1Doz8SSs6+6lt/tK5Nd+l1Akb77V0MNIi4BPoyPWZ5AqN3MxaiDdZdKYwfr+huvl/OqhXlkdYHrtwWPwlgrQR9KOFLdacHbf9lAg4yUCchusgkOuaPhE4BdMCE+nF/8JXvnRIWRjbMU6AvA7CKYdbIXuww+K2z97Rbegbb43T8qu9NABMOa0z8NDFqAAzYpNQCvE+Fnqm3vTUh62sAdACokXL+9/TcaatnF/yhru0mE28fHyOmd0xCCXmwjIGfLUnE70eD2i6Rk/nnLrwAoE/O95g23o1V7xm0G8rYE9+YaewHMCGJgG3Rcu2SylwPYOLNGSl7Zbx0rewyAJbijiJhGrQx02DGAv5ab/wUgPHrrrjsdGugt3r3cQItA7gfwA0Ax3PMayelLRmez6S5hK39i8IZz0jCLeTvaWkGszYuoSsa1FZKG7BBVaQhZwQFwgsBBt7rq9JWOB3fhTdzsUB4D4Pax4nW+yOhdfJ2rZC8uO0z85KrRL2H3EuMQf6ekAZgvPFTYPqQwXGFcGc0qG2R0hqFPxJyMnZaVfTl3wTaBX2y5OUuCBwLas0AbcatzVsL4peJ0M7Ai1I6EmDgaJ6u18mYB2QLGEUsGN5uKrgPwLdZuXOGTsAOLxIPf1Xb/odskqsCAKA/oEWMvGTV6NMYO95mcx66tYSYvgC4JhrUNsl+2BhDVl9aBkr3XQOw3R9dv5dTRgMplE2T3w6ghEA7o9XhI9n4mMY0pvEfwJ8bq+ZOMvnq+wAAAABJRU5ErkJggg==" />{' '}
              &rarr;
            </div>
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
