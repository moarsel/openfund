import { NavLink } from '@redwoodjs/router'
import React from 'react'

export function Navlink({ className = '', children, to, ...props }) {
  return (
    <NavLink
      to={to}
      activeClassName="border-b-2 rounded-b-none border-gray-700"
      className={`px-1 sm:px-3 py-2 transition duration-150 ease-in-out whitespace-nowrap text-md uppercase font-medium text-gray-900 rounded-t-sm focus:outline-none focus:text-gray-900 focus:bg-gray-300 ${className}`}
      {...props}
    >
      {children}
    </NavLink>
  )
}
