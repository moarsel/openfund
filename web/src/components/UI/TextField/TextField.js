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
      className={`form-input block w-full ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
