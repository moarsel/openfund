import React from 'react'

export const PageHeading = ({
  children,
  className = 'text-gray-900',
  ...props
}) => {
  return (
    <h1
      className={`text-4xl font-display font-black sm:text-5xl ${className}`}
      {...props}
    >
      {children}
    </h1>
  )
}
