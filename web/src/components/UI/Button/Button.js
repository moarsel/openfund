import React from 'react'

export function Button({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) {
  const variantClassNames = {
    primary: 'button-primary',
    secondary: 'button-secondary',
  }
  return (
    <button
      type={type}
      className={`${variantClassNames[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
