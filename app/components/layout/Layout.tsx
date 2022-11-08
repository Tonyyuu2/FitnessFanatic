import React, { ReactComponentElement } from 'react'
import NavBar from './NavBar'

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  )
}
