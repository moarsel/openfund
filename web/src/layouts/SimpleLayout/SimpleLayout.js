const SimpleLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center px-4 py-8 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">{children}</div>
    </div>
  )
}

export default SimpleLayout
