import React from 'react'

export const PageHeading = ({ children, className = '', ...props }) => {
  return (
    <h1
      className={`text-4xl font-display font-bold text-gray-900 sm:text-5xl ${className}`}
      {...props}
    >
      {children}
    </h1>
  )
}
