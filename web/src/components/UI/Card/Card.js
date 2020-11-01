import React from 'react'

export function Card({ className = '', as = 'section', children, ...props }) {
  const Component = as
  return (
    <Component
      className={`overflow-hidden rounded shadow-lg bg-white ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
