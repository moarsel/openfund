import React from 'react'

export function Logo() {
  return (
    <>
      <img
        className="block sm:hidden"
        width="45px"
        height="45px"
        src="/logo-sm.svg"
        alt="FundOSS"
      />
      <img
        className="hidden sm:block"
        width="155px"
        src="/logo-lg.svg"
        alt="FundOSS"
      />
    </>
  )
}
