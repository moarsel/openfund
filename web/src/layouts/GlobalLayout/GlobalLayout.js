import { useEffect, useRef } from 'react'
import Navigation from 'src/components/Navigation'

const GlobalLayout = ({ children }) => {
  const mainRef = useRef(null)
  useEffect(() => {
    // TODO: focus not reset to main!
    // mainRef.current && mainRef.current.focus()
    window.scrollTo(0, 0)
  }, [children])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="relative">
        <Navigation />
        <main
          ref={mainRef}
          id="main"
          className="container px-4 mx-auto my-12 lg:container lg:mx-auto "
        >
          {children}
        </main>
      </div>
    </>
  )
}

export default GlobalLayout
