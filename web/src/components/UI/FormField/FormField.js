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
  const LabelComponent = as === 'fieldset' ? 'legend' : 'span'
  const fieldId = `form-field-${useId()}`
  const describedById = `description-${fieldId}`
  return (
    <>
      <Component className={className} {...props}>
        <LabelComponent className={`block label mb-1 text-gray-700 `}>
          {label}
        </LabelComponent>
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child, {
            id: `${fieldId}-${i}`,
            'aria-describedby': describedById,
          })
        })}
      </Component>
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
