import React from 'react'

export const Lead = ({
  children,
  as = 'p',
  withMargins = false,
  className = '',
  ...props
}) => {
  const Component = as
  const marginClasses = withMargins ? 'mb-2 mt-4 mw-8 max-w-lg' : ''
  return (
    <Component
      className={`text-xl font-body text-gray-900 sm:text-2xl ${marginClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
