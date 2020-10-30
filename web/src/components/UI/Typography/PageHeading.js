import React from 'react'

export const PageHeading = ({ children, className = '', ...props }) => {
  return (
    <h1
      className={`text-4xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate ${className}`}
      {...props}
    >
      {children}
    </h1>
  )
}
