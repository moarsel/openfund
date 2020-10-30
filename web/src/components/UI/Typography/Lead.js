import React from 'react'

export const Lead = ({ children, as = 'p', className = '', ...props }) => {
  const Component = as
  return (
    <Component
      className={`text-xl font-body text-gray-900 sm:text-2xl ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
