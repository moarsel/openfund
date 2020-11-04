import { Link } from '@redwoodjs/router'
import React from 'react'
import { Logo } from './Logo'

export function Navbar({ children, utilitySection, className = '', ...props }) {
  return (
    <nav className={`${className} bg-white`} {...props}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" aria-label="Home" className="flex-shrink-0">
              <Logo />
            </Link>
            <div className="flex items-baseline space-x-4 sm:ml-10">
              {children}
            </div>
          </div>
          <div className="flex items-center ml-2 md:ml-6">
            <div className="flex-shrink-0 ml-3 ">{utilitySection}</div>
          </div>
        </div>
      </div>
    </nav>
  )
}
