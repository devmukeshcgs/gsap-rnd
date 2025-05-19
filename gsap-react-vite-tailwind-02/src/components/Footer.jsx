import React from 'react'
import { footerLinks } from '../constants'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 LineupsPro Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <Link
                to={link.link}
                // target="_blank"
                rel="noopener noreferrer"
                key={link.name}
                className="font-semibold text-gray text-xs"
              >
                {link.name}
                {i !== footerLinks.length - 1 && <span className="mx-2">|</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer