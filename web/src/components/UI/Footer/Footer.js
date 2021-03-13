import { Link } from '@redwoodjs/router'
import React from 'react'
import { Body } from '..'
import { Logo } from '../Navigation/Logo'

export function Footer() {
  return (
    <footer className="pb-36 pt-28 bg-purple-darkest">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" aria-label="Home" className="flex-shrink-0">
              <Logo />
            </Link>
          </div>
        </div>
        <div className="my-4">
          <Body className="mt-3 text-white uppercase">Platform</Body>
          <ul>
            <li className="text-white">
              <a className="hover:underline" href="#">
                About
              </a>
            </li>
            <li className="text-white">
              <a className="hover:underline" href="#">
                FAQ
              </a>
            </li>
            <li className="text-white">
              <a className="hover:underline" href="#">
                How it works
              </a>
            </li>
            <li className="text-white">
              <a className="hover:underline" href="#">
                WTFisQF.com
              </a>
            </li>
          </ul>
          <Body className="mt-3 text-white uppercase">Social</Body>
          <ul>
            <li className="text-white">
              <a className="hover:underline" href="#">
                Twitter
              </a>
            </li>
            <li className="text-white">
              <a className="hover:underline" href="#">
                Facebook
              </a>
            </li>
            <li className="text-white">
              <a className="hover:underline" href="#">
                OSC Slack
              </a>
            </li>
            <li className="text-white">
              <a className="hover:underline" href="#">
                Gitcoin Slack
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
