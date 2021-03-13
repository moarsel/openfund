import { useEffect, useRef } from 'react'
import Navigation from 'src/components/Navigation'
import { Footer } from 'src/components/UI/Footer/Footer'

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
        <main ref={mainRef} id="main" className="relative ">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default GlobalLayout
