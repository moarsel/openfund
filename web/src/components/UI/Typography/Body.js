export const Body = ({ as = 'p', className = '', children, ...props }) => {
  const Component = as
  return (
    <Component
      className={`text-md font-body text-gray-900 sm:text-lg ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
