const BasicLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center px-4 py-8 mx-auto my-12 bg-gray-50 sm:px-6 lg:px-8 lg:container lg:mx-auto ">
      <div className="">{children}</div>
    </div>
  )
}

export default BasicLayout
