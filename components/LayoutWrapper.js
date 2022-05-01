import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <h1 className="hidden h-6 text-2xl font-semibold sm:block">Navin Shrinivas</h1>
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="h-6 text-2xl font-semibold sm:block">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA8klEQVRoge2Y0Q2EMAiG8eIqbuBQN5JDuYHD6BOJMbXSFikC3+vptfj5SyhAoIuh5eZ52XaujeRY/9PjPn8SG5GgygiaoDypFq7Gc+v5NCKVCQQNUN4AM0bGmpuks0HBtxGEOzMtpsPImdbMcJg1YyQK0UYUoo0oRBtRiDZYOrv0nJIijAC8P5eUYMbIJ2b2u/XPv5sxQsqI1DkWdf3Um+HDyLXyXv3C1dkvKSO9s0HBl5FaSjMV51pQYaSkpzxdw9mf/Brh/IJx/pcvIxomQIB8pswYSTIv267FAgBtPzaNfNEEYsZIdibuTUmfMWMk0MYBXPlxnB+xhcsAAAAASUVORK5CYII=" />
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
