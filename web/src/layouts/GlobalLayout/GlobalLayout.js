import Navigation from 'src/components/Navigation'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  )
}

export default GlobalLayout
