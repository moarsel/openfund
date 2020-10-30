import Navigation from 'src/components/Navigation'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="relative">
        <Navigation />
        <main
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
