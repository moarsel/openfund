import Navigation from 'src/components/Navigation'

const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
