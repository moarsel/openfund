export const Body = ({
  as = 'p',
  withMargins = false,
  className = 'text-gray-900',
  children,
  ...props
}) => {
  const Component = as
  const marginClasses = withMargins ? 'mb-2 mt-3 max-w-xl' : ''
  return (
    <Component
      className={`text-md font-body sm:text-lg ${marginClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
