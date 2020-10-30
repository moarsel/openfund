import Navigation from 'src/components/Navigation'

const GlobalLayout = ({ children }) => {
  return (
    <div className="relative h-screen bg-gray-100">
      <a href="#main" className="fixed sr-only focus:not-sr-only focus:fixed">
        Skip to content
      </a>
      <Navigation />
      <main
        id="main"
        className="container px-4 mx-auto my-12 lg:container lg:mx-auto "
      >
        {children}
      </main>
    </div>
  )
}

export default GlobalLayout
