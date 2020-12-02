import React from 'react'

export function TextField({
  as = 'input',
  type = 'text',
  className,
  children,
  ...props
}) {
  const Component = as

  return (
    <Component
      type={type}
      className={`rounded border-2 border-gray-800 focus:border-gray-800 focus:ring-4 focus:ring-gray-500 text-base block w-full ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
