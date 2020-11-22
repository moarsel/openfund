import React from 'react'
import { useId } from 'src/utils/useId'

export function FormField({
  as = 'label',
  label = '',
  className = '',
  children,
  description,
  ...props
}) {
  const Component = as
  const fieldId = `form-field-${useId()}`
  const describedById = `description-${fieldId}`
  return (
    <>
      <Component
        htmlFor={fieldId}
        className={`block label mb-1 text-gray-700 ${className}`}
        {...props}
      >
        {label}
      </Component>
      {children &&
        React.cloneElement(children, {
          id: fieldId,
          'aria-describedby': describedById,
        })}
      <span
        className="block"
        style={description ? { minHeight: '2rem' } : {}}
        id={describedById}
      >
        {description}
      </span>
    </>
  )
}
