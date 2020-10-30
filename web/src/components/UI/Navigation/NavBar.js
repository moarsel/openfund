import { Link } from '@redwoodjs/router'
import React from 'react'
import { Logo } from './Logo'

export function Navbar({ children, utilitySection, className = '', ...props }) {
  return (
    <nav className={`${className} bg-white`} {...props}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" aria-label="Home">
              <Logo />
            </Link>
            <div className="flex items-baseline ml-10 space-x-4">
              {children}
            </div>
          </div>
          <div className="flex items-center ml-3 md:ml-6">
            <div className="relative ml-3">{utilitySection}</div>
          </div>
        </div>
      </div>
    </nav>
  )
}
